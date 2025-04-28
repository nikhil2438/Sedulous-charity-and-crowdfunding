import React, { useState } from "react";

function DonationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    address: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.contactNumber ||
      !formData.address ||
      !formData.reason
    ) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Backend error:", errorData);
        throw new Error(errorData.error || "Something went wrong");
      }

      console.log("Donation form submitted successfully!");
      alert("Donation form submitted successfully");

      setFormData({
        fullName: "",
        contactNumber: "",
        address: "",
        reason: "",
      });
    } catch (error) {
      console.log("Error submitting donation:", error);
      alert(`Failed to submit donation: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
          Donation Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
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
