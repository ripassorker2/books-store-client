import React from "react";
import { Outlet } from "react-router-dom";
import AddToCartPage from "../Pages/AddToCartPage/AddToCartPage";
import Appbar from "../shared/Appbar/Appbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Appbar></Appbar>
      <AddToCartPage></AddToCartPage>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
