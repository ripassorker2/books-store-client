import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Container, Grid, Link } from "@mui/material";
import { useEffect, useState } from "react";
import AllProductCard from "../AllProductCard/AllProductCard";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import "./AllProduct.css";

const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, [page]);


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
          {allProduct.map((products, i) => (
            <Grid key={i} item sx={12} sm={6} md={3} lg={3} xl={3}>
              <AllProductCard products={products} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Stack
        spacing={2}
        className="items-center justify-center align-middle 
        h-[100px]"
      >
        <Pagination
          count={5}
          color="primary"
          onChange={(e, value) => setPage(value)}
        />
      </Stack>
    </Container>
  );
};

export default AllProduct;
