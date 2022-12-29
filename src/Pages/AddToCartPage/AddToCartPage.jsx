import { DeleteForeverOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./AddToCart.css";
import { MdDelete } from "react-icons/md";


const AddToCartPage = () => {

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="border cart-container">
          <div className="p-2">
            <img
              src="https://m.media-amazon.com/images/I/51cYMEm5asL._SL500_.jpg"
              alt=""
              className="h-[50px] md:h-[100px]"
            />
          </div>
          <div className="p-2 flex flex-col justify-between">
            <div>
              <p>Monsters Fight</p>
              <p className="text-slate-500">$70.00</p>
            </div>
            <div className="grid grid-cols-2">
              <div className="py-2 text-2xl">
                <span className="mr-3 cursor-pointer">-</span>
                <span className="mr-3">1</span>
                <span className="mr-3 cursor-pointer">+</span>
              </div>
              <div className="py-2 text-2xl flex justify-end">
                <button className="bg-[#fc3333] text-white w-10 h-10 rounded-full flex justify-center items-center">
                  <MdDelete className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border cart-container">
          <div className="p-2">
            <img
              src="https://m.media-amazon.com/images/I/51cYMEm5asL._SL500_.jpg"
              alt=""
              className="h-[50px] md:h-[100px]"
            />
          </div>
          <div className="p-2 flex flex-col justify-between">
            <div>
              <p>Monsters Fight</p>
              <p className="text-slate-500">$70.00</p>
            </div>
            <div className="grid grid-cols-2">
              <div className="py-2 text-2xl">
                <span className="mr-3 cursor-pointer">-</span>
                <span className="mr-3">1</span>
                <span className="mr-3 cursor-pointer">+</span>
              </div>
              <div className="py-2 text-2xl flex justify-end">
                <button className="bg-[#fc3333] text-white w-10 h-10 rounded-full flex justify-center items-center">
                  <MdDelete className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-4">
        <div></div>
        <div>
          <h1 className="text-4xl my-2 font-semibold">Cart Totals</h1>
          <div>
            <div className="grid grid-cols-2 p-4 border text-center ">
              <h5>Subtotal</h5>
              <h5>$760.00</h5>
            </div>
            <div className="grid grid-cols-2 p-4 border border-t-0 text-center ">
              <h5>Subtotal</h5>
              <h5>$760.00</h5>
            </div>

            <Link to="/payment">
              <button className="md:px-6 w-full px-4 md:py-4 py-2  text-gray-100 bg-red-600 hover:bg-purple-600  md:text-base text-sm font-semibold rounded-md duration-300 mt-2">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
