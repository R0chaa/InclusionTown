import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#D5C0F3",
    borderColor: "#84E",
    boxShadow: "none",
  },
});

export const CustomToolbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", padding: "2px" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <img
            href="/Home"
            src="logo.svg"
            alt="logo"
            width="61px"
            height="58px"
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontFamily: "Righteous",
              fontSize: "24px",
              flexGrow: 1,
              color: "#848484",
              marginLeft: "30px",
            }}
          >
            Inclusion Town
          </Typography>
          <a href="/Home">
            <Box sx={{ mr: "10px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="44"
                viewBox="0 0 66 59"
                fill="none"
              >
                <path
                  d="M60.5 54.0833H5.5"
                  stroke="#717171"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M5.5 27.0416L16.6731 19.0513M60.5 27.0416L38.1538 11.0608C35.1406 8.90601 30.8594 8.90601 27.8462 11.0608L25.6959 12.5986"
                  stroke="#717171"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M42.625 13.5208V8.60417C42.625 7.92532 43.2407 7.375 44 7.375H50.875C51.6343 7.375 52.25 7.92532 52.25 8.60417V20.8958"
                  stroke="#717171"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M11 54.0833V23.3542"
                  stroke="#717171"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M55 23.3542V33.1875M55 54.0833V43.0208"
                  stroke="#717171"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M41.25 54.0833V41.7917C41.25 38.3151 41.25 36.5768 40.0419 35.4966C38.8336 34.4167 36.889 34.4167 33 34.4167C29.111 34.4167 27.1664 34.4167 25.9582 35.4966M24.75 54.0833V41.7917"
                  stroke="#717171"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M38.5 23.3542C38.5 26.0696 36.0376 28.2708 33 28.2708C29.9623 28.2708 27.5 26.0696 27.5 23.3542C27.5 20.6388 29.9623 18.4375 33 18.4375C36.0376 18.4375 38.5 20.6388 38.5 23.3542Z"
                  stroke="#717171"
                  stroke-width="4"
                />
              </svg>
            </Box>
          </a>
          <BootstrapButton
            href="/Login"
            sx={{
              borderRadius: "50px",
              border: "1px solid #84E",
              background: "#FFF",
              width: "138px",
              height: "50px",
              flexShrink: 0,
              marginRight: "20px",
            }}
          >
            <Typography
              sx={{
                color: "#84E",
                textAlign: "center",
                fontFamily: "Lato",
                fontSize: "17px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Login
            </Typography>
          </BootstrapButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
