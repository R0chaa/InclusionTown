import { Box, Grid } from "@mui/material";
import { CustomToolbar } from "../Components/Toolbar";
import { SearchBar } from "../Components/SearchBar";
import React from "react";
import MyComponent from "../Components/MapAPI";
import { BasicSelect } from "../Components/Filters";
import { ReviewCard, ReviewCard2 } from "../Components/Cards";

export function Home() {
  const handleMarkerClick = (marker) => {
    console.log(`Marcador clicado: ${marker.address}`);
    // Adicione aqui o código para a navegação para outra tela
  };

  const handleMapClick = (lat, lng) => {
    console.log(`Mapa clicado em: ${lat}, ${lng}`);
    // Adicione aqui o código para a navegação para outra tela ou qualquer outra lógica desejada
  };

  return (
    <Box>
      <CustomToolbar />
      <SearchBar />
      <BasicSelect />
      <MyComponent onMarkerClick={handleMarkerClick} onMapClick={handleMapClick} />

      <Box>
        <Grid>
          <ReviewCard />
          <ReviewCard2 />
        </Grid>
      </Box>
    </Box>
  );
}
