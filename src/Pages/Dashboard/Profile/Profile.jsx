import React from "react";
import "../Dashboard.css";
const Profile = () => {
  return (
    <div>
      <h1 className="lg:text-3xl text-xl font-semibold pb-4">
        Munir Hossain Juwel
      </h1>
      <div className="profile-container">
        <div className="profile-child p-4 ">
          <div className="text-center leading-6">
            <img
              src="https://i.ibb.co/rFs5pQ7/mypf.jpg"
              alt=""
              className="w-[150px] h-[150px] rounded-full block mx-auto"
            />
            <h1 className="lg:text-3xl text-lg ">Munir Hossain Juwel</h1>
            <span className="text-blue-400 text-sm lg:text-lg">
              munirhossainjuwel@gmail.com
            </span>
            <br />
            <small>+880 1833532046</small>
          </div>
          <hr className="my-3" />
          <div>
            <div className="">
              <h1 className="font-bold">Last Order</h1>
              <span className="text-sm">7 days ago - #749383</span>
            </div>
            <div className="my-3">
              <h1 className="font-bold">Average Order Value</h1>
              <span className="text-sm">$574.00</span>
            </div>
            <div>
              <h1 className="font-bold">Registered</h1>
              <span className="text-sm">2 months ago</span>
            </div>
            <div className="my-3">
              <h1 className="font-bold">Email Marketing</h1>
              <span className="text-sm">Subscribed</span>
            </div>
          </div>
        </div>
        <div className="profile-child p-4">
          <div>
            <h1>Purchase history</h1>
          </div>
          <div>
            <h1>Add a product</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
