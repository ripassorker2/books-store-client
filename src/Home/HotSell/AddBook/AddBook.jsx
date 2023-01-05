import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const AddBook = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.category.value;
    const title = form.title.value;
    const price = form.price.value;
    const discount = form.discount.value;
    const description = form.description.value;
    const releaseDate = form.releaseDate.value;
    const writter = form.writter.value;

    const image = form.photo.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=4aa60d42eb38dc3e5b32647ce905d2e8`;

    let categoryId;

    switch (category) {
      case "Action and Adventure":
        categoryId = 1;
        break;
      case "Classics":
        categoryId = 2;
        break;
      case "Comic Book":
        categoryId = 3;
        break;
      case "Detective and Mystery":
        categoryId = 4;
        break;
      case "Fantasy":
        categoryId = 5;
        break;
      case "Horror":
        categoryId = 6;
        break;

      default:
        categoryId = 1;
    }

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const photo = imageData.data.display_url;
        const productData = {
          sellerName: user?.displayName,
          sellerEmail: user?.email,
          sellerPhoto: user?.photoURL,
          category,
          id: categoryId,
          title,
          photo,
          price,
          discount,
          description,
          releaseDate,
          writter,
          advertise: false,
          status: "available",
        };

        fetch(`https://books-store-server-six.vercel.app/addProduct`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Product added successfully");
              form.reset();
            }
          });
      });
  };

  return (
    <div className="my-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-xl mx-auto   bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
      >
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 text-gray-700">
            <label for="name">Seller Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              name="sellerName"
              className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div className="md:col-span-3 text-gray-700">
            <label for="email">Seller Email</label>
            <input
              type="email"
              name="sellerEmail"
              defaultValue={user?.email}
              disabled
              className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="md:col-span-3 text-gray-700">
            <label for="address">Book Category</label>
            <select
              name="category"
              className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
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

          <div className="md:col-span-2 text-gray-700">
            <label for="title">Book Name</label>
            <input
              type="text"
              name="title"
              className="h-10 border  border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              placeholder="Enter Your Book Name"
              required
            />
          </div>
          <div className="md:col-span-2 text-gray-700">
            <label for="number">Book Photo</label>
            <input
              type="file"
              name="photo"
              className="h-10 border  border-gray-400 mt-1 pt-[6px] rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              placeholder="Your Book Photo"
              required
            />
          </div>

          <div className="md:col-span-3 text-gray-700">
            <label for="address">Book Price</label>
            <input
              type="number"
              name="price"
              className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              placeholder="Book Price"
              required
            />
          </div>

          <div className="md:col-span-3 text-gray-700">
            <label for="address">Discount</label>
            <select
              name="discount"
              className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              aria-label="Default select example"
            >
              <option disabled selected>
                Select discount parcentige
              </option>
              <option>30</option>
              <option>40</option>
              <option>60</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label for="zipcode">Description</label>
            <textarea
              className="h-10 border border-gray-400 mt-1 pt-2 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-gray-700">
            <label for="state">Release Date </label>
            <input
              type="date"
              name="releaseDate"
              placeholder="Release Date"
              className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
              required
            />
          </div>
          <div className="md:col-span-3 text-gray-700">
            <label for="country">Author Name </label>
            <input
              name="writter"
              placeholder="Author Name"
              className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
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
