import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Appbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import {
  FavoriteBorder,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import AppbarDropDown from "./AppbarDropDown";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useWishListProducts from "../../Hooks/useWhisListProducts";
import useCartProducts from "../../Hooks/useCartProducts";
import { toast } from "react-hot-toast";
const drawerWidth = 260;

function AppbarTop(props) {
  const { user } = React.useContext(AuthContext);
  const { window, navItems } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [whislistProduct] = useWishListProducts(user?.email);
  const [cartProducts] = useCartProducts(user?.email);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const cartAndWhistlist = () => {
    toast.error("Please login frist to visit this page !!");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link>
        <Typography variant="h6" sx={{ my: 2 }}>
          <Link to={"/"}> BOOK STORE</Link>
        </Typography>
      </Link>
      <Box sx={{ mb: 2 }}>
        <AppbarDropDown></AppbarDropDown>
      </Box>

      <Divider />
      <List>
        {navItems?.map((item, i) => (
          <List key={i}>
            <ListItem disablePadding>
              <Link to={`${item?.link}`}>
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
            <Link to={"/"}> BOOK STORE</Link>
          </Typography>
          <Box className="top-nav-links">
            {user?.uid ? (
              <>
                <Link
                  to="/wisthlist"
                  sx={{ color: "#fff" }}
                  className="mx-3 lg:mx-4 text-xl "
                >
                  <Badge
                    color="secondary"
                    badgeContent={whislistProduct?.length}
                  >
                    <FavoriteBorder></FavoriteBorder>
                  </Badge>
                </Link>
                <Link
                  to="/addtocart"
                  sx={{ color: "#fff" }}
                  className="mx-3 lg:mx-4 text-xl "
                >
                  <Badge color="secondary" badgeContent={cartProducts?.length}>
                    <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
                  </Badge>
                </Link>
              </>
            ) : (
              <>
                <Link sx={{ color: "#fff" }} className="mx-3 lg:mx-4 text-xl ">
                  <Badge
                    onClick={cartAndWhistlist}
                    color="secondary"
                    badgeContent={0}
                  >
                    <FavoriteBorder></FavoriteBorder>
                  </Badge>
                </Link>
                <Link sx={{ color: "#fff" }} className="mx-3 lg:mx-4 text-xl ">
                  <Badge
                    onClick={cartAndWhistlist}
                    color="secondary"
                    badgeContent={0}
                  >
                    <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
                  </Badge>
                </Link>
              </>
            )}
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
