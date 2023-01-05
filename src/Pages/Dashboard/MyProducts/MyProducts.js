import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Loader from "../../../utility/Loader/Loader";
import ProductCard from "./ProductCard";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        `https://books-store-server-six.vercel.app/product/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("book-token")}`,
          },
        }
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-3">My Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
