import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loader from "../../utility/Loader/Loader";
import WhistListCard from "./WhistListCard";

const Whistlist = () => {
  const { user } = useContext(AuthContext);

  const {
    data: cartProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cartProducts"],
    queryFn: () =>
      fetch(
        `https://books-store-server-six.vercel.app/whislist/${user?.email}`
      ).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-screen-xl mx-auto ">
      <h1 className="text-4xl font-semibold text-red-500 text-center pb-5">
        Wishlist
      </h1>
      {cartProducts?.map((product) => (
        <WhistListCard product={product} refetch={refetch} key={product._id} />
      ))}
    </div>
  );
};

export default Whistlist;
