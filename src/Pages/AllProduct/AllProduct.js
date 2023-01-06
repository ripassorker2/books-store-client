import React from "react";
import { Box, Container, Grid, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import AllProductCard from "../AllProductCard/AllProductCard";
import "./AllProduct.css";
import Loader from "../../utility/Loader/Loader";

const AllProduct = () => {
  const [query, setQuery] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://books-store-server-six.vercel.app/products?keyword=${query}&page=${page}&size=${20}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data?.data);
        setCount(data?.count);
        setLoading(false);
      });
  }, [page, query]);
  const pages = Math.ceil(count / 20);

  const handleSearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mb-8 mx-6 mt-10">
      <div className="sm:flex md:px-10 justify-between px-2 max-w-screen-xl  m-auto  p-2  bg-gray-200 rounded py-6 mb-6 all-product">
        <div>
          <div className="search">
            <input
              value={query}
              onChange={(e) => handleSearch(e)}
              type="text"
              className=" text-gray-600  sm:w-[340px] focus:outline-none  p-2  rounded-l-2xl "
              placeholder="Search here"
            />
            <button
              type="submit"
              className=" w-1/3 rounded-r-2xl  text-white hover:bg-red-700 duration-300 bg-red-500"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
        <div>
          <ul className="all-ul flex no-underline mt-4 sm:mt-0">
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

      <div className="max-w-screen-xl  m-auto  p-2">
        <Box>
          <Grid className="card-img" container spacing={4}>
            {allProduct.map((products, i) => (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>
                <AllProductCard products={products} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <div className="pagination text-center">
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
      </div>
    </div>
  );
};

export default AllProduct;
