import { DeleteForeverOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "../Dashboard.css";
const MyBuyer = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">My Buyers</h1>
      <div>
        <div className="container-table-headers">
          <p className="border p-3">Product Photo</p>
          <p className="border p-3">User Info</p>
          <p className="border p-3">Product Name</p>
          <p className="border p-3">Delete</p>
        </div>
        {/* data */}
        <div className=" container-table-data  ">
          <div className="border p-3">
            <img
              src="https://booktrib.com/wp-content/uploads/2022/11/Desert-Star-Michael-Connelly-1-scaled-1.jpg"
              alt=""
              className="h-[50px]"
            />
          </div>
          <div className="border p-3 ">
            <p>Munir Hossain Juwel</p>
            <div>
              <p className="text-sm text-slate-500">
                munirhossainjuwel@gmail.com
              </p>
              <p className="text-sm text-slate-500">01833532046</p>
            </div>
          </div>
          <div className="border p-3 ">Book</div>
          <div className="border p-3 ">
            <DeleteForeverOutlined></DeleteForeverOutlined>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBuyer;
