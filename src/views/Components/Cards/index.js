import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { purple, green } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Button from "@mui/material/Button";
import FolderIcon from "@mui/icons-material/Folder";
import { useNavigate } from "react-router-dom";
//import { Grid } from "@mui/material";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

//const cards = [1, 2];

export const ReviewCard = ({nomeUser}) => {
  // const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const adr="R. da Consolação, 930 - Consolação, São Paulo - SP, 01302-907";
  const local="Universidade Presbiteriana Mackenzie";
  const photoUrl="https://www.mackenzie.br/fileadmin/user_upload/mackenzie_3740_041017.jpg";
  const placeRate=4.5;

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const handleRateClick = () => {
    navigate(
      `/rate?address=${encodeURIComponent(
        adr
      )}&name=${encodeURIComponent(
        local
      )}&photoUrl=${encodeURIComponent(photoUrl)}
      &userName=${nomeUser}
      &placeRate=${placeRate}`
    );
  };

  return (
    // cards.forEach(card => {
    // })

    <Card sx={{ maxWidth: "40%", maxHeight: 900, mt: "-67%", ml: "5%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
            <AssignmentIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Universidade Presbiteriana Mackenzie"
        subheader="Jan 04, 2002"
      />
      <CardMedia
        component="img"
        height="250"
        image="mackenzie.jpg"
        alt="mack"
      />
      <CardContent>
        <Typography sx={{ fontSize: "20px" }} color="text.secondary">
          Universidade Presbiteriana Mackenzie é uma instituição de ensino
          superior privada e confessional no Brasil. A universidade é mantida
          pelo Instituto Presbiteriano Mackenzie, uma associação civil de
          direito privado, sem fins lucrativos e de finalidade educacional.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="outlined" color="secondary" onClick={handleRateClick}>
          Deixar comentário
        </Button>
        <IconButton aria-label="add to favorites" sx={{ ml: "10px" }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Collapse timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Avaliações:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export const ReviewCard2 = ({nomeUser}) => {
  // const [expanded, setExpanded] = React.useState(false);

  const navigate = useNavigate();
  const adr="R. da Consolação - Consolação, São Paulo - SP, 01220-010";
  const local="Higienópolis-Mackenzie";
  const photoUrl="https://anptrilhos.org.br/wp-content/uploads/2018/01/Estação-Higienópolis-Mackenzie-Foto-Alexandre-Carvalho-A2img-15-600px.jpg";
  const placeRate=4;

  const handleRateClick = () => {
    navigate(
      `/rate?address=${encodeURIComponent(
        adr
      )}&name=${encodeURIComponent(
        local
      )}&photoUrl=${encodeURIComponent(photoUrl)}
      &userName=${nomeUser}
      &placeRate=${placeRate}`
    );
  };

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    // cards.forEach(card => {
    // })

    <Card sx={{ maxWidth: "40%", maxHeight: 900, mt: "50px", ml: "5%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            <FolderIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Higienópolis-Mackenzie"
        subheader="Mai 05, 2002"
      />
      <CardMedia
        component="img"
        height="250"
        image="higienopolis.jpg"
        alt="mack"
      />
      <CardContent>
        <Typography sx={{ fontSize: "20px" }} color="text.secondary">
          A Estação Higienópolis–Mackenzie é uma estação da Linha 4–Amarela do
          Metrô de São Paulo operada pela ViaQuatro. Ela possui área total de
          16,4 mil metros quadrados e profundidade de 30,7 metros divididos em
          seis níveis. Para permitir a acessibilidade a estação possui cinco
          elevadores, 26 escadas rolantes e 10 escadas fixas, além de pisos
          táteis.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="outlined" color="secondary" onClick={handleRateClick} >
          Deixar comentário
        </Button>
        <IconButton aria-label="add to favorites" sx={{ ml: "10px" }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Collapse timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Avaliações:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
