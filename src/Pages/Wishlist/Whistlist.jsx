import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { Container } from "@mui/material";
import React from "react";
import "./wishlist.css";
const Whistlist = () => {
  return (
    <Container maxWidth="xl my-4">
      <h1 className="text-4xl font-semibold text-center pb-20">Wishlist</h1>
      <div className="wishlist-container text-center lg:text-left">
        <div className="bg-zinc-300 "></div>
        <div className="bg-zinc-300 p-2 lg:p-1">PRODUCT NAME</div>
        <div className="bg-zinc-300 p-2 lg:p-1">UNIT PRICE</div>
        <div className="bg-zinc-300 p-2 lg:p-1">STOCK STATUS</div>
        <div className="bg-zinc-300 "></div>
      </div>

      <div className="wishlist-container p-3 border-b">
        <div className="flex justify-between lg:justify-around items-center flex-row-reverse lg:flex-row px-2">
          <span>X</span>
          <img
            src="https://m.media-amazon.com/images/I/51cYMEm5asL._SL500_.jpg"
            className="h-[50px]"
            alt=""
          />
        </div>
        <div className="mt-3 lg:mt-0">
          <p className="text-blue-400 px-2 lg:px-0">New Book</p>
        </div>
        <div className="px-2 mt-3 lg:mt-0">
          <span className="text-red-600 font-semibold underline mr-3">
            $760.00
          </span>
          <span className="line-through text-zinc-500">$860.00</span>
        </div>
        <div className="px-2 mt-3 lg:mt-0">
          <p className="text-lime-500 text-lg">In Stock</p>
        </div>
        <div className="text-blue-400 mt-3 lg:mt-0">
          <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
          <span>Add to Cart</span>
        </div>
      </div>
      <div className="wishlist-container p-3 border-b">
        <div className="flex justify-between lg:justify-around items-center flex-row-reverse lg:flex-row px-2">
          <span>X</span>
          <img
            src="https://m.media-amazon.com/images/I/51cYMEm5asL._SL500_.jpg"
            className="h-[50px]"
            alt=""
          />
        </div>
        <div className="mt-3 lg:mt-0">
          <p className="text-blue-400 px-2 lg:px-0">New Book</p>
        </div>
        <div className="px-2 mt-3 lg:mt-0">
          <span className="text-red-600 font-semibold underline mr-3">
            $760.00
          </span>
          <span className="line-through text-zinc-500">$860.00</span>
        </div>
        <div className="px-2 mt-3 lg:mt-0">
          <p className="text-lime-500 text-lg">In Stock</p>
        </div>
        <div className="text-blue-400 mt-3 lg:mt-0">
          <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
          <span>Add to Cart</span>
        </div>
      </div>
    </Container>
  );
};

export default Whistlist;
