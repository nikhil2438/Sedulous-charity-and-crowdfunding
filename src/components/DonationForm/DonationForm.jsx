import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DonationForm() {
  const [formData, setFormData] = useState({
    FullName: "",
    ContactNumber: "",
    Email: "",
    address: "",
    category: "",
    language: "",
    amount: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      FullName: formData.FullName,
      ContactNumber: formData.ContactNumber,
      Email: formData.Email,
      address: formData.address,
      category: formData.category,
      Language: formData.language,
      amount: Number(formData.amount),
    };

    if (!/^[0-9]{10}$/.test(payload.ContactNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (payload.amount < 250) {
      alert("Minimun donation amount is ₹250.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to submit donation.");
      }

      console.log("Donation submitted:", result);
      alert("Donation info saved. Redirecting to payment...");

      navigate("/payment", {
        state: { amount: payload.amount },
      });
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error submitting donation: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-4"
      >
        <h2 className="text-xl font-semibold text-orange-500 text-center mb-4">
          Maa Siddheshwari Charity Trust
        </h2>

        <input
          type="text"
          name="FullName"
          placeholder="Full Name"
          value={formData.FullName}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />

        <input
          type="tel"
          name="ContactNumber"
          placeholder="Phone"
          maxLength={10}
          value={formData.ContactNumber}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />

        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        >
          <option value="">Select Option</option>
          <option value="Medical">Healthcare</option>
          <option value="Education">Education</option>
          <option value="Food">Food&Nutritious</option>
          <option value="Women Empowerment">Women Empowerment</option>
          <option value="Charity">Donation For Temple</option>
        </select>

        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Tamil">Tamil</option>
        </select>

        <input
          type="number"
          name="amount"
          placeholder="Donation Amount (₹)"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DonationForm;
 
