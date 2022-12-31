import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useCartProducts from "../../Hooks/useCartProducts";
import useWishListProducts from "../../Hooks/useWhisListProducts";
import AppbarDropDown from "./AppbarDropDown";
import AppbarTop from "./AppbarTop";

const Appbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [setRefresh] = useWishListProducts(user?.email);
  const [setRefreshCart, refreshCart] = useCartProducts(user?.email);

  const userLogOut = () => {
    logout();
    setRefresh(true);
    setRefreshCart(!refreshCart);
  };

  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    if (document.documentElement.scrollTop > 90) {
      document.getElementById("navlinks").classList.add("color-change");
    } else {
      document.getElementById("navlinks").classList.remove("color-change");
    }
  }
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/allproducts",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Dashboard",
      link: "/dashboard/dashboard",
    },
  ];
  return (
    <div className="appbar-container" id="navbar">
      <div className="appbar-top">
        <AppbarTop navItems={navItems}></AppbarTop>
      </div>

      <div className="appbar-links px-5 py-4" id="navlinks">
        <div>
          <AppbarDropDown></AppbarDropDown>
        </div>
        <div>
          <div className="text-end">
            {navItems?.map((item, i) => (
              <Link key={i} to={`${item?.link}`}>
                <button className="mx-4 mt-2 ">{item?.name}</button>
              </Link>
            ))}

            {user?.uid ? (
              <button onClick={userLogOut} className="mx-4 mt-2 ">
                LogOut
              </button>
            ) : (
              <Link to="/login">
                <button className="mx-4 mt-2 ">Sign In</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
