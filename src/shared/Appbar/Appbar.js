import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import AppbarDropDown from "./AppbarDropDown";
import AppbarTop from "./AppbarTop";

const Appbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [cetegoris, setCetegoris] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/cetegoris")
      .then((res) => res.json())
      .then((data) => setCetegoris(data));
  }, []);

  const userLogOut = () => {
    logout();
  };

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
    {
      name: "Dashboard",
      link: "/dashboard/dashboard",
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
            {cetegoris?.map((category) => (
              <option value={category?.id} key={category.id}>
                <Link to={`/category/${category?.id}`}>
                  {category.category}
                </Link>
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className="text-end">
            {navItems?.map((item, i) => (
              <Link key={i} to={`${item?.link}`}>
                <button className="mx-4 mt-2 ">{item?.name}</button>
              </Link>
            ))}

            {user?.uid ? (
              <button onClick={userLogOut} className="mx-4 mt-2 ">
                LogOut
              </button>
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
