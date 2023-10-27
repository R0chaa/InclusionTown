import { Box, Typography, TextField, Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#7219f7",
    borderColor: "#84E",
    boxShadow: "none",
  },
});

export const SearchBar = () => {
  return (
    <Box
      sx={{
        height: "120px",
        backgroundColor: "#717171",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        gap: "20px",
      }}
    >
      <Box display="flex" alignItems="center">
        <FilterListIcon style={{ color: "white" }} />
        <Typography color="white" sx={{ fontSize: "25px", marginLeft: "10px" }}>
          Filtros
        </Typography>
      </Box>

      <TextField
        id="outlined-basic"
        label="Digite o que procura"
        variant="outlined"
        sx={{ backgroundColor: "white", borderRadius: "5px" }}
      />
      <TextField
        id="outlined-basic"
        label="Estado"
        variant="outlined"
        sx={{ backgroundColor: "white", borderRadius: "5px" }}
      />
      <TextField
        id="outlined-basic"
        label="Cidade"
        variant="outlined"
        sx={{ backgroundColor: "white", borderRadius: "5px" }}
      />
      <TextField
        id="outlined-basic"
        label="Todos os filtros"
        variant="outlined"
        sx={{ backgroundColor: "white", borderRadius: "5px" }}
      />

      <BootstrapButton
        sx={{
          backgroundColor: "#84E",
          color: "white",
          width: "200px",
          height: "50px",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          Buscar
        </Typography>
      </BootstrapButton>
    </Box>
  );
};
