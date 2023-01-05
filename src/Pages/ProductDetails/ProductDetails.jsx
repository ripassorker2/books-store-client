import React, { useContext, useEffect } from "react";
import ProductReview from "./ProductReview";
import ReletedProducts from "./ReletedProducts";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import useWishListProducts from "../../Hooks/useWhisListProducts";
import useCartProducts from "../../Hooks/useCartProducts";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const { _id, photo, title, category, description, price, status } = details;
  const { pathname } = useLocation();

  const [setRefresh] = useWishListProducts(user?.email);
  const [setRefreshCart] = useCartProducts(user?.email);
  const handleAddWhisList = () => {
    const wishListData = {
      id: _id,
      title,
      photo,
      category,
      price,
      description,
      status,
      email: user?.email,
      name: user?.displayName,
      wishlist: true,
    };

    fetch(`https://books-store-server-six.vercel.app/whislist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishListData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("The book is added to wishlist");
        setRefresh(true);
      });
  };

  const handleAddToCart = () => {
    const cartData = {
      id: _id,
      title,
      photo,
      category,
      price,
      description,
      quantity: 1,
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
      .then(() => {
        toast.success("The book is added in cart");
        setRefreshCart(true);
      });
  };

  const withoutUserAddCart = () => {
    toast.error("You have to login frist for added this book in cart!!");
  };
  const withoutUserAddWhislist = () => {
    toast.error("You have to login frist!!");
  };

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
                  ${price}.00
                </p>

                {user?.uid ? (
                  <button
                    onClick={handleAddWhisList}
                    className="border ml-16 mt-3 px-3 border-gray-400 rounded-lg py-1"
                    title="Whislist"
                  >
                    <BsFillSuitHeartFill className="inline-block text-red-500 " />
                  </button>
                ) : (
                  <button
                    onClick={withoutUserAddWhislist}
                    className="border ml-16 mt-3 px-3 border-gray-400 rounded-lg py-1"
                    title="Whislist"
                  >
                    <BsFillSuitHeartFill className="inline-block text-red-500 " />
                  </button>
                )}
              </div>
              <p className="text-red-500 text-sm py-1">{status}</p>
            </div>
            {user?.uid ? (
              <div>
                <button
                  onClick={handleAddToCart}
                  className="md:px-6 px-4 md:py-3 py-2 text-gray-100 bg-red-600 hover:bg-red-700  md:text-base text-sm font-semibold rounded-md duration-300 "
                >
                  Add to cart
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={withoutUserAddCart}
                  className="md:px-6 px-4 md:py-3 py-2 text-gray-100 bg-red-600 hover:bg-red-700  md:text-base text-sm font-semibold rounded-md duration-300 "
                >
                  Add to cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ProductReview details={details} />
      <ReletedProducts />
    </div>
  );
};

export default ProductDetails;
