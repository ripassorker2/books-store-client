import { Delete, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import React from "react";
import { toast } from "react-hot-toast";

const Whistlist = () => {
  const handleDelete = (id) => {
    const aggre = window.confirm("Are sure ?You want to delete this?");
    if (aggre) {
      fetch(`https://resale-laptop-server.vercel.app/buyerOrSeller/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Succesfully deleted this buyer !!");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto ">
      <h1 className="text-4xl font-semibold text-red-500 text-center pb-5">
        Wishlist
      </h1>
      <div className="flex md:justify-around justify-between items-center border rounded border-purple-600 sm:p-4 p-2 mx-2 my-5">
        <div className=" flex items-center justify-center">
          <img
            src="https://m.media-amazon.com/images/I/51cYMEm5asL._SL500_.jpg"
            className="h-[50px] w-14 sm:w-24 sm:h-24 rounded-md "
            alt=""
          />
        </div>

        <p className="text-gray-700 sm:font-semibold sm:w-auto w-24 sm:text-base text-sm sm: px-1">
          New Book New Book
        </p>
        <p className="text-red-600 sm:font-semibold sm:text-base text-sm sm: px-1">
          $76.00
        </p>

        <p className="text-gray-700 sm:font-semibold sm:text-base text-sm px-1 hidden md:block">
          In stock
        </p>

        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-red-600 ">
            <Delete className=" inline-block" />
            <span className="ml-2 hidden sm:inline-block text-red-600">
              Delete
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-purple-600 hover:text-purple-700">
            <ShoppingCartCheckoutOutlined />
            <span className="ml-2 hidden sm:inline-block text-gray-700">
              Add to Cart
            </span>
          </p>
        </div>
      </div>
      <div className="flex md:justify-around justify-between items-center border rounded border-purple-600 sm:p-4 p-2 mx-2 my-5">
        <div className=" flex items-center justify-center">
          <img
            src="https://m.media-amazon.com/images/I/51cYMEm5asL._SL500_.jpg"
            className="h-[50px] w-14 sm:w-24 sm:h-24 rounded-md "
            alt=""
          />
        </div>

        <p className="text-gray-700 sm:font-semibold sm:w-auto w-24 sm:text-base text-sm sm: px-1">
          New Book New Book
        </p>
        <p className="text-red-600 sm:font-semibold sm:text-base text-sm sm: px-1">
          $76.00
        </p>

        <p className="text-gray-700 sm:font-semibold sm:text-base text-sm px-1 hidden md:block">
          In stock
        </p>

        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-red-600 ">
            <Delete className=" inline-block" />
            <span className="ml-2 hidden sm:inline-block text-red-600">
              Delete
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-purple-600 hover:text-purple-700">
            <ShoppingCartCheckoutOutlined />
            <span className="ml-2 hidden sm:inline-block text-gray-700">
              Add to Cart
            </span>
          </p>
        </div>
      </div>
      <div className="flex md:justify-around justify-between items-center border rounded border-purple-600 sm:p-4 p-2 mx-2 my-5">
        <div className=" flex items-center justify-center">
          <img
            src="https://m.media-amazon.com/images/I/51cYMEm5asL._SL500_.jpg"
            className="h-[50px] w-14 sm:w-24 sm:h-24 rounded-md "
            alt=""
          />
        </div>

        <p className="text-gray-700 sm:font-semibold sm:w-auto w-24 sm:text-base text-sm sm: px-1">
          New Book New Book
        </p>
        <p className="text-red-600 sm:font-semibold sm:text-base text-sm sm: px-1">
          $76.00
        </p>

        <p className="text-gray-700 sm:font-semibold sm:text-base text-sm px-1 hidden md:block">
          In stock
        </p>

        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-red-600 ">
            <Delete className=" inline-block" />
            <span className="ml-2 hidden sm:inline-block text-red-600">
              Delete
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-purple-600 hover:text-purple-700">
            <ShoppingCartCheckoutOutlined />
            <span className="ml-2 hidden sm:inline-block text-gray-700">
              Add to Cart
            </span>
          </p>
        </div>
      </div>
      <div className="flex md:justify-around justify-between items-center border rounded border-purple-600 sm:p-4 p-2 mx-2 my-5">
        <div className=" flex items-center justify-center">
          <img
            src="https://m.media-amazon.com/images/I/51cYMEm5asL._SL500_.jpg"
            className="h-[50px] w-14 sm:w-24 sm:h-24 rounded-md "
            alt=""
          />
        </div>

        <p className="text-gray-700 sm:font-semibold sm:w-auto w-24 sm:text-base text-sm sm: px-1">
          New Book New Book
        </p>
        <p className="text-red-600 sm:font-semibold sm:text-base text-sm sm: px-1">
          $76.00
        </p>

        <p className="text-gray-700 sm:font-semibold sm:text-base text-sm px-1 hidden md:block">
          In stock
        </p>

        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-red-600 ">
            <Delete className=" inline-block" />
            <span className="ml-2 hidden sm:inline-block text-red-600">
              Delete
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-purple-600 hover:text-purple-700">
            <ShoppingCartCheckoutOutlined />
            <span className="ml-2 hidden sm:inline-block text-gray-700">
              Add to Cart
            </span>
          </p>
        </div>
      </div>
      <div className="flex md:justify-around justify-between items-center border rounded border-purple-600 sm:p-4 p-2 mx-2 my-5">
        <div className=" flex items-center justify-center">
          <img
            src="https://m.media-amazon.com/images/I/51cYMEm5asL._SL500_.jpg"
            className="h-[50px] w-14 sm:w-24 sm:h-24 rounded-md "
            alt=""
          />
        </div>

        <p className="text-gray-700 sm:font-semibold sm:w-auto w-24 sm:text-base text-sm sm: px-1">
          New Book New Book
        </p>
        <p className="text-red-600 sm:font-semibold sm:text-base text-sm sm: px-1">
          $76.00
        </p>

        <p className="text-gray-700 sm:font-semibold sm:text-base text-sm px-1 hidden md:block">
          In stock
        </p>

        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-red-600 ">
            <Delete className=" inline-block" />
            <span className="ml-2 hidden sm:inline-block text-red-600">
              Delete
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-purple-600 hover:text-purple-700">
            <ShoppingCartCheckoutOutlined />
            <span className="ml-2 hidden sm:inline-block text-gray-700">
              Add to Cart
            </span>
          </p>
        </div>
      </div>
      <div className="flex md:justify-around justify-between items-center border rounded border-purple-600 sm:p-4 p-2 mx-2 my-5">
        <div className=" flex items-center justify-center">
          <img
            src="https://m.media-amazon.com/images/I/51cYMEm5asL._SL500_.jpg"
            className="h-[50px] w-14 sm:w-24 sm:h-24 rounded-md "
            alt=""
          />
        </div>

        <p className="text-gray-700 sm:font-semibold sm:w-auto w-24 sm:text-base text-sm sm: px-1">
          New Book New Book
        </p>
        <p className="text-red-600 sm:font-semibold sm:text-base text-sm sm: px-1">
          $76.00
        </p>

        <p className="text-gray-700 sm:font-semibold sm:text-base text-sm px-1 hidden md:block">
          In stock
        </p>

        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-red-600 ">
            <Delete className=" inline-block" />
            <span className="ml-2 hidden sm:inline-block text-red-600">
              Delete
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold sm:h-auto h-5 text-purple-600 hover:text-purple-700">
            <ShoppingCartCheckoutOutlined />
            <span className="ml-2 hidden sm:inline-block text-gray-700">
              Add to Cart
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whistlist;
