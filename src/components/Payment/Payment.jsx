import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import qr1 from "../../assets/images/qr1.jpg";
import qr2 from "../../assets/images/qr2.jpg";



const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center p-6 space-y-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 drop-shadow-sm">
        Donate to Maa Sidhashweri Charity and Trust
      </h1>
      <div className="w-24 h-1 bg-orange-500 rounded-full mt-2 animate-pulse shadow-lg"></div>

      
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button className="bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-orange-700 transition">
          QR Code
        </button>
       
        <button className="border border-orange-600 text-orange-600 font-semibold py-2 px-6 rounded-lg hover:bg-orange-50 transition"
        onClick={() => navigate ("/rtgs")}
        >
          NEFT/RTGS
        </button>
      </div>

    
      <div className="flex flex-wrap justify-center gap-8 w-full">
      
        <div className="bg-white rounded-2xl shadow-xl p-5 flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300 w-full max-w-xs md:max-w-md">
          <img
            src={qr1}
            alt="Donation QR 1"
            className="w-full h-auto object-contain rounded-lg border max-w-[22rem]"
          />
          <p className="text-lg font-medium text-center text-gray-700">
            Scan with any UPI App<br />
            <span className="text-sm text-gray-500">(Note: "Donation")</span>
          </p>
        </div>

      
        <div className="bg-white rounded-2xl shadow-xl p-5 flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300 w-full max-w-xs md:max-w-md">
          <img
            src={qr2}
            alt="Donation QR 2"
            className="w-full h-auto object-contain  rounded-lg border max-w-[18rem]"
          />
          <p className="text-lg font-medium text-center text-gray-700">
            Scan with any UPI App<br />
            <span className="text-sm text-gray-500">(Note: "Charity Fund")</span>
          </p>
        </div>
      </div>


    
      
    </div>
  );
};

export default Payment;
