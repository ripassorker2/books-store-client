import * as React from "react";
import { Link } from "react-router-dom";

const OfferCard = ({ book }) => {
  const { photo, price, title, _id } = book;

  return (
    <div class=" hover:shadow-2xl  hover:border-gray-400 duration-500 border-2  relative overflow-hidden rounded-lg max-w-xs shadow-lg">
      <div class="relative pt-7 px-7 flex items-center justify-center">
        <img
          class="relative object-cover w-[100%] lg:h-40 md:h-28 h-28 rounded"
          src={photo}
          alt=""
        />
      </div>
      <div class=" text-white px-6 pb-6 mt-2">
        <div className="flex justify-end">
          <span class=" text-end text-gray-800 rounded-full bg-red-300 text-xs font-bold px-3 py-2 leading-none items-center mr-2">
            ${price}.00
          </span>
        </div>
        <div class="flex justify-between">
          <span class="block font-semibold opacity-100 text-gray-700 mb-3 text-base">
            {title.length > 16 ? `${title.slice(0, 16)} ...` : title}
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

export default OfferCard;
