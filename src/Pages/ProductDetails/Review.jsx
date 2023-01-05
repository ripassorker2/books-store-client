import { StarRate } from "@mui/icons-material";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Review = ({ review }) => {
  const { name, email, images, message } = review;

  return (
    <div>
      <div className="border rounded-lg p-2 mb-6">
        <div className="flex items-center ">
          {images ? (
            <img className="h-12 w-12 rounded-full" src={images} alt="user" />
          ) : (
            <FaRegUserCircle size={40} />
          )}

          <div className="ml-5">
            <h4 className="text-gray-700 text-base font-semibold">{name}</h4>
            <p className="text-gray-700 text-sm">{email}</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 pt-3">{message}</p>
        <p className="flex items-center mt-2">
          <StarRate fontSize="14" className="text-red-500 inline-block " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-1 " />
        </p>
      </div>
    </div>
  );
};

export default Review;
