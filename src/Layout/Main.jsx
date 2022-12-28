import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../shared/Appbar/Appbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Appbar></Appbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
