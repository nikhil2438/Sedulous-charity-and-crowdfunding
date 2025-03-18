import React, { useEffect } from "react";

const Donate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_5AaBBccDD123XX",
      amount: 50000,
      currency: "INR",
      name: "MA SIDISHWARI Charity",
      description: "Donation Payment",
      image: "https://via.placeholder.com/150",
      handler: function (response) {
        alert(
          "Payment successful! Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Support Our Cause</h1>
      <p className="text-lg text-gray-700 mb-4">
        Your contribution makes a difference!
      </p>
      <button
        onClick={handlePayment}
        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition"
      >
        Donate Now
      </button>
    </div>
  );
};

export default Donate;
