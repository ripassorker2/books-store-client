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
import {
  FavoriteBorder,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

const drawerWidth = 260;
const navItems = ["Home", "Pages", "Shop", "Blog", "Deshboard"];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} className="drawer-content-style">
        <Box>
          <div className="flex justify-between items-center px-2 mb-2">
            <Link sx={{ color: "#fff" }}>
              <Badge color="secondary" badgeContent={99}>
                <FavoriteBorder></FavoriteBorder>
              </Badge>
            </Link>
            <Link sx={{ color: "#fff" }}>
              <Badge color="secondary" badgeContent={99}>
                <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
              </Badge>
            </Link>
            <Link>
              <button>Singup</button>
            </Link>
            <Link>
              <button>Login</button>
            </Link>
          </div>
          <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
            <InputLabel id="demo-select-small">All Category</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="Age"
              placeholder=""
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
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
        <div className="flex justify-between items-center md:block px-2">
          <div>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 ms-auto py-2">
            <div className="hidden md:block text-xl">
              <Link to="/">
                <button>Book Store</button>
              </Link>
            </div>
            <div>
              <div class=" flex  flex-row">
                <input
                  type="text"
                  class=" text-gray-600  md:w-[340px] p-2  rounded-l-2xl"
                  placeholder="Find your product"
                />
                <button
                  class=" p-2  w-1/3  rounded-r-2xl  text-white hover:bg-purple-600 duration-300 bg-red-600"
                  type="button"
                >
                  <SearchIcon></SearchIcon>
                </button>
              </div>
            </div>

            <div className="text-end hidden md:block">
              <Link sx={{ color: "#fff" }} className="mx-2 lg:mx-4 text-xl ">
                <Badge color="secondary" badgeContent={99}>
                  <FavoriteBorder></FavoriteBorder>
                </Badge>
              </Link>
              <Link sx={{ color: "#fff" }} className="mx-2 lg:mx-4 text-xl ">
                <Badge color="secondary" badgeContent={99}>
                  <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
                </Badge>
              </Link>
              {/* for login authentication */}
              <Link>
                <button className="mx-2 lg:mx-4 text-xl ">Singup</button>
              </Link>
              <Link>
                <button className="mx-2 lg:mx-4 text-xl ">Login</button>
              </Link>
              {/* <Button className="profile-icon ">
                  <Stack>
                    <Avatar
                      alt="Cindy Baker"
                      src="/static/images/avatar/3.jpg"
                    />
                  </Stack>
                </Button> */}
            </div>
          </div>
        </div>
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
            <div>
              <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                <InputLabel id="demo-select-small">All Category</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Age"
                  placeholder=""
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
              <div className="flex items-center justify-between">
                {navItems.map((item) => (
                  <Link>
                    <button className="lg:mr-16 mx-6">{item}</button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
