import { Avatar } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import Loader from "../../../utility/Loader/Loader";
import "../Dashboard.css";

const Buyer = () => {
  const {
    data: buyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: () =>
      fetch(`https://books-store-server-six.vercel.app/buyer`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("book-token")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    const aggre = window.confirm("Are sure ?You want to delete this buyer?");
    if (aggre) {
      fetch(`https://books-store-server-six.vercel.app/buyer/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("book-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Succesfully delete this buyer!!");
            refetch();
          }
        })
        .catch((err) => console.error(err));
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {!buyers ? (
        <div>
          <h1 className="text-3xl font-semibold mb-4">Buyer</h1>
          <div>
            <div className="container-table-headers">
              <p className="border p-3">Photo</p>
              <p className="border p-3">Name</p>
              <p className="border p-3">Email</p>
              <p className="border p-3">Delete</p>
            </div>

            {buyers?.map((buyer) => (
              <>
                <div className=" container-table-data  ">
                  <div className="border p-3">
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className="avatar-user"
                    />
                  </div>
                  <div className="border p-3 ">
                    <p>{buyer?.name}</p>
                    <span className="text-sm text-green-800 font-semibold">
                      {buyer.role}
                    </span>
                  </div>
                  <div className="border p-3 ">{buyer?.email}</div>
                  <div className="border p-3 ">
                    <button
                      onClick={() => handleDelete(buyer?._id)}
                      className="bg-[#fc3333]  text-white sm:w-10 sm:h-10 h-6 w-6 rounded-full flex justify-center items-center"
                    >
                      <MdDelete className="h-8 w-8" />
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p className="text-4xl font-semibold text-red-600">No data to show</p>
        </div>
      )}
    </>
  );
};

export default Buyer;
