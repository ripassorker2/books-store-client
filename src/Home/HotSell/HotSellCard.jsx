import React from "react";
import { Link } from "react-router-dom";

const HotSellCard = ({ book }) => {
  return (
    <div
      className="flex  md:h-64 h-56 w-full hover:border- hover:shadow-xl  duration-300
      border  relative"
    >
      <div className="  bg-white ">
        <div className="flex justify-center w-full ">
          <img
            className=" h-32 w-full inline-block object-fill  cover-full"
            src={book?.photo}
            alt=""
          />
        </div>
        <div className="p-4 text-start">
          <h5 className="text-gray-700 md:text-base font-semibold mb-2">
            {book?.title}
          </h5>
          <div className="flex justify-end">
            <p
              className="text-end md:text-lg text-[#fc3333] absolute  bottom-4 left-4 
               fw-semibold "
            >
              ${book?.price}.00
            </p>
            <Link to={`/detailsPage/${book?._id}`}
              className="px-2 py-1 absolute bottom-4 right-4 text-gray-100 bg-[#fc3333] 
            hover:bg-purple-600  text-sm font-semibold rounded-md duration-300 "
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotSellCard;
