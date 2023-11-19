import { Box, Button, Grid, Typography, Paper } from "@mui/material";
import { CustomToolbar } from "../Components/Toolbar";
import { SearchBar } from "../Components/SearchBar";
import React from "react";
import { useLocation } from "react-router-dom";
import { RateCard } from "../Components/Review";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const acessibilidade = [
  "Deficiência física",
  "Cegueira",
  "Deficiência psicossocial",
  "Deficiência intelectual",
  "Transtorno do Espectro do Autismo (TEA)",
];

export function FormControlLabelPosition({ label }) {
  return (
    <Paper
      sx={{
        borderRadius: 2,
        padding: 1,
        marginBottom: 2,
        borderColor: "#A9A9A9",
        borderStyle: "solid",
        borderWidth: 2,
        width: "50%",
      }}
    >
      <FormControl sx={{ ml: "15px" }} component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={<Switch color="secondary" />}
            label={label}
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
    </Paper>
  );
}

export function Rate() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const adr = params.get("address");
  const name = params.get("name");
  const photoUrl = params.get("photoUrl");

  const imgUrl =
    photoUrl !== null
      ? photoUrl
      : "https://source.unsplash.com/random?wallpapers";

  return (
    <Box>
      <Box>
        <CustomToolbar />
        <SearchBar />
      </Box>
      <Grid container>
        <Grid item xs={6}>
          <Box mt={35}>
            <img
              style={{ width: "250px", transform: "rotate(-172.15deg)" }}
              src="rocket.png"
              alt="rocket"
            />
            <Box ml={20} mt={"-60%"}>
              <RateCard adr={adr} name={name} photoUrl={imgUrl} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography
              sx={{
                mt: "4%",
                fontSize: "70px",
                color: "#1F1F1F",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 900,
                lineHeight: "108.969%",
              }}
            >
              Deixe sua opinião:
            </Typography>
          </Box>
          <div
            style={{
              width: "800px",
              height: "80%",
              borderRadius: 30,
              border: "2px #8844EE solid",
              marginTop: "15px",
            }}
          >
            <Typography
              sx={{ mt: "20px", ml: "20px", fontWeight: 500, fontSize: "18px" }}
            >
              Nível de acessibilidade
            </Typography>
            <Box sx={{ mt: "15px", ml: "20px" }}>
              {acessibilidade.map((label, index) => (
                <React.Fragment key={index}>
                  <FormControlLabelPosition label={label} />
                </React.Fragment>
              ))}
            </Box>
            <Button sx={{ mt: "10px", ml: "20px", color: "#8844EE" }}>
              Deixar comentário
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
