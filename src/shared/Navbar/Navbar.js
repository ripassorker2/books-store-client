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
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const drawerWidth = 260;
const navItems = ["Home", "Pages", "Shop", "Blog", "Gallery"];

export default function Navbar(props) {
  const { user, logout } = React.useContext(AuthContext);
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
            <Link to="/addtocart" sx={{ color: "#fff" }}>
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
              <div className=" flex  flex-row">
                <input
                  type="text"
                  className=" text-gray-600  md:w-[340px] p-2  rounded-l-2xl"
                  placeholder="Find your product"
                />
                <button
                  className=" p-2  w-1/3  rounded-r-2xl  text-white hover:bg-purple-600 duration-300 bg-red-600"
                  type="button"
                >
                  <SearchIcon></SearchIcon>
                </button>
              </div>
            </div>

            <div className="text-end hidden md:block">
              <Link
                to="/wisthlist"
                sx={{ color: "#fff" }}
                className="mx-2 lg:mx-4 text-xl "
              >
                <Badge color="secondary" badgeContent={99}>
                  <FavoriteBorder></FavoriteBorder>
                </Badge>
              </Link>
              <Link
                to="/addtocart"
                sx={{ color: "#fff" }}
                className="mx-2 lg:mx-4 text-xl "
              >
                <Badge color="secondary" badgeContent={99}>
                  <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
                </Badge>
              </Link>
              {/* for login authentication */}
              {user ? (
                <>
                  {" "}
                  <Button className="profile-icon ">
                    <Stack>
                      <Avatar
                        alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg"
                      />
                    </Stack>
                  </Button>
                  <button onClick={logout} className="mx-2 lg:mx-4 text-lg ">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button className="mx-2 lg:mx-4 text-lg ">Sign In</button>
                  </Link>
                  {/* <Link to={"/resistation"}>
                    <button className="mx-2 lg:mx-4 text-lg ">Sign Up</button>
                  </Link> */}
                </>
              )}
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
                {navItems?.map((item) => (
                  <Link key={item} to={`${item?.link}`}>
                    <button className="lg:mr-16 mx-6">{item?.name}</button>
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
