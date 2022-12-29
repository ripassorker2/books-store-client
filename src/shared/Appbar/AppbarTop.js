import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Appbar.css";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import {
  FavoriteBorder,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import AppbarDropDown from "./AppbarDropDown";
const drawerWidth = 260;

function AppbarTop(props) {
  const { window, navItems } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link>
        <Typography variant="h6" sx={{ my: 2 }}>
          BOOK STORE
        </Typography>
      </Link>
      <Box sx={{ mb: 2 }}>
        <AppbarDropDown></AppbarDropDown>
      </Box>

      <Divider />
      <List>
        {navItems?.map((item) => (
          <List>
            <ListItem disablePadding>
              <Link key={item} to={`${item?.link}`}>
                <button className="mx-6">{item?.name}</button>
              </Link>
            </ListItem>
          </List>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="navbar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            className="menu-icon"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="page-title"
          >
            BOOK STORE
          </Typography>
          <Box className="top-nav-links">
            <Link to="/wisthlist" sx={{ color: "#fff" }} className="mx-3 lg:mx-4 text-xl ">
              <Badge color="secondary" badgeContent={99}>
                <FavoriteBorder></FavoriteBorder>
              </Badge>
            </Link>
            <Link to="/addtocart" sx={{ color: "#fff" }} className="mx-3 lg:mx-4 text-xl ">
              <Badge color="secondary" badgeContent={99}>
                <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
              </Badge>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

AppbarTop.propTypes = {
  window: PropTypes.func,
};

export default AppbarTop;
