import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../shared/Appbar/Appbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Appbar></Appbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
