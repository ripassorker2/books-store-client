import * as React from "react";
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
import Button from "@mui/material/Button";
import "./Navbar.css";
import {
  Avatar,
  Badge,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import {
  FavoriteBorder,
  HeartBroken,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import NavLinksBar from "./NavLinksBar";

const drawerWidth = 240;
const navItems = ["Home", "Pages", "Shop", "Blog", "Gallery"];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} className="drawer-content-style">
        <span className="text-[16px] ml-3">All Category</span>
        <Box>
          <Button>
            <Badge color="secondary" badgeContent={99}>
              <FavoriteBorder></FavoriteBorder>
            </Badge>
          </Button>
          <Button>
            <Badge color="secondary" badgeContent={99}>
              <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
            </Badge>
          </Button>
        </Box>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <List>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
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
      <AppBar component="nav" className="navbar-bg">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
            className="menu-icon"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="menu-element"
          >
            Book Store
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Paper
              className="input-style"
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Find your product"
                inputProps={{ "aria-label": "search google maps" }}
              />

              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                className="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Typography>
          <Box className="menu-element">
            <Button sx={{ color: "#fff" }}>
              <Badge color="secondary" badgeContent={99}>
                <FavoriteBorder></FavoriteBorder>
              </Badge>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Badge color="secondary" badgeContent={99}>
                <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
              </Badge>
            </Button>
          </Box>
          <Box className="profile-icon ">
            <Button>
              <Stack>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </Stack>
            </Button>
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
            keepMounted: true, // Better open performance on mobile.
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
      <Box component="main" className="main">
        <Toolbar />
        <div className=" p-3 mt-5 navLinks">
          <div className="category">
            <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
              <InputLabel id="demo-select-small">All Category</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="menu-links">
            <List className="nav-links">
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Box>
    </Box>
  );
}
