import React from "react";
import { Box, Container, Grid, Link, } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import AllProductCard from "../AllProductCard/AllProductCard";
import "./AllProduct.css";


const AllProduct = () => {
   const [query, setQuery] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  // const [size, setSize] = useState(20);


  

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?keyword=${query}&page=${page}&size=${20}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data?.data);
        setCount(data?.count);
        
      });
  }, [page, query]);
  const pages = Math.ceil(count / 20);

  const handleSearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);
  };
  return (
    <Container maxWidth="xl">
      <div
        className="flex md:justify-around justify-between px-2 xl:px-2 
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
          <div className="search">
            <input
              value={query}
              onChange={(e) => handleSearch(e)}
              type="text"
              className="searchTerm"
              placeholder="Search"
            />
            <button type="submit" className="searchButton">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div>
          <ul className="all-ul flex no-underline">
            <li>
              <select
                name="names"
                id="names"
                className="dropdown xl:w-[140px] md:w-36 w-28 ml-1
              font-semibold rounded-md"
              >
                <option value="price">View price</option>
                <option value="low">10$-30</option>
                <option value="medium">30$-50$</option>
                <option value="high">50$-60</option>
              </select>
            </li>
          </ul>
        </div>
      </div>

      <Box>
        <Grid className="card-img" container spacing={2}>
          {allProduct.map((products, i) => (
            <Grid key={i} item xs={12} sm={6} md={3} lg={3} xl={3}>
              <AllProductCard products={products} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <div className="pagination">
        {[...Array(pages).keys()].map((number) => (
          <button
            key={number}
            className={page === number ? "selected" : ""}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
      {/* <Stack
        spacing={2}
        className="items-center justify-center align-middle 
        h-[100px]"
      >
        <Pagination
          count={5}
          color="primary"
          onChange={(e, value) => setPage(value)}
        />
      </Stack> */}
    </Container>
  );
};

export default AllProduct;
