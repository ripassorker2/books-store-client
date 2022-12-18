import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCatd/ProductCard';

const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      fetch("https://car-server-site-chi.vercel.app/product")
        .then((res) => res.json())
        .then((data) => setProduct(data));
        
    }, []);
    return (
      <div>
        <h2>View All</h2>
        <div className="grid sm:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4 p-5">
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