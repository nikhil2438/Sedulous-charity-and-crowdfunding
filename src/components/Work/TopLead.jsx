import React from "react";
import { FaMedal, FaCrown, FaTrophy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const topDonors = [
  { name: "Rahul Mehta", amount: 5000, anonymous: false },
  { name: "Anonymous Donor", amount: 4500, anonymous: true },
  { name: "Priya Sen", amount: 4000, anonymous: false },
  { name: "Anil Kapoor", amount: 3500, anonymous: false },
  { name: "Sneha Verma", amount: 3000, anonymous: false },
];

const Leaderboard = () => {
  const navigate = useNavigate();
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
          Top Donors & Leaderboard
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          We recognize and appreciate the generosity of our top contributors.
          Your support makes a real difference!
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-100 shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-red-500 text-white text-lg">
                <th className="py-3 px-6">Rank</th>
                <th className="py-3 px-6">Donor</th>
                <th className="py-3 px-6">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {topDonors.map((donor, index) => (
                <tr key={index} className="border-b text-lg">
                  <td className="py-4 px-6 font-semibold text-gray-800 flex items-center justify-center">
                    {index === 0 ? (
                      <FaCrown className="text-yellow-500 text-2xl" />
                    ) : index === 1 ? (
                      <FaMedal className="text-gray-400 text-2xl" />
                    ) : index === 2 ? (
                      <FaTrophy className="text-orange-500 text-2xl" />
                    ) : (
                      `#${index + 1}`
                    )}
                  </td>
                  <td className="py-4 px-6">
                    {donor.anonymous ? "Anonymous Donor" : donor.name}
                  </td>
                  <td className="py-4 px-6 font-semibold text-green-600">
                    ₹{donor.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-gray-700 text-lg">
          Want to see your name on the leaderboard?{" "}
          <button
            onClick={() => navigate("/donationform")}
            className="text-red-600 font-semibold underline"
          >
            Donate Now
          </button>{" "}
          and make an impact!
        </p>
      </div>
    </section>
  );
};

export default Leaderboard;
