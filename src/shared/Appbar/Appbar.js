import React from "react";
import { Link } from "react-router-dom";
import AppbarDropDown from "./AppbarDropDown";
import AppbarTop from "./AppbarTop";

const Appbar = () => {
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    if (document.documentElement.scrollTop > 90) {
      document.getElementById("navlinks").classList.add("color-change");
    } else {
      document.getElementById("navlinks").classList.remove("color-change");
    }
  }
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Pages",
      link: "/pages",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Dashboard",
      link: "/dashboard/dashboard",
    },
    {
      name: "Singup/Login",
      link: "/login",
    },
  ];
  return (
    <div className="appbar-container" id="navbar">
      <div className="appbar-top">
        <AppbarTop navItems={navItems}></AppbarTop>
      </div>

      <div className="appbar-links px-5 py-4" id="navlinks">
        <div>
          <select
            name="pets"
            className="border rounded-md w-full py-4 px-4  cursor-pointer"
            id="pet-select"
          >
            <option value="" className="cursor-pointer">
              All Category
            </option>
            {/* dynamic */}
            <option value="dog">
              <Link>Dog</Link>
            </option>
            <option value="cat">
              <Link>Cat</Link>
            </option>
            <option value="hamster">
              <Link>Hamster</Link>
            </option>
            <option value="parrot">
              <Link>Parrot</Link>
            </option>
            <option value="spider">
              <Link>Spider</Link>
            </option>
            <option value="goldfish">
              <Link>Goldfish</Link>
            </option>
          </select>
        </div>
        <div>
          <div className="text-end">
            {navItems?.map((item) => (
              <Link key={item} to={`${item?.link}`}>
                <button className="mr-4 mt-2 ">{item?.name}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
