import React, { useState } from "react";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for signing up! We will get in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          Join as a Volunteer
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Become a part of our mission to bring positive change. Sign up to
          volunteer and make a difference!
        </p>

        {/* Volunteer Form */}
        <form
          className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <textarea
            name="message"
            placeholder="Why do you want to volunteer?"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md w-full mt-4"
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-red-600 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-red-700 transition"
          >
            Sign Up as Volunteer
          </button>
        </form>

        {/* Partnership Section */}
        <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Partner with Us</h3>
          <p className="mt-2 text-lg">
            We welcome collaborations with NGOs and businesses to expand our
            impact.
          </p>
          <a
            href="/partner"
            className="inline-block mt-4 bg-white text-red-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-200 transition"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
