import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Buttons from "./button";
import LogoImage from "../assets/PtpLogo.svg";
import "./header-style.css";

const pages = ["Support", "About"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "transparent", boxShadow: 'none', width: "100vw" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={LogoImage}
            alt="Logo"
            style={{
              display: "flex",
              alignItems: "center",
              height: "2.5rem", // Adjust the height as needed
              marginLeft: "1rem" // Add margin-left to push the logo to the left
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", sm: "flex" }, marginRight: 3 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: "white" }}
                className="menu-option" // Add a class for styling
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, marginRight: 3 }}>
            <Buttons text="SIGN UP" />
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            onClick={handleCloseNavMenu}
            className="menu-option" // Add a class for styling
          >
            {setting}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}

export default ResponsiveAppBar;
