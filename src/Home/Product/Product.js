import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCatd/ProductCard";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://books-store-server-six.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProduct(data?.data));
  }, []);
  return (
    <div className="mb-8 mx-6 mt-5">
      <div className=" max-w-screen-xl  m-auto  p-2 ">
        <Box className="flex md:justify-end justify-center px-4 ">
          <ul className="offer-ul flex no-underline mb-3">
            <li>
              <Link to="/allproducts">View All</Link>
            </li>
          </ul>
        </Box>
        <Box className="mt-2">
          <Grid className="card-img" container spacing={2}>
            {product?.slice(0, 8).map((products, i) => (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>
                <ProductCard products={products} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Product;
