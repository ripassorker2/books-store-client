import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  const { photo, price, title, _id } = products;
  return (
    <div class="flex-shrink-0  hover:shadow-xl  hover:border-gray-300 duration-500 border-2  relative overflow-hidden rounded-lg max-w-xs shadow-lg">
      <svg
        class="absolute bottom-0 left-0 mb-8 opacity-20 scale-105"
        viewBox="0 0 375 283"
        fill="none"
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div class="relative pt-10 px-7 flex items-center justify-center">
        <div class="block absolute  h-48 bottom-0 left-0 -mb-20 ml-3  "></div>
        <img class="relative w-64 h-44 rounded" src={photo} alt="" />
      </div>
      <div class="relative text-white px-6 pb-6 mt-2">
        <div className="flex justify-end">
          <span class=" text-end text-gray-800 rounded-full bg-red-300 text-xs font-bold px-3 py-2 leading-none  items-center mr-2">
            ${price}.00
          </span>
        </div>
        <div class="flex justify-between">
          <span class="block font-semibold opacity-100 text-gray-700 mb-3 text-base">
            {title}
          </span>
        </div>
        <Link to={`/detailsPage/${_id}`}>
          <button className="inline-block w-full md:px-6 px-4 md:py-3 py-2  text-gray-100 bg-red-600 hover:bg-red-700  md:text-base text-sm font-semibold rounded-md duration-300 ">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
