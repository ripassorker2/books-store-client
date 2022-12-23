import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";

const ReletedProducts = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="py-16 mx-auto max-w-screen-xl px-4">
      <ul className="offer-ul flex no-underline mb-3">
        <li>
          <Link>Releted Productc</Link>
        </li>
      </ul>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5  sm:grid-cols-2 ">
        {books?.slice(1, 6).map((book, index) => (
          <>
            <div
              key={index}
              class="flex  md:h-64 h-56 w-full hover:border- hover:shadow-xl  duration-300  border  relative"
            >
              <div class="  bg-white ">
                <div className="flex justify-center w-full ">
                  <img
                    class=" h-32 w-full inline-block object-fill  cover-full"
                    src={book?.photo}
                    alt=""
                  />
                </div>
                <div class="p-4 text-start">
                  <h5 class="text-gray-700 text-base font-semibold mb-2">
                    {book?.title}
                  </h5>
                  <div className="flex ">
                    <button className="px-2 py-1 absolute bottom-4 left-4  text-gray-100 bg-red-600 hover:bg-purple-600  text-sm font-semibold rounded-md duration-300 ">
                      Details
                    </button>
                    <p className="text-end md:text-lg text-red-600 absolute  bottom-4 right-4">
                      ${book?.price}.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ReletedProducts;
