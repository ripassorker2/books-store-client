import React from "react";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const AddToCard = ({ product, refetch }) => {
  const { title, photo, price, _id, quantity } = product;

  const handleDelete = (id) => {
    const aggre = window.confirm("Are sure ?You want to remove this?");
    if (aggre) {
      fetch(`https://books-store-server-six.vercel.app/cart/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            refetch();
            toast.success("Succesfully Removed!!");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const handleIncrese = (id) => {
    fetch(`https://books-store-server-six.vercel.app/increase/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then(() => {
        refetch();
      })
      .catch((err) => console.error(err));
  };

  const handleDcrese = (id) => {
    fetch(`https://books-store-server-six.vercel.app/decrease/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then(() => {
        refetch();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="border border-purple-600 rounded-md flex justify-between items-center mb-3   sm:p-5 p-2">
      <div className=" flex items-center">
        <img
          src={photo}
          alt=""
          className="h-12 md:h-24 w-12 md:w-24 my-2 bg-cover object-cover rounded-md"
        />
        <div className="ml-2">
          <p className="text-xs sm:text-base text-gray-700">{title}</p>
          <p className="text-xs sm:text-base text-red-600">${price}.00</p>
        </div>
      </div>

      <div className="p-2  mx-1 flex  justify-between">
        <button
          onClick={() => handleDcrese(_id)}
          className="border md:px-3 px-2 border-gray-400  sm:text-xl text-sm md:py-1 py-[1px] "
        >
          -
        </button>
        <button className="border md:px-3 px-2 border-gray-400  sm:text-xl text-sm md:py-1 py-[1px]">
          {quantity}
        </button>
        <button
          onClick={() => handleIncrese(_id)}
          className="border md:px-3 px-2 border-gray-400  sm:text-xl text-sm md:py-1 py-[1px] "
        >
          +
        </button>
      </div>

      <div className="">
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#fc3333]  text-white sm:w-10 sm:h-10 h-6 w-6 rounded-full flex justify-center items-center"
        >
          <MdDelete className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default AddToCard;
