import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ProductCard = ({ products }) => {
  const { name, img, price, Mileage, location, engine, transmission } =
    products;
     return (
       <Card sx={{ maxWidth: 345 }}>
         <CardActionArea>
           <CardMedia
             component="img"
             height="140"
             image={img}
             alt="green iguana"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               Lizard
             </Typography>
             <Typography variant="body2" color="text.secondary">
               Lizards are a widespread group of squamate reptiles, with over
               6,000 species, ranging across all continents except Antarctica
             </Typography>
           </CardContent>
         </CardActionArea>
       </Card>
     );
//    return (
//      <div className="card card-compact w-full bg-base-100 shadow-xl">
//        <div className="mx-auto">
//          <img className="w-full rounded-t-lg" src={img} alt="Shoes" />
//        </div>
//        <div className="card-body">
//          <h2 className="text-xl">{name}</h2>
//          <div className="lg:grid-cols-2">
//            <p className="">Mileage : {Mileage}</p>
//            <p className=" ">Location : {location}</p>
//            <p className="">Engine: {engine}</p>
//            <p className="">Transmission :{transmission}</p>
//          </div>
//          <div className="flex justify-start md:justify-between buybtn">
//            <div>
//              <p className="text-xl">Price :{price}$</p>
//            </div>
//          </div>
//        </div>
//      </div>
//    );
};

export default ProductCard;