import React, { useState } from "react";
import banner7 from "../../assets/images/banner7.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import Healthcare3 from "../../assets/images/Healthcare3.jpg";
import Healthcare4 from "../../assets/images/Healthcare4.jpg";
import Healthcare5 from "../../assets/images/Healthcare5.jpg";
import DonationForm from "../DonationForm/DonationForm";

const FoodAndNutrition = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);
  
    const handleDonateClick = () => {
      setShowDonationForm(true);
      
      setTimeout(() => {
        document.getElementById("donation-form")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    };
  
  return (
    <>
      <img
        src={banner7}
        alt="Food Distribution"
        className="mx-auto w-full h-[500px] object-cover rounded-lg shadow-md"
      />
      <div className="mt-6 text-center px-6 sm:px-8">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Nourish a Life with a Generous Heart 🍲❤️
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl">
          Help us fight hunger by supporting our food distribution programs. Your contribution ensures no one sleeps hungry. Be the reason someone smiles today.
        </p>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          "If you can’t feed a hundred people, then feed just one." – Mother Teresa
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 h-[500px] md:h-screen overflow-y-auto hide-scrollbar px-4 sm:px-10">
          <img src={banner3} alt="Food Activity" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            Every day, our volunteers prepare and distribute wholesome meals to those who need them most. From the streets to shelter homes, your kindness travels far.
          </h1>
          {!showDonationForm && (
          <button
            onClick={handleDonateClick}
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            Donate Now
          </button>
        )}
      </div>

          <img src={Healthcare3} alt="Food Support" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            We believe that nutritious food is a basic human right. With your support, we ensure balanced meals for children, women, and elderly across the city.
          </h1>

          <img src={Healthcare4} alt="Meal Service" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            From dry ration kits to fresh cooked meals, we extend our helping hand through various channels of nourishment.
          </h1>

          <img src={Healthcare5} alt="Community Feeding" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            Be part of a movement that feeds the soul and stomach. Let’s make this world a little warmer, one plate at a time.
          </h1>
        </div>

        {showDonationForm && (
          <div
            id="donation-form"
            className="bg-orange-500 px-4 sm:px-10 md:px-14 mt-20 mb-2 flex justify-center"
          >
            <div className="w-full max-w-sm sm:max-w-md">
              <DonationForm />
            </div>
          </div>
        )}
      
    </>
  );
};

export default FoodAndNutrition;
