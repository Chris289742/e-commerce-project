import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const { getCartAmount, navigate } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState("card"); // Default payment method

  return (
    <div>
      <div className="bg-white sm:px-8 px-4 py-6 mx-32">
        <div className="max-w-screen-xl max-md:max-w-xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
            <div className="lg:col-span-2">
              <form>
                <div>
                  <h2 className="text-xl text-slate-900 font-semibold mb-6">
                    Delivery Details
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter First Name"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Last Name"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Phone No.
                      </label>
                      <input
                        type=""
                        placeholder="Enter Phone No."
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Address Line
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Address Line"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-xl text-slate-900 font-semibold mb-6">
                    Payment
                  </h2>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="bg-gray-100 p-4 rounded-md border border-gray-300 max-w-sm">
                      <div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="method"
                            className="w-5 h-5 cursor-pointer"
                            id="card"
                            checked={paymentMethod === "card"}
                            onChange={() => setPaymentMethod("card")}
                          />
                          <label
                            htmlFor="card"
                            className="ml-4 flex gap-2 cursor-pointer"
                          >
                            <img
                              src="https://readymadeui.com/images/visa.webp"
                              className="w-12"
                              alt="card1"
                            />
                            <img
                              src="https://readymadeui.com/images/american-express.webp"
                              className="w-12"
                              alt="card2"
                            />
                            <img
                              src="https://readymadeui.com/images/master.webp"
                              className="w-12"
                              alt="card3"
                            />
                          </label>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-slate-500 font-medium">
                        Pay with your debit or credit card
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md border border-gray-300 max-w-sm">
                      <div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="method"
                            className="w-5 h-5 cursor-pointer"
                            id="paypal"
                            checked={paymentMethod === "paypal"}
                            onChange={() => setPaymentMethod("paypal")}
                          />
                          <label
                            htmlFor="paypal"
                            className="ml-4 flex gap-2 cursor-pointer"
                          >
                            <img
                              src="https://readymadeui.com/images/paypal.webp"
                              className="w-20"
                              alt="paypalCard"
                            />
                          </label>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-slate-500 font-medium">
                        Pay with your PayPal account
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 max-w-md">
                  <p className="text-slate-900 text-sm font-medium mb-2">
                    Do you have a promo code?
                  </p>
                  <div className="flex gap-4">
                    <input
                      type="email"
                      placeholder="Promo code"
                      className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                    <button
                      type="button"
                      className="flex items-center justify-center font-medium tracking-wide bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="relative">
              <h2 className="text-xl text-slate-900 font-semibold mb-6">
                Order Summary
              </h2>
              <ul className="text-slate-500 font-medium space-y-4">
                <li className="flex flex-wrap gap-4 text-sm">
                  Subtotal{" "}
                  <span className="ml-auto font-semibold text-slate-900">
                    {getCartAmount()}
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Discount{" "}
                  <span className="ml-auto font-semibold text-slate-900">
                    $0.00
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Shipping{" "}
                  <span className="ml-auto font-semibold text-slate-900">
                    $10.00
                  </span>
                </li>

                <hr className="border-slate-300" />
                <li className="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900">
                  Total <span className="ml-auto">{getCartAmount() + 10}</span>
                </li>
              </ul>
              <div className="space-y-4 mt-8">
                <button
                  type="button"
                  className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                  onClick={() => {
                    navigate("/orders");
                  }}
                >
                  Complete Purchase
                </button>
                <button
                  type="button"
                  className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-gray-100 hover:bg-gray-200 border border-gray-300 text-slate-900 cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
