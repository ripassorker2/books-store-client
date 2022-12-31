import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import "./Layout.css";
const Dashboard = () => {
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
            {dashboardNavItems?.map((item) => (
              <li
                key={item?.name}
                className="my-3 mx-6 text-lg uppercase text-white"
              >
                <Link to={`${item?.link}`}>{item?.name}</Link>
              </li>
            ))}
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
