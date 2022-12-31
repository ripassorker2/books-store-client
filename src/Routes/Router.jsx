import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Blog from "../Pages/Blog/Blog";
import CartPage from "../Pages/CartPage/CartPage";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import Buyer from "../Pages/Dashboard/Buyer/Buyer";
import Charts from "../Pages/Dashboard/Charts/Charts";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyBuyer from "../Pages/Dashboard/MyBuyer/MyBuyer";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Seller from "../Pages/Dashboard/Seller/Seller";
import Home from "../Pages/Home/Home";
import LoginTabs from "../Pages/Login/LoginTabs";
import MainCheckout from "../Pages/MainCheckout/MainCheckout";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Whistlist from "../Pages/Wishlist/Whistlist";

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
      {
        path: "/addtocart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/wisthlist",
        element: <Whistlist></Whistlist>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/payment",
        element: <MainCheckout></MainCheckout>,
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
            path: "/dashboard/dashboard",
            element: <Charts></Charts>,
          },
          {
            path: "/dashboard/dashboard/buyer",
            element: <Buyer></Buyer>,
          },
          {
            path: "/dashboard/dashboard/seller",
            element: <Seller></Seller>,
          },
          {
            path: "/dashboard/dashboard/myProducts",
            element: <MyProducts></MyProducts>,
          },
          {
            path: "/dashboard/dashboard/myBuyer",
            element: <MyBuyer></MyBuyer>,
          },
          {
            path: "/dashboard/dashboard/addProduct",
            element: <AddProduct></AddProduct>,
          },
        ],
      },
    ],
  },
]);
