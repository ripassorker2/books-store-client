import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Offer.css';
import { Grid, Link, Paper } from '@mui/material';
import OfferCard from '../OfferCard/OfferCard';

const Offer = () => {

    return (
        <Container className='mt-5 mb-5' maxWidth="xl">
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={2}>
                    <Grid item sx={12} sm={4} xl={4}>
                        <Box className='mega-offer'>
                            <OfferCard></OfferCard>
                        </Box>
                    </Grid>
                    <Grid item sx={12} sm={8} xl={8}>
                        <Box className='flex justify-center md:justify-between lg:justify-between'>
                            <Paper className='hidden md:block lg:block font-bold'>Our All Mega Offers</Paper>
                            <ul className='offer-ul flex no-underline mb-5'>
                                <li><Link>30% Offer</Link></li>
                                <li className='ml-4'><Link>45% Offer</Link></li>
                                <li className='ml-4'><Link>70% Offer</Link></li>
                            </ul>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item sx={12} sm={6} md={6} lg={4} xl={4}>
                                <OfferCard />
                            </Grid>
                            <Grid item sx={12} sm={6} md={6} lg={4} xl={4}>
                                <OfferCard />
                            </Grid>
                            <Grid item sx={12} sm={6} md={6} lg={4} xl={4}>
                                <OfferCard />
                            </Grid>
                            <Grid item sx={12} sm={6} md={6} lg={4} xl={4}>
                                <OfferCard />
                            </Grid>
                            <Grid item sx={12} sm={6} md={6} lg={4} xl={4}>
                                <OfferCard />
                            </Grid>
                            <Grid item sx={12} sm={6} md={6} lg={4} xl={4}>
                                <OfferCard />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Offer;