import { createBrowserRouter } from "react-router-dom";
import AddBook from "../Home/HotSell/AddBook/AddBook";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddToCartPage from "../Pages/AddToCartPage/AddToCartPage";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
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
import AdminRouter from "./AdminRouter/AdminRouter";
import BuyerRouter from "./BuyerRouter/BuyerRouter";
import PrivetRouter from "./PrivetRouter/PrivetRouter";
import SellerRouter from "./SellerRouter/SellerRouter";

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
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://books-store-server-six.vercel.app/cetegory/${params.id}`
          ),
        element: <Category></Category>,
      },
      {
        path: "/allproducts",
        element: <AllProduct></AllProduct>,
      },

      {
        path: "/detailsPage/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://books-store-server-six.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <LoginTabs />,
      },
      {
        path: "/addtocart",
        element: (
          <PrivetRouter>
            <BuyerRouter>
              <AddToCartPage />
            </BuyerRouter>
          </PrivetRouter>
        ),
      },
      {
        path: "/wisthlist",
        element: (
          <PrivetRouter>
            <BuyerRouter>
              <Whistlist />
            </BuyerRouter>
          </PrivetRouter>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/payment",
        element: (
          <PrivetRouter>
            <MainCheckout></MainCheckout>,
          </PrivetRouter>
        ),
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
            element: (
              <PrivetRouter>
                <Charts></Charts>
              </PrivetRouter>
            ),
          },
          {
            path: "/dashboard/dashboard/buyer",
            element: (
              <PrivetRouter>
                <AdminRouter>
                  <Buyer />
                </AdminRouter>
              </PrivetRouter>
            ),
          },
          {
            path: "/dashboard/dashboard/seller",
            element: (
              <PrivetRouter>
                <AdminRouter>
                  <Seller></Seller>
                </AdminRouter>
              </PrivetRouter>
            ),
          },
          {
            path: "/dashboard/dashboard/myProducts",
            element: (
              <PrivetRouter>
                <SellerRouter>
                  <MyProducts />
                </SellerRouter>
              </PrivetRouter>
            ),
          },
          {
            path: "/dashboard/dashboard/myBuyer",
            element: (
              <PrivetRouter>
                <SellerRouter>
                  <MyBuyer />
                </SellerRouter>
              </PrivetRouter>
            ),
          },
          {
            path: "/dashboard/dashboard/addProduct",
            element: (
              <PrivetRouter>
                <SellerRouter>
                  <AddBook />
                </SellerRouter>
              </PrivetRouter>
            ),
          },
        ],
      },
    ],
  },
]);
