import { Box, Container, Grid, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import AllProductCard from "../AllProductCard/AllProductCard";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import './AllProduct.css'

const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);
  return (
    <Container maxWidth="xl">
      <div
        className="flex md:justify-between justify-center px-4 
      bg-gray-200 py-6 mb-6 all-product"
      >
        <div className="hidden md:block">
          <ul className="all-ul flex no-underline">
            <li className="mr-5">
              <Link>Shop</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="all-ul flex no-underline">
            <li>
              <Link>Shot</Link>
            </li>
            <li className="ml-8 hidden md:block">
              <Link>view</Link>
            </li>
            <li className="ml-5 hidden md:block">
              <Link>
                <AppsOutlinedIcon />
              </Link>
            </li>
            <li className="ml-5 hidden md:block">
              <Link>
                <ViewHeadlineIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Box>
        <Grid className="card-img" container spacing={2}>
          {allProduct.map((products) => (
            <Grid key={products._id} item sx={12} sm={6} md={3} lg={3} xl={3}>
              <AllProductCard products={products} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AllProduct;
