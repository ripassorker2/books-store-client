import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./myproduct.css";
import OfferMenu from "./ProductMenu";
import { toast } from "react-hot-toast";

export default function ProductCard({ product, refetch }) {
  //
  const handleDelete = (id) => {
    const aggre = window.confirm("Are sure ?You want to delete this?");
    if (aggre) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("book-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Succesfully delete this product!!");
            refetch();
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        className="h-48"
        image={product.photo}
      />
      <CardContent>
        <Typography className="card-info">
          <h1>{product.title}</h1>
          <span className="capitalize">{product.status}</span>
        </Typography>
      </CardContent>
      <CardActions className="card-btn">
        <OfferMenu></OfferMenu>
        <button className="btn">Mega Offer</button>
        <button
          onClick={() => handleDelete(product?._id)}
          className="delete-btn"
        >
          Delete
        </button>
      </CardActions>
    </Card>
  );
}
