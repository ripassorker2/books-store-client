import React from "react";

const AddProduct = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-3">Add product</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name=""
          placeholder="Title"
          className="border outline-none px-2 py-2 rounded-md bg-zinc-200 w-full"
          id=""
        />
        <input
          type="number"
          name=""
          placeholder="Price"
          className="border outline-none px-2 py-2 rounded-md bg-zinc-200 w-full"
          id=""
        />
        <input
          type="file"
          name=""
          placeholder="Title"
          className="border outline-none px-2 py-2 rounded-md bg-zinc-200 w-full "
          id=""
        />
        <select
          name="pets"
          className="border rounded-md w-full py-2 bg-zinc-200"
          id="pet-select"
        >
          <option value="">Select Category</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <input
          type="text"
          name=""
          placeholder="Writer Name"
          className="border outline-none px-2 py-2 rounded-md bg-zinc-200 w-full"
          id=""
        />
        <input
          type="text"
          name=""
          placeholder="Seller Name"
          className="border outline-none px-2 py-2 rounded-md bg-zinc-200 w-full"
          id=""
        />
        <input
          type="date"
          name=""
          placeholder="Select Date"
          className="border outline-none px-2 py-2 rounded-md bg-zinc-200 w-full"
          id=""
        />
        <textarea
          name=""
          placeholder="Description"
          id=""
          cols="30"
          rows="2"
          className="border rounded-md px-2 outline-none bg-zinc-200"
        ></textarea>
        <div>
          <input
            type="button"
            value="Add Product"
            className="bg-slate-500 py-2 px-6 font-semibold text-white cursor-pointer rounded-md "
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
