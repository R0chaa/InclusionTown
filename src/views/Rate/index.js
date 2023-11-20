import { Box, Button, Grid, Typography, Paper } from "@mui/material";
import { CustomToolbar } from "../Components/Toolbar";
import { SearchBar } from "../Components/SearchBar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RateCard } from "../Components/Review";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import TextField from "@mui/material/TextField";
import Cookies from "js-cookie";

import {
  insereNotaHashmap,
  getHashMap,
} from "../../App";

let hashmapNotas = {};

const acessibilidade = [
  "Deficiência física",
  "Cegueira",
  "Deficiência psicossocial",
  "Deficiência intelectual",
  "Transtorno do Espectro do Autismo (TEA)",
];

const labels = {
  0.5: "Ruim",
  1: "Ruim+",
  1.5: "Regular",
  2: "Regular+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Bom",
  4: "Bom+",
  4.5: "Excelente",
  5: "Excelente+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export function HoverRating({ value, onChange }) {
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>
          <Typography
            variant="body2"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {labels[hover !== -1 ? hover : value]}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export function FormControlLabelPosition({ label, placeRate }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  //const numeroAleatorioInicial = Math.floor(Math.random() * 5) + (placeRate/2);
  const numeroAleatorioInicial = getHashMap(name);

  const [numeroAleatorio] = useState(
    numeroAleatorioInicial
  );

  useEffect(() => {
    // const novoNumeroAleatorio = Math.floor(Math.random() * 5) + 1;
    // setNumeroAleatorio(novoNumeroAleatorio);
    getHashMap(name);
    // eslint-disable-next-line
  }, []);
  

  const [rating, setRating] = useState(numeroAleatorio);
  const [switchState, setSwitchState] = useState(false);

  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };

  const handleSwitchChange = () => {
    setSwitchState(!switchState);
  };

  //insereNotaHashmap(name, numeroAleatorioInicial);
  hashmapNotas[label] = rating;

  //console.log(hashmapNotas);
  return (
    <Paper
      sx={{
        borderRadius: 2,
        padding: 1,
        marginBottom: 2,
        borderColor: "#A9A9A9",
        borderStyle: "solid",
        borderWidth: 2,
        width: "80%",
      }}
    >
      <FormControl sx={{ ml: "15px" }} component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={
              <Switch
                color="secondary"
                checked={switchState}
                onChange={handleSwitchChange}
              />
            }
            label={label}
            labelPlacement="end"
          />
          {switchState && (
            <HoverRating value={rating} onChange={handleRatingChange} />
          )}
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
  const userName = params.get("userName");
  const placeRate = getHashMap(name);
  const [comentarios, setComentarios] = useState("");
  const [comments, setComments] = useState([]);

  const handleComentarioChange = (event) => {
    setComentarios(event.target.value);
    // Limpa a mensagem de erro ao começar a digitar
    setErroComentario(false);
  };

  function reloadPage() {
    window.location.reload();
  }

  const handleAcessSubmit = () => {
    console.log("name: ", name);
    console.log("hashmapNotas: ", hashmapNotas);
    insereNotaHashmap(name, hashmapNotas);

    setComments([...comments, { local: userName, comentario: comentarios }]);
    setComentarios("");
    setErroComentario(false);
    reloadPage();
  };

  const handleComentarioSubmit = () => {
    // Verificar se o campo de comentário está vazio
    if (comentarios.trim() === "") {
      // Se estiver vazio, exibir mensagem de erro
      setErroComentario(true);
      return;
    }

    // Adicionar o novo comentário à lista
    setComments([...comments, { local: userName, comentario: comentarios }]);

    // Limpar o campo de comentários
    setComentarios("");
    // Limpar mensagem de erro
    setErroComentario(false);
  };

  const imgUrl =
    photoUrl !== null
      ? photoUrl
      : "https://source.unsplash.com/random?wallpapers";

  const [isAuthenticated] = useState(true);

  const [erroComentario, setErroComentario] = useState(false);

  // Carregar comentários salvos em cookies ao montar o componente

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const savedComments = Cookies.get("comments");
    if (savedComments && JSON.stringify(comments) !== savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  // Salvar comentários em cookies sempre que a lista de comentários for atualizada
  useEffect(() => {
    Cookies.set("comments", JSON.stringify(comments));
  }, [comments]); // Adicione 'comments' ao array de dependências

  return (
    <Box>
      <Box>
        <CustomToolbar isAuthenticated={isAuthenticated} nomeUser={userName} />
        <SearchBar />
      </Box>
      <Grid container>
        <Grid item xs={6}>
          <Box mt={"200px"}>
            <img
              style={{ width: "250px", transform: "rotate(-172.15deg)" }}
              src="rocket.png"
              alt="rocket"
            />
            <Box ml={20} mt={"-60%"}>
              <RateCard
                adr={adr}
                name={name}
                photoUrl={imgUrl}
                comments={comments}
                placeRate={placeRate}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box mt={-2}>
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
                  <FormControlLabelPosition
                    label={label}
                    placeRate={placeRate}
                  />
                </React.Fragment>
              ))}
            </Box>
            <TextField
              sx={{ width: "95%", ml: "20px", mt: "10px" }}
              label="Comentário"
              id="comentario"
              value={comentarios}
              onChange={handleComentarioChange}
            />
            {erroComentario && (
              <Typography sx={{ ml: "20px", color: "red", fontSize: "14px" }}>
                Por favor, digite um comentário.
              </Typography>
            )}
            <Button
              onClick={handleComentarioSubmit}
              sx={{
                mt: "30px",
                mb: "40px",
                ml: "50%",
                color: "#8844EE",
                fontSize: "18px",
              }}
            >
              Adicionar Comentário
            </Button>
            <Button
              onClick={handleAcessSubmit}
              sx={{
                mt: "-13%",
                mb: "40px",
                ml: "85%",
                color: "#8844EE",
                fontSize: "18px",
              }}
            >
              Enviar
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
