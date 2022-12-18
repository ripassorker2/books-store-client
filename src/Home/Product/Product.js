import React from 'react';
import ProductCard from '../ProductCatd/ProductCard';

const Product = () => {
    const product = useLoaderData();
    return (
      <div>
        <div className="grid sm:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 p-5">
          {product.map((products) => (
            <ProductCard
              key={products._id}
              products={products}
            ></ProductCard>
          ))}
        </div>
      </div>
    );
};

export default Product;