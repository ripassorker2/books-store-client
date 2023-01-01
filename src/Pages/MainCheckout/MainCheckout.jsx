import React from "react";
import Payment from "../Payment/Payment";

const MainCheckout = () => {
  return (
    <div>
      <div className="min-h-screen p-6  flex items-center justify-center">
        <div className="container max-w-screen-xl mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form className="grid gap-4 gap-y-2  text-sm grid-cols-1 lg:grid-cols-2">
              <div className="lg:col-span-1">
                <h3 className="text-lg pb-3 font-semibold text-gray-700">
                  Billing Address
                </h3>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2 text-gray-700">
                    <label for="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>

                  <div className="md:col-span-3 text-gray-700">
                    <label for="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>

                  <div className="md:col-span-5 text-gray-700">
                    <label for="number">Contact Number</label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      className="h-10 border  border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      placeholder="Enter Your Number"
                      required
                    />
                  </div>

                  <div className="md:col-span-3 text-gray-700">
                    <label for="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      placeholder="Street"
                      required
                    />
                  </div>

                  <div className="md:col-span-2 text-gray-700">
                    <label for="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      placeholder="City"
                    />
                  </div>

                  <div className="md:col-span-2 text-gray-700">
                    <label for="country">Country </label>
                    <input
                      name="country"
                      id="country"
                      placeholder="Country"
                      className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      required
                    />
                  </div>

                  <div className="md:col-span-2 text-gray-700">
                    <label for="state">State </label>
                    <input
                      name="state"
                      id="state"
                      placeholder="State"
                      className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      required
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label for="zipcode">Zipcode</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      className="h-10 border border-gray-400 mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      placeholder="Zipcode"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-gray-700 mb-3 font-semibold text-lg">
                  Your Order
                </h4>
                <div>
                  <div className="w-full max-w-2xl mx-auto bg-white  rounded-sm ">
                    <div className="">
                      <div className="">
                        <table className="table-auto w-full">
                          <thead className="uppercase text-gray-900 ">
                            <tr>
                              <th className=" whitespace-nowrap">
                                <div className="font-bold border-2 p-5 text-center">
                                  Book
                                </div>
                              </th>
                              <th className="whitespace-nowrap">
                                <div className="font-bold border-2 p-5 text-center">
                                  Amount
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-sm">
                            <tr>
                              <td className=" whitespace-nowrap">
                                <div className="text-center font-semibold border hover:border-red-500 duration-200  p-4  text-gray-600">
                                  alexshat
                                </div>
                              </td>
                              <td className=" whitespace-nowrap">
                                <div className="font-semibold  text-red-600 text-center border hover:border-red-500 duration-200  p-4">
                                  $43.00
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className=" whitespace-nowrap">
                                <div className="text-center border font-semibold hover:border-red-500 duration-200  p-4  text-gray-600">
                                  Delivary Charge
                                </div>
                              </td>
                              <td className=" whitespace-nowrap">
                                <div className=" font-semibold text-red-600 text-center border hover:border-red-500 duration-200  p-4">
                                  $27.00
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className=" whitespace-nowrap border-b">
                                <div className="text-center border font-semibold hover:border-red-500 duration-200  p-4  text-gray-600">
                                  Total
                                </div>
                              </td>
                              <td className=" whitespace-nowrap border-b">
                                <div className=" font-semibold text-red-600 text-center border hover:border-red-500 duration-200  p-4">
                                  $67.00
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div>
                          <Payment></Payment>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCheckout;
