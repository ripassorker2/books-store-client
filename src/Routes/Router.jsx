import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Checkout from "../Pages/Checkout/Checkout";
import AllMail from "../Pages/Dashboard/AllMail/AllMail";
import Chat from "../Pages/Dashboard/Chat/Chat";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Orders from "../Pages/Dashboard/Orders/Orders";
import Profile from "../Pages/Dashboard/Profile/Profile";
import ReportedItem from "../Pages/Dashboard/ReportedItem/ReportedItem";
import Users from "../Pages/Dashboard/Users/Users";
import VerifyAccount from "../Pages/Dashboard/VerifyAccount/VerifyAccount";
import Home from "../Pages/Home/Home";
import LoginTabs from "../Pages/Login/LoginTabs";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allproducts",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/details",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/login",
        element: <LoginTabs />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/dashboard/profile",
            element: <Profile></Profile>,
          },
          {
            path: "/dashboard/dashboard/orders",
            element: <Orders></Orders>,
          },
          {
            path: "/dashboard/dashboard/users",
            element: <Users></Users>,
          },
          {
            path: "/dashboard/dashboard/chat",
            element: <Chat></Chat>,
          },
          {
            path: "/dashboard/dashboard/verify-account",
            element: <VerifyAccount></VerifyAccount>,
          },
          {
            path: "/dashboard/dashboard/all-mail",
            element: <AllMail></AllMail>,
          },
          {
            path: "/dashboard/dashboard/reported-items",
            element: <ReportedItem></ReportedItem>,
          },
        ],
      },
    ],
  },
]);
