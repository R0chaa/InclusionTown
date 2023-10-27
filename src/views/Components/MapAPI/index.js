import { GoogleMap } from "@react-google-maps/api";
import { useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "50%",
  height: "100vh",
  position: "relative",
  marginLeft: "50%",
};

const center = {
  lat: -23.548033732142105,
  lng: -46.65016164489669,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyByv9We4A7ctrp3a6I-Xz9uIBuOpx0Dymo",
  });

  const [map, setMap] = React.useState(null);
  console.log(map);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
