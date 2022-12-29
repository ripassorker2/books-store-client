import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Grid } from '@mui/material';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import AllProductCard from '../AllProductCard/AllProductCard';

const Category = () => {
    const [page, setPage] = useState(1);
    const data = useLoaderData();
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
                    {data.map((products, i) => (
                        <Grid key={i} item sx={12} sm={6} md={3} lg={3} xl={3}>
                            <AllProductCard products={products} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Stack
                spacing={2}
                className="items-center justify-center align-middle h-[100px]">
                <Pagination
                    count={5}
                    color="primary"
                    onChange={(e, value) => setPage(value)}
                />
            </Stack>
        </Container>
    );
};

export default Category;