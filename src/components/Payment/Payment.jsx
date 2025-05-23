import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [donorData, setDonorData] = useState(null);
  const location = useLocation();
const donationData = JSON.parse(localStorage.getItem("donationData"));

  useEffect(() => {
    
    if (location.state?.amount) {
      setAmount(location.state.amount);
    }

    
    const storedData = localStorage.getItem("donationData");
    if (storedData) {
      const parsed = JSON.parse(storedData);
      setDonorData(parsed);
    }
  }, [location]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!amount || amount < 250) {
      alert("Amount should be at least ₹250.");
      return;
    }

    if (!donorData) {
      alert("Missing donor information.");
      return;
    }

    setLoading(true);

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Failed to load Razorpay SDK. Check your internet.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount * 100 }),
      });

      const data = await response.json();
      if (!data.success) {
        alert("Failed to create order.");
        setLoading(false);
        return;
      }

      const options = {
        key: "rzp_test_4dGSN3soiQbdOv",
        amount: data.order.amount,
        currency: data.order.currency,
        name: "माँ सिद्धेश्वरी चैरिटी ट्रस्ट",
        image: logo1,
        description: "Donation Payment",
        order_id: data.order.id,
        handler: async (response) => {
          try {
            const verifyRes = await fetch("http://localhost:5000/api/razorpay/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                amount: data.order.amount,
                

                FullName: donorData.FullName,
        ContactNumber: donorData.ContactNumber,
        Email: donorData.Email,
        address: donorData.address,
        category: donorData.category,
        Language: donorData.Language, 
        
      }),
    
              
            });
            console.log("Donor data before payment verification:", donorData);

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              alert("🎉 Payment Successful and Verified!");
              localStorage.removeItem("donationData"); 
            } else {
              alert("❌ Payment verification failed.");
            }  
          } catch (error) {
            console.error("Verification error:", error);
            alert("Server verification failed.");
          }
          setLoading(false);
        },
        prefill: {
          name: donorData.FullName || "Donor",
          email: donorData.Email || "",
          contact: donorData.ContactNumber || "",
        },
        notes: {
          address: donorData.address || "Donor Address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Order creation failed:", error);
      alert("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Make a Donation</h1>

      <div className="text-center mb-4">
        <img src={logo1} alt="Maa Siddheshwari Charity" className="mx-auto" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Donation Amount
        </label>
        <input
          type="number"
          value={amount}
          readOnly
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Processing..." : "Donate Now"}
      </button>
    </div>
  );
};

export default Payment;
 

