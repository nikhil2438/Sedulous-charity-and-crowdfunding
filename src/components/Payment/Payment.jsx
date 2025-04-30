import React, { useState } from "react";
import logo1 from "../../assets/images/logo1.png";

const Payment = () => {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Failed to load Razorpay SDK. Please check your internet.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/razorpay/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 5000 }),
        }
      );

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
            const verifyRes = await fetch(
              "http://localhost:5000/api/razorpay/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  amount: data.order.amount,
                }),
              }
            );

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              alert("Payment Successful and Verified!");
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.error("Verification API error:", error);
            alert("Payment verification error.");
          }
          setLoading(false);
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Order creation error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <p className="mt-4 text-blue-500 font-semibold">Processing...</p>
        </div>
      ) : (
        <button
          onClick={handlePayment}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Pay Now
        </button>
      )}
    </div>
  );
};

export default Payment;
