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
        <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
                component="img"
                height="50%"
                image={book?.photo}
                alt="book img"
            />
            <Box className='flex flex-col justify-between h-[50%]'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {book?.title}
                    </Typography>
                </CardContent>
                <CardActions className='flex justify-between'>
                    <p className='price'>Price: {book?.price}$</p>
                    <Link size="small" to="/details">More Details</Link>
                </CardActions>
            </Box>
        </Card>
    );
}