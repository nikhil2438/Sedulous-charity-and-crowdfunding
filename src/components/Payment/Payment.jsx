import React, { useState } from "react";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [amount, setAmount] = useState(""); // User-entered amount

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setPaymentStatus(" Please enter a valid amount");
      return;
    }

    setLoading(true);
    setPaymentStatus(null);

    try {
      const amountInPaise = parseInt(amount) * 100;

      // 🔹 Call a different API endpoint for order creation
      const orderResponse = await fetch("http://localhost:5000/new-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
          payment_capture: 1,
        }),
      });

      const orderData = await orderResponse.json();
      console.log("New Order Data:", orderData);

      if (!orderData.orderId) {
        throw new Error("Order creation failed");
      }

      // 🔹 Initialize Razorpay with the new API order
      const options = {
        key: "rzp_test_asR6KMMxaRScd8", // Razorpay Key ID
        amount: orderData.amount,
        currency: orderData.currency,
        name: "My Charity",
        description: "Support Our Cause",
        order_id: orderData.orderId,
        handler: async (response) => {
          console.log("✅ Payment Response:", response);

          const validationResponse = await fetch(
            "http://localhost:5000/new-order/validate",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            }
          );

          const validationData = await validationResponse.json();
          console.log(" Validation Response:", validationData);

          if (validationData.status === "success") {
            setPaymentStatus(" Payment Successful! Thank you!");
          } else {
            setPaymentStatus(" Payment Verification Failed!");
          }
        },
        prefill: {
          name: "Jane Doe",
          email: "janedoe@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#ff5722",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(" Payment Error:", error);
      setPaymentStatus(" Payment Failed! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">
        Support Us with a Donation
      </h2>

      {/* Dynamic Amount Input */}
      <input
        type="number"
        placeholder="Enter Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      <button
        onClick={handlePayment}
        disabled={loading}
        className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
      >
        {loading ? "Processing..." : `Donate ₹${amount || "?"}`}
      </button>

      {paymentStatus && (
        <p className="mt-4 text-lg font-semibold text-gray-700">
          {paymentStatus}
        </p>
      )}
    </div>
  );
};

export default Payment;
