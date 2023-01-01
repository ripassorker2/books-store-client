import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useRole from "../../Hooks/useRole";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import "./Layout.css";
const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [isRole] = useRole(user?.email);

  const dashboardNavItems = [
    {
      name: "Buyer",
      link: "/dashboard/dashboard/buyer",
    },
    {
      name: "Seller",
      link: "/dashboard/dashboard/seller",
    },
    {
      name: "My products",
      link: "/dashboard/dashboard/myProducts",
    },
    {
      name: "My buyer",
      link: "/dashboard/dashboard/myBuyer",
    },
    {
      name: "Add product",
      link: "/dashboard/dashboard/addProduct",
    },
  ];
  return (
    <div>
      <DashboardNavbar dashboardNavItems={dashboardNavItems}></DashboardNavbar>
      <div className="container-dashboard ">
        <div className="bg-[#03203c] min-h-screen links-container">
          <ul>
            {isRole === "Admin" && (
              <>
                {" "}
                <li className="my-3 mx-6 text-lg capitalize text-gray-200 hover:text-red-500 duration-300">
                  <Link to={"/dashboard/dashboard/seller"}>Sellers</Link>
                </li>
                <li className="my-3 mx-6 text-lg capitalize text-gray-200 hover:text-red-500 duration-300">
                  <Link to={"/dashboard/dashboard/buyer"}> Buyers</Link>
                </li>{" "}
              </>
            )}

            {isRole === "Seller" && (
              <>
                <li className="my-3 mx-6 text-lg capitalize text-gray-200 hover:text-red-500 duration-300">
                  <Link to={"/dashboard/dashboard/myProducts"}>
                    My Products
                  </Link>
                </li>
                <li className="my-3 mx-6 text-lg capitalize text-gray-200 hover:text-red-500 duration-300">
                  <Link to={"/dashboard/dashboard/myBuyer"}>My Buyers</Link>
                </li>
                <li className="my-3 mx-6 text-lg capitalize text-gray-200 hover:text-red-500 duration-300">
                  <Link to={"/dashboard/dashboard/addProduct"}>
                    Add Product
                  </Link>
                </li>
              </>
            )}

            {isRole === "Buyer" && (
              <>
                <li className="my-3 mx-6 text-lg capitalize text-gray-200 hover:text-red-500 duration-300">
                  <Link to={""}>My Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="p-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
