import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useWishListProducts from "../../Hooks/useWhisListProducts";
import Loader from "../../utility/Loader/Loader";
import WhistListCard from "./WhistListCard";

const Whistlist = () => {
  const { user } = useContext(AuthContext);

  const [whislistProduct, setRefresh, loading] = useWishListProducts(
    user?.email
  );

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div className="max-w-screen-xl mx-auto ">
      <h1 className="text-4xl font-semibold text-red-500 text-center pb-5">
        Wishlist
      </h1>
      {whislistProduct?.map((product) => (
        <WhistListCard
          product={product}
          setRefresh={setRefresh}
          key={product._id}
        />
      ))}
    </div>
  );
};

export default Whistlist;
