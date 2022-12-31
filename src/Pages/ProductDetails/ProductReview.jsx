import { StarRate } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Review from "./Review";

const ProductReview = ({ details }) => {
  const { user } = useContext(AuthContext);
  const [dataLoad, setDataLoad] = useState(false);

  const handlePlaceReview = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = user?.displayName;
    const images = user?.photoURL;
    const email = user?.email;
    const message = form.message.value;

    const review = {
      id: details._id,
      name,
      email,
      images,
      message,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully");
          setDataLoad(!dataLoad);
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${details?._id}`, {})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [details, dataLoad]);
  return (
    <div className="max-w-screen-xl px-5 m-auto">
      <from>
        <ul className="offer-ul flex text-gray-800 no-underline my-2">
          <li className="">
            <Link>Create Review</Link>
          </li>
        </ul>
        <p className="flex items-center my-2">
          <StarRate fontSize="14" className="text-red-500 inline-block " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-3 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-3 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-3 " />
          <StarRate fontSize="14" className="text-red-500 inline-block ml-3 " />
        </p>
        <form onSubmit={(event) => handlePlaceReview(event)}>
          <input
            className="border resize-none p-3 border-gray-600 
            focus:outline-gray-500 focus:outline-1
          md:w-[40%] h-20 rounded-md"
            name="message"
            required
            placeholder="Write here your review"
          />
          <div>
            <button
              type="submit"
              value="submit"
              className="md:px-6 px-4 md:py-3 py-2 mt-1 md:text-base 
              text-sm text-gray-100 bg-red-600 hover:bg-purple-600  
              font-semibold rounded-md duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </from>
      <ul className="offer-ul mt-6 flex text-gray-800 no-underline mb-2">
        <li className="">
          <Link>Reviews</Link>
        </li>
      </ul>

      {reviews.map((review, i) => (
        <Review key={i} review={review}></Review>
      ))}
    </div>
  );
};

export default ProductReview;
