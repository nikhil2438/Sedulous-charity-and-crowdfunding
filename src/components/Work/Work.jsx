import React from "react";
import { FaHandHoldingHeart, FaBullhorn, FaDonate } from "react-icons/fa";

const steps = [
  {
    title: "Start a Fundraiser",
    description: "Create a campaign for your cause in just a few minutes.",
    icon: <FaBullhorn size={40} className="text-red-500" />,
  },
  {
    title: "Get Support",
    description: "Share your fundraiser and receive donations from supporters.",
    icon: <FaHandHoldingHeart size={40} className="text-orange-500" />,
  },
  {
    title: "Receive Funds",
    description: "Withdraw funds securely and use them for your cause.",
    icon: <FaDonate size={40} className="text-yellow-500" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-red-600 mb-8">How It Works</h2>
        <p className="text-lg text-gray-600 mb-12">
          Start your journey in three simple steps and make a difference today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
