import React from "react";
import educationImage from "../../assets/images/education.jpg";
import banner7 from "../../assets/images/banner7.jpg";
import FoodImage from "../../assets/images/Food.jpg";
import { Link } from "react-router-dom";

const fundraisers = [
  {
    id: 1,
    title: "Help a Child Get Education",
    image: educationImage,
    raised: 4500,
    goal: 10000,
  },
  {
    id: 2,
    title: "Support Cancer Patients",
    image: banner7,
    raised: 7500,
    goal: 15000,
  },
  {
    id: 3,
    title: "Food for the Homeless",
    image: FoodImage,
    raised: 5000,
    goal: 12000,
  },
];

const FeaturedFundraisers = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">
          Featured Fundraisers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fundraisers.map((fundraiser) => (
            <div
              key={fundraiser.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <img
                src={fundraiser.image}
                alt={fundraiser.title}
                className="w-full h-56 sm:h-48 object-cover rounded-md  transform transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-lg font-semibold mt-4">{fundraiser.title}</h3>
              <div className="relative w-full bg-gray-200 h-3 rounded-full mt-3">
                <div
                  className="bg-red-500 h-3 rounded-full"
                  style={{
                    width: `{(fundraiser.raised / fundraiser.goal) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-sm mt-2">
                Raised: <span className="font-bold">${fundraiser.raised}</span>{" "}
                / {fundraiser.goal}
              </p>
              <Link to="/donationForm">
                <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition">
                  Donate Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFundraisers;
