import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../shared/Appbar/Appbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Appbar></Appbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
