import React from "react";
import { Link } from "react-router-dom";

const BannerItem = ({ products }) => {
  const { picture, category, id } = products;
  return (
    <>
      <div className="first_slide">
        <div className="slide_details">
          <h1>{category}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. os
            perferendis minus in hic deserunt qui fugit illo{" "}
          </p>
          <Link to={`category/${products.id}`}>
            <button>View Collection</button>
          </Link>
        </div>
        <div className="slide-img">
          <img className='slider_img' src={picture} alt="img" />
        </div>
      </div>
    </>
  );
};

export default BannerItem;
