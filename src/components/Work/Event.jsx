import React, { useState, useEffect } from "react";

const BonusFeatures = () => {
  const [donationAmount, setDonationAmount] = useState(12500);
  const [donors, setDonors] = useState(320);

  useEffect(() => {
    const interval = setInterval(() => {
      setDonationAmount((prev) => prev + Math.floor(Math.random() * 100));
      setDonors((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const events = [
    { date: "Mar 15, 2025", title: "Charity Run for Education" },
    { date: "Apr 02, 2025", title: "Food Drive for Homeless" },
    { date: "Apr 20, 2025", title: "Medical Aid Camp" },
  ];

  const [userInput, setUserInput] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleGenerateIdea = () => {
    const ideas = [
      "Host a virtual fundraiser event.",
      "Organize a community charity walk.",
      "Create an online donation challenge.",
      "Start a social media fundraiser campaign.",
      "Partner with local businesses for charity drives.",
    ];
    setSuggestion(ideas[Math.floor(Math.random() * ideas.length)]);
  };

  return (
    <section className="py-16 bg-gray-100 flex justify-center">
      <div className="max-w-6xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-8">
          🔥 Events and upcoming events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800">
                Live Donation Tracker
              </h3>
              <p className="text-lg mt-2">
                💰 Total Raised:{" "}
                <span className="font-bold text-green-600">
                  ${donationAmount}
                </span>
              </p>
              <p className="text-lg">
                👥 Total Donors: <span className="font-bold">{donors}</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800">
                🤖 AI-Powered Fundraising Assistant
              </h3>
              <p className="text-lg mt-2">
                Need ideas for your fundraiser? Get a suggestion instantly!
              </p>
              <input
                type="text"
                placeholder="Describe your cause..."
                className="w-full mt-4 p-3 border rounded-lg"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button
                onClick={handleGenerateIdea}
                className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Get Fundraising Idea
              </button>
              {suggestion && (
                <p className="mt-4 text-lg font-semibold text-gray-700">
                  🎯 Suggestion: {suggestion}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800">
                📅 Upcoming Charity Events
              </h3>
              <ul className="mt-4 space-y-2">
                {events.map((event, index) => (
                  <li key={index} className="text-lg">
                    📍 <span className="font-bold">{event.date}</span> -{" "}
                    {event.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold">
                Ready to Make a Difference? 🌍
              </h3>
              <p className="mt-2 text-lg">
                Join our community and start your fundraiser today!
              </p>
              <button className="mt-4 bg-white text-red-600 font-bold px-6 py-2 rounded-lg hover:bg-red-200 transition">
                Start Fundraising
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusFeatures;
