import React from "react";

const MainCheckout = () => {
  return (
    <div>
      <div class="min-h-screen p-6  flex items-center justify-center">
        <div class="container max-w-screen-xl mx-auto">
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form class="grid gap-4 gap-y-2  text-sm grid-cols-1 lg:grid-cols-2">
              <div class="lg:col-span-1">
                <h3 className="text-lg pb-3 font-semibold text-gray-700">
                  Billing Address
                </h3>
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-2 text-gray-700">
                    <label for="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>

                  <div class="md:col-span-3 text-gray-700">
                    <label for="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>

                  <div class="md:col-span-5 text-gray-700">
                    <label for="number">Contact Number</label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      placeholder="Enter Your Number"
                      required
                    />
                  </div>

                  <div class="md:col-span-3 text-gray-700">
                    <label for="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      placeholder="Street"
                      required
                    />
                  </div>

                  <div class="md:col-span-2 text-gray-700">
                    <label for="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      placeholder="City"
                    />
                  </div>

                  <div class="md:col-span-2 text-gray-700">
                    <label for="country">Country </label>
                    <input
                      name="country"
                      id="country"
                      placeholder="Country"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      required
                    />
                  </div>

                  <div class="md:col-span-2 text-gray-700">
                    <label for="state">State </label>
                    <input
                      name="state"
                      id="state"
                      placeholder="State"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
                      required
                    />
                  </div>

                  <div class="md:col-span-1">
                    <label for="zipcode">Zipcode</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-gray-400"
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
                  <div class="w-full max-w-2xl mx-auto bg-white  rounded-sm ">
                    <div class="">
                      <div class="">
                        <table class="table-auto w-full">
                          <thead class="uppercase text-gray-900 ">
                            <tr>
                              <th class=" whitespace-nowrap">
                                <div class="font-bold border-2 p-5 text-center">
                                  Book
                                </div>
                              </th>
                              <th class="whitespace-nowrap">
                                <div class="font-bold border-2 p-5 text-center">
                                  Amount
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="text-sm">
                            <tr>
                              <td class=" whitespace-nowrap">
                                <div class="text-center font-semibold border hover:border-red-500 duration-200  p-4  text-gray-600">
                                  alexshat
                                </div>
                              </td>
                              <td class=" whitespace-nowrap">
                                <div class="font-semibold  text-red-600 text-center border hover:border-red-500 duration-200  p-4">
                                  $43.00
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class=" whitespace-nowrap">
                                <div class="text-center border font-semibold hover:border-red-500 duration-200  p-4  text-gray-600">
                                  Delivary Charge
                                </div>
                              </td>
                              <td class=" whitespace-nowrap">
                                <div class=" font-semibold text-red-600 text-center border hover:border-red-500 duration-200  p-4">
                                  $27.00
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class=" whitespace-nowrap border-b">
                                <div class="text-center border font-semibold hover:border-red-500 duration-200  p-4  text-gray-600">
                                  Total
                                </div>
                              </td>
                              <td class=" whitespace-nowrap border-b">
                                <div class=" font-semibold text-red-600 text-center border hover:border-red-500 duration-200  p-4">
                                  $67.00
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="flex justify-end mt-4">
                          <button className="inline-block md:px-6 px-4 md:py-3 py-2  text-gray-100 bg-red-600 hover:bg-purple-600  md:text-base text-sm font-semibold rounded-md duration-300 ">
                            Place Order
                          </button>
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
