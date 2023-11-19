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
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const validEmail = process.env.REACT_APP_VALID_EMAIL;
const validPassword = process.env.REACT_APP_VALID_PASSWORD;
const validUsername = process.env.REACT_APP_VALID_USERNAME;

const users = [
  { email: validEmail, password: validPassword, name: validUsername},
  // Adicione outros usuários conforme necessário
];

export function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const firstName = params.get("firstName");
  const lastName = params.get("lastName");
  const mail = params.get("mail");
  const passwordUser = params.get("passwordUser");

  if (mail) {
    users.push({ email: mail, password: passwordUser, name: firstName + " " + lastName});
  }

  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      console.log("Login bem-sucedido!");
      setIsAuthenticated(true);
      navigate(`/home?name=${user.name}`);
    } else {
      setError("Credenciais inválidas. Tente novamente.");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Box>
      <CustomToolbar isAuthenticated={isAuthenticated}/>
      <SearchBar />

      <Box mt={"2%"} justifyContent={"center"} display="flex">
        <img src="Personagem.png" alt="personagem" width="800px" />
        <Box ml={15}>
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
            Inclusão é a chave para um futuro vibrante e diversificado.<br/> 
            Promovemos um ambiente acolhedor, onde a diversidade<br/> é celebrada e
            cada voz é valorizada.
          </Typography>

          <Box mt="25px">
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              sx={{ width: "95%", borderColor: error && "#f44336" }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              error={error !== ""}
              helperText={error}
            />
          </Box>

          <Box mt={3}>
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              type={showPassword ? "password" : "text"}
              sx={{ width: "95%", borderColor: error && "#f44336" }}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              error={error !== ""}
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
                  variant="contained"
                  color="primary"
                  sx={{ width: "530px" }}
                  onClick={handleLogin}
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
                textAlign={"center"}
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "135.5%",
                  color: "#f44336", // Cor do erro
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
