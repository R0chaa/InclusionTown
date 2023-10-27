import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Typography } from "@mui/material";
import React from "react";

export const BasicSelect = () => {
  const [Estabelecimento, setEstabelecimento] = React.useState("");

  const handleChange = (event) => {
    setEstabelecimento(event.target.value);
  };

  return (
    <Box>
      <Box sx={{ width: "10%", ml: "25%", mt: "50px" }}>
        <FormControl fullWidth>
          <InputLabel id="estabelecimento">Estabelecimento</InputLabel>
          <Select
            labelId="estabelecimento"
            id="estabelecimento-select"
            value={Estabelecimento}
            label="Estabelecimento"
            onChange={handleChange}
          >
            <MenuItem value={10}>Estabelecimento</MenuItem>
            <MenuItem value={20}>Restaurante</MenuItem>
            <MenuItem value={30}>Shopping</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ ml: "680px", mt: "-56px", width: "56px" }}>
        <img src="menu.svg" alt="menu" />
      </Box>
      <Box sx={{ ml: "750px", mt: "-59px", width: "56px" }}>
        <img src="list.svg" alt="list" />
      </Box>
      <Typography
        sx={{
          color: "#717171",
          fontFamily: "Lato",
          fontSize: "25px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          mt: "-48px",
          ml: "150px",
        }}
      >
        Locais em destaque
      </Typography>
    </Box>
  );
};
