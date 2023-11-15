import * as React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { CustomToolbar } from "../Components/Toolbar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { SearchBar } from "../Components/SearchBar";

export function Login() {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Box>
      <CustomToolbar />
      <SearchBar />

      <Box mt={"2%"} justifyContent={"center"} display="flex">
        <img src="Personagem.png" alt="personagem" width="800px" />
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

              <Box
                sx={{ width: "550.941px", height: "57.49px", flexShrink: 0 }}
              >
                <Button
                  type="submit"
                  // href="/home"
                  variant="contained"
                  color="primary"
                  sx={{ width: "530px" }}
                >
                  <Typography
                    sx={{
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "40px" /* 222.222% */,
                      letterSpacing: "1.44px",
                    }}
                  >
                    Login{" "}
                  </Typography>
                </Button>
              </Box>
              <Box
                //mt={-3.8}
                //mr={"30px"}
                textAlign={"center"}
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "135.5%",
                }}
              >
                <Link component="button" sx={{ color: "#6358DC" }}>
                  <a href="\Signup">Ainda não tem uma conta?</a>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
