import { HeartBroken } from "@mui/icons-material";
import React from "react";
import ProductReview from "./ProductReview";

const ProductDetails = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="relative lg:w-1/2">
            <img
              className="object-cover w-full h-60 rounded shadow-lg sm:h-96"
              src="https://booktrib.com/wp-content/uploads/2022/11/Desert-Star-Michael-Connelly-1-scaled-1.jpg"
              alt=""
            />
          </div>
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 pt-6 md:pt-0 ">
            <div className="max-w-xl mb-6">
              <h2 className="mb-3  text-xl font-bold tracking-tight text-gray-900 sm:leading-none">
                Desert Star
              </h2>
              <h2 className="mb-3  text-lg font-bold tracking-tight text-gray-900 sm:leading-none">
                Category: Action and Adventure
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis minus eum tempore enim quam quas velit facilis
                reiciendis voluptates? Voluptatem esse reiciendis sed sapiente
                commodi facilis amet temporibus quas molestias saepe explicabo
                soluta vel distinctio eum pariatur ipsum dolorem accusamus
                aliquid ut, ipsa ex repellendus doloremque dolore nesciunt.
                Praesentium, accusamus voluptas magnam deleniti doloribus dolor
                sed laboriosam autem ex assumenda eum asperiores et. ?
              </p>
              <div className="flex  items-center">
                <p className="text-red-500 text-base py-1 font-semibold">
                  Price: $54.00
                </p>
                <button className="border ml-16 mt-3 px-3 border-gray-400 rounded-lg py-1">
                  <HeartBroken className="inline-block text-red-500 " />
                </button>
              </div>
              <p className="text-red-500 text-sm py-1">In stock: 65</p>
            </div>
            <div>
              <button className=" border px-4 border-gray-400 text-xl py-2 ">
                -
              </button>
              <button className="border px-5 border-gray-400 border-x-0 text-xl py-2 ">
                1
              </button>
              <button className="border px-4 border-gray-400  text-xl py-2 ">
                +
              </button>
              <button className="px-6 py-3 ml-10 text-gray-100 bg-red-600 hover:bg-purple-600  text-base font-semibold rounded-md duration-300 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductReview />
    </>
  );
};

export default ProductDetails;
