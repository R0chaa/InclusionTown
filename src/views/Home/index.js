import { Box, Grid } from "@mui/material";
import { CustomToolbar } from "../Components/Toolbar";
import { SearchBar } from "../Components/SearchBar";
import { useLoadScript } from "@react-google-maps/api";
import React from "react";
import MyComponent from "../Components/MapAPI";
import { BasicSelect } from "../Components/Filters";
import { ReviewCard, ReviewCard2 } from "../Components/Cards";

export function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Box>
      <CustomToolbar />
      <SearchBar />
      <BasicSelect />
      <MyComponent />

      <Box>
        <Grid>
          <ReviewCard />
          <ReviewCard2 />
        </Grid>
      </Box>

      {/* <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByv9We4A7ctrp3a6I-Xz9uIBuOpx0Dymo&libraries=places&callback=initMap"
      /> */}
    </Box>
  );
}
