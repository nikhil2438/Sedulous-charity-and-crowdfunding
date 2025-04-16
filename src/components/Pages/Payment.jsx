import React, { useState } from "react";

const RakhiOnlinePayment = () => {
  const [amount, setAmount] = useState(500);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* <p className="text-center text-sm text-blue-600 font-semibold">
          ✅ Verified by Team at the Hospital
        </p> */}
        <h2 className="text-lg font-semibold text-center mt-4">
          Choose the amount you wish to Donate
        </h2>
        <div className="flex justify-center gap-4 mt-4 border-b pb-2">
          {[350, 500, 1200].map((amt) => (
            <button
              key={amt}
              className={`px-6 py-2 ${
                amount === amt
                  ? "text-blue-500 font-semibold underline"
                  : "text-gray-600"
              }`}
              onClick={() => setAmount(amt)}
            >
              ₹ {amt}
            </button>
          ))}
        </div>
        <button className="block w-full mt-4 text-gray-600 underline">
          Other Amount
        </button>
        <form className="mt-4">
          <label className="block font-medium">Name *</label>
          <input
            type="text"
            className="w-full border-b p-2 mt-1 outline-none"
            placeholder="Enter your name"
          />
          <div className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            <span>Make my donation anonymous</span>
          </div>
          <label className="block font-medium mt-4">Email ID</label>
          <input
            type="email"
            className="w-full border-b p-2 mt-1 outline-none"
            placeholder="Enter your email"
          />
          <label className="block font-medium mt-4">Your Mobile Number *</label>
          <div className="flex items-center border-b p-2 mt-1">
            <span className="mr-2">🇮🇳</span>
            <input
              type="tel"
              className="w-full outline-none"
              placeholder="Enter your mobile number"
            />
          </div>
          <p className="text-xs text-yellow-600 bg-yellow-100 p-2 rounded mt-2">
            ⚠️ For tax benefits, update your PAN and address under profile
            details after completing your donation.
          </p>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
            Contribute ₹ {amount}
          </button>
        </form>
        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to our{" "}
          <span className="text-blue-500">Terms of Service</span> and{" "}
          <span className="text-blue-500">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default RakhiOnlinePayment;
