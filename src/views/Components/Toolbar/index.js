import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#D5C0F3",
    borderColor: "#84E",
    boxShadow: "none",
  },
});

export function AccountMenu(nomeUser) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Configurações">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ ml: "-35px", bgcolor: deepPurple[500] }}>
              {nomeUser && nomeUser[0]}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar />
          <Typography sx={{ ml: "15px" }}>{nomeUser}</Typography>
        </MenuItem>
        <Divider />
        <a style={{ textDecoration: "none", color: "gray" }} href="\signup">
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Entrar em outra conta
          </MenuItem>
        </a>
        <a style={{ textDecoration: "none", color: "gray" }} href="\login">
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </a>  
      </Menu>
    </React.Fragment>
  );
}

export const CustomToolbar = ({ isAuthenticated, nomeUser }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(`/home?name=${nomeUser}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", padding: "2px" }}
      >
        <Toolbar>
          <IconButton
            onClick={handleHomeClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>

          <img src="logo.svg" alt="logo" width="61px" height="58px" />
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
          {isAuthenticated && (
            <Button onClick={handleHomeClick} sx={{ mr: "10px" }}>
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
            </Button>
          )}
          {!isAuthenticated && (
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
          )}
          {isAuthenticated && (
            <Stack direction="row" spacing={2}>
              {/* <Avatar sx={{ bgcolor: deepPurple[500] }}>{nomeUser && nomeUser[0]}</Avatar> */}
              {AccountMenu(nomeUser)}
            </Stack>
          )}
          {isAuthenticated && nomeUser && (
            <Typography
              sx={{ ml: "10px", mt: "1px", color: "gray", fontWeight: 500 }}
            >
              {nomeUser}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
