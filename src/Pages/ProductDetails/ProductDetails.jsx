import React, { useEffect, useState } from "react";
import ProductReview from "./ProductReview";
import ReletedProducts from "./ReletedProducts";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useLoaderData, useLocation } from "react-router-dom";

const ProductDetails = () => {
  const details = useLoaderData();
  const { photo, title, category, description, price, status } = details;
  const [quantity, setQuantity] = useState(0);
   const { pathname } = useLocation();

   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
  return (
    <div>
      <div className="px-4 py-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="relative lg:w-1/2  mb-4">
            <img
              className="object-cover w-full h-60 rounded shadow-lg  md:h-96"
              src={photo}
              alt=""
            />
          </div>
          <div className="mb-10 lg:max-w-xl md:pr-0 lg:pl-7 lg:mb-0 pt-6 md:pt-0 ">
            <div className="max-w-xl mb-6 md:pr-5">
              <h2 className="mb-3 md:mt-0  text-xl font-bold tracking-tight text-gray-700 sm:leading-none">
                {title}
              </h2>
              <h2 className="mb-3  text-lg font-bold tracking-tight text-gray-700 sm:leading-none">
                {category}
              </h2>
              <p className="text-sm text-gray-600">{description}</p>
              <div className="flex  items-center">
                <p className="text-red-500 text-base py-1 font-semibold">
                  {price}
                </p>
                <button className="border ml-16 mt-3 px-3 border-gray-400 rounded-lg py-1">
                  <BsFillSuitHeartFill className="inline-block text-red-500 " />
                </button>
              </div>
              <p className="text-red-500 text-sm py-1">{status}</p>
            </div>
            <div>
              <button
                onClick={() => setQuantity(quantity - 1)}
                className="border md:px-4 px-3 border-gray-400  text-xl md:py-2 py-1 "
              >
                -
              </button>
              <button className="border md:px-4 px-3 border-gray-400  text-xl md:py-2 py-1">
                {quantity}
              </button>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="border md:px-4 px-3 border-gray-400  text-xl md:py-2 py-1 "
              >
                +
              </button>
              <button className="md:px-6 px-4 md:py-3 py-2 md:ml-10 ml-5 text-gray-100 bg-red-600 hover:bg-purple-600  md:text-base text-sm font-semibold rounded-md duration-300 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductReview />
      <ReletedProducts />
    </div>
  );
};

export default ProductDetails;
