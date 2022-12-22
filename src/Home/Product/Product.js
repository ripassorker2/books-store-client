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
      <Box>
        <Grid className='card-img' container spacing={2}>
          {
            product.map((products) => <Grid key={products._id} item sx={12} 
            sm={6} md={4} lg={4} xl={4}>
              <ProductCard products={products} />
            </Grid>)
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default Product;