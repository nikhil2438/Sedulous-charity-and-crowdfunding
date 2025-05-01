import React, { useState } from "react";
import Educations from "../../assets/images/Educations.jpg";
import Educations7 from "../../assets/images/Educations7.jpg";
import Educations3 from "../../assets/images/Educations3.jpg";
import Educations4 from "../../assets/images/Educations4.jpg";
import Educations8 from "../../assets/images/Educations8.jpg";
import DonationForm from "../DonationForm/DonationForm";

const Education = () => {
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
        src={Educations4}
        alt="Educations"
        className="mx-auto w-full h-[500px] object-cover rounded-lg shadow-md"
      />
      <div className="mt-6 text-center px-6 sm:px-8">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Your Small Contribution Can Make a Huge Difference! 🌍❤️
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl">
          Join hands with us to bring hope and support to those in need. Every
          donation counts and can change a life forever. Let's make the world a
          better place together.
        </p>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          "Happiness doesn’t result from what we get, but from what we give." - Ben Carson
        </p>

        {!showDonationForm && (
          <button
            onClick={handleDonateClick}
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            Donate Now
          </button>
        )}
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center">
        <div className="w-full md:w-1/2 h-[500px] md:h-screen overflow-y-auto hide-scrollbar px-4 sm:px-10">
          
          {[Educations7, Educations3, Educations, Educations8].map((img, index) => (
            <div key={index}>
              <img src={img} alt="Banner" className="h-auto w-full mt-10" />
              <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
                As a trustee of our temple trust fund, I am honored to serve and
                uphold our sacred mission of preserving our temple’s heritage and
                promoting its values of unity, compassion, and spiritual growth...
              </h1>
            </div>
          ))}
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
      </div>
    </>
  );
};

export default Education;
