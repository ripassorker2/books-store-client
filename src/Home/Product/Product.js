import { Box, Container, Grid } from '@mui/material';
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
    <Container maxWidth="xl" className=''>
      <h2>View All</h2>
      {/* className="box-containre grid sm:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4 p-5" */}
      <Box>
        <Grid className='card-img' container spacing={2}>
          {
            product.map((products) => <Grid key={products._id} item sx={12} sm={6} md={4} lg={4} xl={4}>
              <ProductCard products={products} />
            </Grid>)
          }
        </Grid>
        {/* {
          product.map((products) => (
            <ProductCard key={products._id} products={products}>
            </ProductCard>))
        } */}
      </Box>
    </Container>
  );
};

export default Product;