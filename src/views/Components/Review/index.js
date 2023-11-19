import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";

const labels = {
  0.5: "Eca",
  1: "+ou- Eca",
  1.5: "Pobre",
  2: "Pobre+",
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

export function HoverRating() {
  const [value, setValue] = React.useState(2);
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
          setValue(newValue);
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

export function RateCard({ adr, name, photoUrl }) {
  return (
    <Card sx={{ maxWidth: 600, ml: "15%", mt: "16vh" }}>
      <CardMedia sx={{ height: 400 }} image={photoUrl} title="place" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {adr}
        </Typography>
      </CardContent>
      <CardActions>{HoverRating()}</CardActions>
    </Card>
  );
}
