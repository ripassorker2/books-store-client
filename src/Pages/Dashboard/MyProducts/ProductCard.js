import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./myproduct.css";
import OfferMenu from "./ProductMenu";
export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.penguinrandomhouse.com/cover/700jpg/9780593551998"
      />
      <CardContent>
        <Typography className="card-info">
          <h1>Lizard</h1>
          <span>Available</span>
        </Typography>
      </CardContent>
      <CardActions className="card-btn">
        <OfferMenu></OfferMenu>
        <button className="btn">Mega Offer</button>
        <button className="delete-btn">Delete</button>
      </CardActions>
    </Card>
  );
}
