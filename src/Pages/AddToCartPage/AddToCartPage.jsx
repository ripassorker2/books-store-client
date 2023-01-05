import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import AddToCard from "./AddToCard";
import Loader from "../../utility/Loader/Loader";
import { useQuery } from "@tanstack/react-query";

const AddToCartPage = () => {
  const { user } = useContext(AuthContext);

  const {
    data: cartProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () =>
      fetch(
        `https://books-store-server-six.vercel.app/cart/${user?.email}`
      ).then((res) => res.json()),
  });

  let total = 0;
  let quantity = 0;
  for (const product of cartProducts) {
    total = total + parseInt(product.price) * parseInt(product.quantity);
    quantity = quantity + parseInt(product.quantity);
  }
  localStorage.setItem("total", total);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {cartProducts.length === 0 ? (
        <div className="flex justify-center items-center min-h-fit pt-14">
          <p className="text-4xl font-semibold text-red-600">No data to show</p>
        </div>
      ) : (
        <>
          <div className="p-2  max-w-screen-xl mx-auto ">
            <div className="my-7 grid md:grid-cols-2">
              <div className="grid grid-cols-1  gap-4">
                <h4 className="text-gray-700 mb-2 font-semibold sm:text-xl text-base">
                  Your Cart
                </h4>
                {cartProducts?.map((product) => (
                  <AddToCard
                    key={product._id}
                    refetch={refetch}
                    product={product}
                  />
                ))}
              </div>
              <div className="grid grid-cols-1 m-4">
                <div>
                  <h4 className="text-gray-700 mb-3 font-semibold sm:text-xl text-base">
                    Your Order Info
                  </h4>
                  <div>
                    <div className="w-full max-w-2xl mx-auto bg-white  rounded-sm ">
                      <div className="">
                        <div className="">
                          <table className="table-auto w-full">
                            <thead className="uppercase text-gray-900 ">
                              <tr>
                                <th className=" whitespace-nowrap">
                                  <div className="font-semibold border-2 p-5 text-centert text-sm text-gray-700">
                                    Billing Info
                                  </div>
                                </th>
                                <th className="whitespace-nowrap">
                                  <div className="font-semibold border-2 p-5 text-centert text-sm text-gray-700">
                                    Amount
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="text-sm">
                              <tr>
                                <td className=" whitespace-nowrap border-b">
                                  <div className="text-center border font-semibold hover:border-red-500 duration-200  p-4  text-gray-600">
                                    Total
                                  </div>
                                </td>
                                <td className=" whitespace-nowrap border-b">
                                  <div className=" font-semibold text-red-600 text-center border hover:border-red-500 duration-200  p-4">
                                    ${total}.00
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="flex justify-end mt-4">
                            <Link
                              to={"/payment"}
                              className="inline-block w-full"
                            >
                              <button className="inline-block w-full md:px-6 px-4 md:py-3 py-2  text-gray-100 bg-red-600 hover:bg-red-700  md:text-base text-sm font-semibold rounded-md duration-300 ">
                                Place Order
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default AddToCartPage;
