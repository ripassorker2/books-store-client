import { DeleteForeverOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "../Dashboard.css";
const Seller = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Seller</h1>
      <div>
        <div className="container-table-headers">
          <p className="border p-3">Photo</p>
          <p className="border p-3">Name</p>
          <p className="border p-3">Email</p>
          <p className="border p-3">Delete</p>
        </div>
        {/* data */}
        <div className=" container-table-data  ">
          <div className="border p-3">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className="avatar-user"
            />
          </div>
          <div className="border p-3 ">
            <p>Munir Hossain Juwel</p>
            <span className="text-sm text-green-800 font-semibold">Seller</span>
          </div>
          <div className="border p-3 ">munirhossainjuwel@gmail.com</div>
          <div className="border p-3 ">
            <DeleteForeverOutlined></DeleteForeverOutlined>
          </div>
        </div>
        <div className=" container-table-data  ">
          <div className="border p-3">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className="avatar-user"
            />
          </div>
          <div className="border p-3 ">
            <p>Munir Hossain Juwel</p>
            <span className="text-sm text-green-800 font-semibold">Seller</span>
          </div>
          <div className="border p-3 ">munirhossainjuwel@gmail.com</div>
          <div className="border p-3 ">
            <DeleteForeverOutlined></DeleteForeverOutlined>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
