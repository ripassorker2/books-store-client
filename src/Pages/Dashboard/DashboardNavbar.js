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

import { Link } from "react-router-dom";
import "./Dashboard.css";
const drawerWidth = 260;

function DashboardNavbar(props) {
  const { window, dashboardNavItems } = props;
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

      <Divider />
      <List>
        {dashboardNavItems?.map((item) => (
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="menu-icon"
          >
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
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="page-title"
          >
            BOOK STORE
          </Typography>
          <Typography component="div" className="dashboard-navlinks ">
            <Link to="/">
              <button className="mx-2 md:mx-6">Home</button>
            </Link>
            <Link to="/allproducts">
              <button className="mx-2 md:mx-6">Shop</button>
            </Link>
            <Link to="/blog">
              <button className="mx-2 md:mx-6">Blog</button>
            </Link>
          </Typography>
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

DashboardNavbar.propTypes = {
  window: PropTypes.func,
};

export default DashboardNavbar;
