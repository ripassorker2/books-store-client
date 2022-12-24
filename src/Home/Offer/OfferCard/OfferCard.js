import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export default function OfferCard({ book }) {
    return (
        <Card sx={{ maxWidth: "100%", height:'400px' }} className="flex flex-col justify-between">
            <CardMedia
                component="img"
                image={book?.photo}
                alt="book img"
            />
            <Box className='flex flex-col justify-between'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {book?.title}
                    </Typography>
                </CardContent>
                <CardActions className='flex justify-between'>
                    <p className='price fw-semibold'>Price: {book?.price}$</p>
                    <Link className='bg-[#fc3333] text-white px-4 py-1 rounded-md fw-bold' size="small" to="/details">More Details</Link>
                </CardActions>
            </Box>
        </Card>
    );
}