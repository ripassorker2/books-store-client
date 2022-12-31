import React from "react";
import ProductCard from "./ProductCard";

const MyProducts = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-3">My Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default MyProducts;
