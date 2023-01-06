import React, { useContext } from "react";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { MdDelete } from "react-icons/md";
import useCartProducts from "../../Hooks/useCartProducts";

const WhistListCard = ({ product, refetch }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, price, status, photo, category, description } = product;

  const [setRefreshCart] = useCartProducts(user?.email);

  const handleDelete = (id) => {
    const aggre = window.confirm("Are sure ?You want to remove this?");
    if (aggre) {
      fetch(`https://books-store-server-six.vercel.app/whislist/${id}`, {
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
      quantity: 1,
      description,
      status,
      email: user?.email,
      name: user?.displayName,
    };

    fetch(`https://books-store-server-six.vercel.app/cart`, {
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
          setRefreshCart(true);
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
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#fc3333]  text-white sm:w-10 sm:h-10 h-6 w-6 rounded-full flex justify-center items-center"
        >
          <MdDelete className="h-8 w-8" />
        </button>
      </div>
      <div className="flex items-center mb-2 sm:mb-0">
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
