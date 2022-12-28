import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import OfferCard from '../OfferCard/OfferCard';

const FirstOffer = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/offer/30%")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
        });
    }, []);
    return (
      <div>
        <Grid className="card-img" container spacing={2}>
          {books.slice(0,9).map((book, i) => (
            <Grid key={i} item sx={12} sm={6} md={6} lg={4} xl={4}>
              <OfferCard book={book} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
};

export default FirstOffer;