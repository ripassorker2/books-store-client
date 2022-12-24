import { Container, TextField } from "@mui/material";
import React from "react";

const CartPage = () => {
  return (
    <Container maxWidth="xl my-4">
      <div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-6 ">
            <div className="border p-4 flex items-center justify-center"></div>
            <div className="border p-4 flex items-center justify-center lg:border-l-0 border-t-0 lg:border-t"></div>
            <div className="border p-4 flex items-center justify-center border-t-0 lg:border-t">
              Product
            </div>
            <div className="border p-4 flex items-center justify-center lg:border-l-0 border-t-0 lg:border-t">
              Price
            </div>
            <div className="border p-4 flex items-center justify-center border-t-0 lg:border-t">
              Quantity
            </div>
            <div className="border p-4 flex items-center justify-center lg:border-l-0 border-t-0 lg:border-t">
              Subtotal
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <div className="border  flex items-center justify-center border-t-0">
              X
            </div>
            <div className="border  flex items-center justify-center border-t-0 lg:border-l-0">
              <img
                src="https://m.media-amazon.com/images/I/51cYMEm5asL._SL500_.jpg"
                alt=""
                className="h-[150px] p-2 md:p-0 md:py-2"
              />
            </div>
            <div className="border  flex items-center justify-center border-t-0 p-2 md:p-0 md:py-2">
              New Book
            </div>
            <div className="border  flex items-center justify-center border-t-0 lg:border-l-0 p-2 md:p-0 md:py-2">
              $700.00
            </div>
            <div className="border  flex items-center justify-center border-t-0 p-2 md:p-0 md:py-2">
              <button className="border md:px-4 px-3 border-gray-400  text-xl md:py-2 py-1 ">
                -
              </button>
              <button className="border md:px-4 px-3 border-gray-400  text-xl md:py-2 py-1">
                1
              </button>
              <button className="border md:px-4 px-3 border-gray-400  text-xl md:py-2 py-1 ">
                +
              </button>
            </div>
            <div className="border  flex items-center justify-center border-t-0 lg:border-l-0">
              $700.00
            </div>
          </div>
          <div className="py-4 md:px-4 border-b md:flex justify-between items-center">
            <div className="md:flex justify-between items-center md:mr-3">
              <TextField
                id="outlined-multiline-flexible"
                placeholder="Coupon code"
                multiline
                className="w-full md:w-80"
              />
              <button className="md:px-6 px-4 md:py-4 py-2 md:ml-2 text-gray-100 bg-red-600 hover:bg-purple-600  md:text-base text-sm font-semibold rounded-md duration-300 w-full lg:w-60 my-2 md:my-0">
                Apply Coupon
              </button>
            </div>
            <button className="md:px-6 px-4 md:py-4 py-2  text-gray-100 bg-red-600 hover:bg-purple-600  md:text-base text-sm font-semibold rounded-md duration-300 w-full lg:w-60">
              Update cart
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-4">
          <div></div>
          <div>
            <h1 className="text-4xl my-2 font-semibold">Cart totals</h1>
            <div>
              <div className="grid grid-cols-2 p-4 border text-center ">
                <h5>Subtotal</h5>
                <h5>$760.00</h5>
              </div>
              <div className="grid grid-cols-2 p-4 border border-t-0 text-center ">
                <h5>Subtotal</h5>
                <h5>$760.00</h5>
              </div>

              <button className="md:px-6 w-full px-4 md:py-4 py-2  text-gray-100 bg-red-600 hover:bg-purple-600  md:text-base text-sm font-semibold rounded-md duration-300 mt-2">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
