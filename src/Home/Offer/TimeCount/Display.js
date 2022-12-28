import React from "react";

const Display = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="w-[90%] mx-auto lg:w-[80%]">
      <div className="flex justify-between items-center align-middle">
        <div className="flex flex-col items-center align-middle justify-center">
          <div className="bg-[#dfdfdf] rounded-full w-10 h-10 relative">
            <p className="absolute top-[25%] left-[30%] text-sm">0{days}</p>
          </div>
          <p className="text-sm">Days</p>
        </div>
        <div className="flex flex-col items-center align-middle justify-center">
          <div className="bg-[#dfdfdf] rounded-full w-10 h-10 relative">
            <p className="absolute top-[25%] left-[30%] text-sm">{hours}</p>
          </div>
          <p className="text-sm">Hour</p>
        </div>
        <div className="flex flex-col items-center align-middle justify-center">
          <div className="bg-[#dfdfdf] rounded-full w-10 h-10 relative">
            <p className="absolute top-[25%] left-[30%] text-sm">{minutes}</p>
          </div>
          <p className="text-sm">Minute</p>
        </div>
        <div className="flex flex-col items-center align-middle justify-center">
          <div className="bg-[#dfdfdf] rounded-full w-10 h-10 relative">
            <p className="absolute top-[25%] left-[30%] text-sm">{seconds}</p>
          </div>
          <p className="text-sm">Second</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
