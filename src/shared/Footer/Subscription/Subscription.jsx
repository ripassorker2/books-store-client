import React from "react";

const Subscription = () => {
  return (
    <div className="my-12">
      <div className="w-full  bg-[#fc3333]  bg-no-repeat">
        <div className=" p-10  py-20  flex    flex-wrap  justify-around  ">
          <div className="text-center md:text-start">
            <div className=" m-0  p-0  text-2xl  text-white  antialiased ">
              Books & Get Updates
            </div>
            <div className=" m-0  p-0  text-base  text-white  antialiased  ">
              Sign up for our books to get up-to-date from us!
            </div>
          </div>
          <div className=" mt-3  flex  flex-row  ">
            <input
              className=" text-gray-600  md:w-[340px] focus:outline-none  p-2  rounded-l-2xl"
              placeholder="Enter your email here"
            />
            <button
              className=" p-2  w-1/3 rounded-r-2xl  text-white hover:bg-purple-600 duration-300 bg-gray-900"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
