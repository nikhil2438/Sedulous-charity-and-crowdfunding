// Import useEffect for navigation on checkbox click
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import React from "react";

function DonationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    reason: "",
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.contact ||
      !formData.address ||
      !formData.reason
    ) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    navigate("/payment");
  };

  useEffect(() => {
    if (checked) {
      navigate("/qr-payment");
    }
  }, [checked, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center   p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
          Donation Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            name="reason"
            placeholder="Reason for Donation"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonationForm;
