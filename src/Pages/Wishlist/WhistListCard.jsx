import React, { useContext } from "react";
import { Delete, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const WhistListCard = ({ product, refetch }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, price, status, photo, category, quantity, description } =
    product;

  const handleDelete = (id) => {
    const aggre = window.confirm("Are sure ?You want to remove this?");
    if (aggre) {
      fetch(`http://localhost:5000/whisList/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Succesfully Removed!!");
            refetch();
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const handleAddToCart = () => {
    const cartData = {
      id: _id,
      title,
      photo,
      category,
      price,
      quantity,
      description,
      status,
      email: user?.email,
      name: user?.displayName,
    };

    fetch(`http://localhost:5000/addtoCart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("The book is added in cart");
        }
      });
  };

  return (
    <div className="flex md:justify-around justify-between items-center border rounded border-purple-600 sm:p-4 p-2 mx-2 my-5">
      <div className=" flex items-center justify-center">
        <img
          src={photo}
          className="h-[50px] w-14 sm:w-24 sm:h-24 rounded-md "
          alt=""
        />
      </div>

      <p className="text-gray-700 sm:font-semibold sm:w-auto w-24 sm:text-base text-sm sm: px-1">
        {title}
      </p>
      <p className="text-red-600 sm:font-semibold sm:text-base text-sm sm: px-1">
        ${price}.00
      </p>

      <p className="text-gray-700 sm:font-semibold sm:text-base text-sm px-1 hidden md:block">
        {status === "available" ? "In stock" : "Stock out"}
      </p>

      <div className="flex items-center">
        <p
          onClick={() => handleDelete(_id)}
          className="font-semibold sm:h-auto h-5 text-red-600 "
        >
          <Delete className=" inline-block" />
          <span className="ml-2 hidden sm:inline-block text-red-600">
            Delete
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <p
          onClick={handleAddToCart}
          className="font-semibold sm:h-auto h-5 text-purple-600 hover:text-purple-700"
        >
          <ShoppingCartCheckoutOutlined />
          <span className="ml-2 hidden sm:inline-block text-gray-700">
            Add to Cart
          </span>
        </p>
      </div>
    </div>
  );
};

export default WhistListCard;
