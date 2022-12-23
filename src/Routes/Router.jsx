import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allproducts',
                element:<AllProduct></AllProduct>
            },
            {
                path:'/details',
                element:<ProductDetails></ProductDetails>
            }
        ]
    }
]);