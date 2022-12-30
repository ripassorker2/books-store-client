import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useWishListProducts from "../../Hooks/useWhisListProducts";
import Loader from "../../utility/Loader/Loader";
import WhistListCard from "./WhistListCard";

const Whistlist = () => {
  const { user } = useContext(AuthContext);

  const [whisListProducts, isLoading, refetch] = useWishListProducts(
    user?.email
  );

  return (
    <div className="max-w-screen-xl mx-auto ">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-4xl font-semibold text-red-500 text-center pb-5">
            Wishlist
          </h1>

          {whisListProducts?.map((product) => (
            <WhistListCard
              product={product}
              refetch={refetch}
              key={product._id}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Whistlist;
