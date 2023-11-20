import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  width: "50%",
  height: "150vh",
  position: "relative",
  marginLeft: "50%",
  marginTop: "-91px",
};

const center = {
  lat: -23.548033732142105,
  lng: -46.65016164489669,
};

function MyComponent({ nomeUser, onMarkerClick, onMapClick }) {
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"], // Adicione a biblioteca Places
  });

  const markers = [
    { id: 1, address: "UPM", lat: -23.5482739, lng: -46.6513502 },
    { id: 2, address: "República", lat: -23.5442213, lng: -46.6429095 },
    // { id: 3, address: "Luz", lat: -23.5418442, lng: -46.657499 },
  ];

  const [map, setMap] = React.useState(null);

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
    setMap(map);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const getPlaceDetails = (placeId) => {
    return new Promise((resolve, reject) => {
      const service = new window.google.maps.places.PlacesService(map);
      const request = {
        placeId: placeId,
        fields: ["name", "rating", "formatted_phone_number", "photos"],
      };

      service.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          resolve(place);
          console.log("Rating: ", place.rating);
        } else {
          console.log("Erro ao obter detalhes do local:", status);
          reject(status);
        }
      });
    });
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={(event) => {
        onMapClick(event.latLng.lat(), event.latLng.lng());
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode(
          { location: { lat: event.latLng.lat(), lng: event.latLng.lng() } },
          (results, status) => {
            if (status === "OK" && results[0]) {
              console.log(`Endereço: ${results[0].formatted_address}`);
              getPlaceDetails(results[0].place_id)
                .then((place) => {
                  console.log("Detalhes do local:", place);
                  const photoUrl =
                    place.photos && place.photos.length > 0
                      ? place.photos[0].getUrl()
                      : null;
                  navigate(
                    `/rate?address=${encodeURIComponent(
                      results[0].formatted_address
                    )}&name=${encodeURIComponent(
                      place.name
                    )}&photoUrl=${encodeURIComponent(photoUrl)}
                    &userName=${nomeUser}
                    &placeRate=${place.rating}`
                  );
                })
                .catch((error) => {
                  console.error("Erro ao obter detalhes do local:", error);
                });
            } else {
              console.log(`Erro ao obter o endereço para estas coordenadas.`);
            }
          }
        );
      }}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => {
            onMarkerClick(marker);
            console.log(`Marcador clicado: ${marker.address}`);
            navigate(
              `/rate?address=${encodeURIComponent(
                marker.address
              )}&name=${encodeURIComponent(marker.name)}&userName=${nomeUser}`
            );
            getPlaceDetails(marker.placeId); // Certifique-se de adicionar um ID de lugar (placeId) a cada marcador
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
