import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";

export const CustomToolbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white", padding: "2px"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <img src="logo.svg" alt="logo" width="61px" height="58px"/>
          <Typography variant="h6" component="div" sx={{fontWeight: 700, fontFamily: "Righteous", fontSize: "24px", flexGrow: 1, color: "#848484", marginLeft: "30px" }}>
            Inclusion Town
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
