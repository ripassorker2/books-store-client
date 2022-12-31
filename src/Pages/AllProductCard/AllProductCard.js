import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const AllProductCard = ({ products }) => {
  const { photo, price, title } = products;
  return (
    <Card className="product_card">
      <CardMedia
        component="img"
        height="140"
        image={photo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="flex justify-end">
          <p
            className="text-end md:text-lg text-red-600 
          absolute  bottom-4 left-4"
          >
            ${price}.00
          </p>
          <Link to={`/detailsPage/${products._id}`}>
            <button
              className="px-4 py-1 absolute bottom-4 right-4  
          text-gray-100 bg-[#fc3333] hover:bg-purple-600  
          text-sm font-semibold rounded-md duration-300 "
            >
              Details
            </button>
          </Link>
        </div>
      </CardActions>
    </Card>
  );
};

export default AllProductCard;
