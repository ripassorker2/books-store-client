import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function OfferCard({ book }) {
    console.log(book)
    return (
        <Card sx={{ maxWidth: "100%", height: "500px" }}>
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
                    <Typography variant="body2" color="text.secondary">
                        {book?.description.slice(0, 150)}
                    </Typography>
                </CardContent>
                <CardActions className='flex justify-between'>
                    <p className='price'>Price: {book?.price}$</p>
                    <Button size="small">More Details</Button>
                </CardActions>
            </Box>
        </Card>
    );
}