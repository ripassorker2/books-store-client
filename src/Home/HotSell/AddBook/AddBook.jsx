import React, { useReducer } from "react";

const AddBook = () => {
  const initialState = {
    sellerName: "",
    sellerEmail: "",
    category: "",
    title: "",
    photo: "",
    price: "",
    discount: "",
    quantity: "",
    description: "",
    releaseDate: "",
    writter: "",
    advertise: false,
    status: "available",
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "input":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(initialState);
  };

  return (
    <div className="my-8">
      <form
        onSubmit={handleSubmit}
        class="max-w-screen-xl mx-auto   bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
      >
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div class="md:col-span-2 text-gray-700">
            <label for="name">Seller Name</label>
            <input
              onBlur={(event) => {
                dispatch({
                  type: "input",
                  payload: {
                    name: event.target.name,
                    value: event.target.value,
                  },
                });
              }}
              type="text"
              name="sellerName"
              class="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div class="md:col-span-3 text-gray-700">
            <label for="email">Seller Email</label>
            <input
              type="email"
              name="sellerEmail"
              class="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div class="md:col-span-3 text-gray-700">
            <label for="address">Book Category</label>
            <select
              name="category"
              class="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              aria-label="Default select example"
            >
              <option disabled selected required>
                Select your book category
              </option>
              <option>Action and Adventure</option>
              <option>Classics</option>
              <option>Comic Book</option>
              <option>Detective and Mystery</option>
              <option>Fantasy</option>
              <option>Horror</option>
            </select>
          </div>

          <div class="md:col-span-2 text-gray-700">
            <label for="title">Book Name</label>
            <input
              type="text"
              name="title"
              class="h-10 border  border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              placeholder="Enter Your Book Name"
              required
            />
          </div>
          <div class="md:col-span-2 text-gray-700">
            <label for="number">Book Photo</label>
            <input
              type="picture"
              name="photo"
              class="h-10 border  border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              placeholder="Your Book Photo"
              required
            />
          </div>

          <div class="md:col-span-1 text-gray-700">
            <label for="address">Book Price</label>
            <input
              type="number"
              name="price"
              class="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              placeholder="Book Price"
              required
            />
          </div>

          <div class="md:col-span-2 text-gray-700">
            <label for="address">Discount</label>
            <select
              name="discount"
              class="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              aria-label="Default select example"
            >
              <option disabled selected>
                Select discount parcentige
              </option>
              <option>30%</option>
              <option>40%</option>
              <option>60%</option>
            </select>
          </div>

          <div class="md:col-span-2 text-gray-700">
            <label for="city">Book Quantity</label>
            <input
              type="number"
              name="quantity"
              class="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              placeholder="Quantity"
            />
          </div>
          <div class="md:col-span-3">
            <label for="zipcode">Description</label>
            <textarea
              class="h-10 border border-gray-400 mt-1 pt-2 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>

          <div class="md:col-span-3 text-gray-700">
            <label for="state">Release Date </label>
            <input
              name="releaseDate"
              placeholder="Release Date"
              class="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              required
            />
          </div>
          <div class="md:col-span-2 text-gray-700">
            <label for="country">Author Name </label>
            <input
              name="writter"
              placeholder="Author Name"
              class="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="inline-block md:px-6 px-4 md:py-3 py-2  text-gray-100 bg-red-600 hover:bg-purple-600  md:text-base text-sm font-semibold rounded-md duration-300 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
