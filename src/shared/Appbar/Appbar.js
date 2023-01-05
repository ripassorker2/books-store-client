import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import AppbarTop from "./AppbarTop";
import { BsFillCaretDownFill } from "react-icons/bs";
import useRole from "../../Hooks/useRole";

const Appbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [cetegoris, setCetegoris] = React.useState([]);
  const [openCategory, setOpenCategory] = useState(false);
  const [isRole] = useRole(user?.email);

  React.useEffect(() => {
    fetch("https://books-store-server-six.vercel.app/cetegoris")
      .then((res) => res.json())
      .then((data) => setCetegoris(data));
  }, []);

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
      name: "Shop",
      link: "/allproducts",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  const userLogOut = () => {
    logout();
  };

  return (
    <div className="appbar-container" id="navbar">
      <div className="appbar-top">
        <AppbarTop navItems={navItems}></AppbarTop>
      </div>

      <div className="appbar-links px-5 py-4" id="navlinks">
        <div className="relative">
          <p
            onClick={() => setOpenCategory(!openCategory)}
            className="w-36 flex justify-between items-center category-list-button"
          >
            All Category{" "}
            <span>
              <BsFillCaretDownFill />
            </span>
          </p>
          <ul
            className={`toggle-category w-52 absolute z-[999999] ${
              openCategory ? "block" : "hidden"
            }`}
          >
            {cetegoris.map((category) => (
              <li className="mt-2" key={category.id}>
                <Link
                  onClick={() => setOpenCategory(!openCategory)}
                  to={`category/${category.id}`}
                >
                  {category.category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-end">
            {navItems?.map((item, i) => (
              <Link key={i} to={`${item?.link}`}>
                <button className="mx-4 mt-2 ">{item?.name}</button>
              </Link>
            ))}

            {user?.uid ? (
              <>
                {isRole !== "Buyer" && (
                  <Link to="/dashboard/dashboard">
                    <button className="mx-4 mt-2 ">Dashboard</button>
                  </Link>
                )}
                <button onClick={userLogOut} className="mx-4 mt-2 ">
                  LogOut
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="mx-4 mt-2 ">Sign In</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
