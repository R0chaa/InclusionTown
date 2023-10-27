import * as React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { CustomToolbar } from "../Components/Toolbar";
import FilterListIcon from "@mui/icons-material/FilterList";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#7219f7",
    borderColor: "#84E",
    boxShadow: "none",
  },
});

export function Login() {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Box>
      <CustomToolbar />

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
          <Typography
            color="white"
            sx={{ fontSize: "25px", marginLeft: "10px" }}
          >
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
          Buscar
        </BootstrapButton>
      </Box>

      <Box mt={"2%"} justifyContent={"center"} display="flex">
        <img src="Personagem.png" alt="personagem" width="800px"/>
        <Box ml={15}>
          {/* <Typography color="black" sx={{ fontSize: "65px", fontWeight: 700, fontFamily: "Poppins" }}>
            Avalie e apoie a<br/> inclusão em sua<br/> cidade
          </Typography> */}
          <img width="530px" src="apoie.svg" alt="apoie" />
          <Typography
            sx={{
              color: "#515050",
              fontFamily: "Poppins",
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "152.7%",
              mt: "25px",
            }}
          >
            Pharetra blandit augue volutpat libero augue semper. Non diam
            <br /> neque praesent sem senectus mauris lectus a urna. Tortor
            <br /> pellentesque ipsum tincidunt enim.
          </Typography>

          <Box mt="25px">
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              sx={{ width: "95%" }}
            />
          </Box>

          <Box mt={3}>
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              type={showPassword ? "password" : "text"}
              sx={{ width: "95%" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      sx={{ position: "end", mr: "-10px", color: "#696969" }}
                      id="show-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <Box>
              <Box mt={2} textAlign={"left"}>
                <FormControlLabel
                  sx={{ color: "#696969" }}
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "#D9D9D9",
                        "&.Mui-checked": {
                          color: "#6358DC",
                        },
                      }}
                    />
                  }
                  label="Lembrar-me"
                />
              </Box>
              <Button
                  type="submit"
                  // href="/home"
                  variant="contained"
                  color="primary"
                >
                  <Typography sx={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 700 }}> Entrar </Typography>
                </Button>
              <Box
                mt={-3.8}
                mr={"30px"}
                textAlign={"right"}
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "135.5%",
                }}
              >
                <Link component="button" sx={{ color: "#6358DC" }}>
                  Esqueceu a senha?
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
