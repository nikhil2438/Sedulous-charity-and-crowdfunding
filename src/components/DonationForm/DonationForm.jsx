import React, { useState } from "react";

function DonationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "", // Address added here
    fundraisingReason: "",
    language: "",
    estimatedCost: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API logic here
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
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          maxLength={10}
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2  focus:ring-orange-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2  focus:ring-orange-500"
        />

        <div>
          <label className="text-sm font-semibold">
            Why are you fundraising? *
          </label>
          <select
            name="fundraisingReason"
            value={formData.fundraisingReason}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2  focus:ring-orange-500"
          >
            <option value="">Select Option</option>
            <option value="Medical">HealthCare</option>
            <option value="Education">Education</option>
            <option value="Food">Food & Nutritious</option>
            <option value="Women Empowerment">Women Empowerment</option>
            <option value="Charity">Donation For Temple</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold">Preferred Language</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2  focus:ring-orange-500"
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold">Estimated Cost (INR)</label>
          <input
            type="number"
            name="estimatedCost"
            value={formData.estimatedCost}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter amount e.g. 500"
            min="1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DonationForm;
