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
          <img href="/Home" src="logo.svg" alt="logo" width="61px" height="58px"/>
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
          <BootstrapButton
            href="/Login"
            sx={{
              borderRadius: "50px",
              border: "1px solid #84E",
              background: "#FFF",
              width: "138px",
              height: "50px",
              flexShrink: 0,
              marginRight: "20px"
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
