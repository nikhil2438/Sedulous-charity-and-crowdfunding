import React, { useState } from "react";
import banner7 from "../../assets/images/banner7.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import Healthcare3 from "../../assets/images/Healthcare3.jpg";
import Healthcare4 from "../../assets/images/Healthcare4.jpg";
import Healthcare5 from "../../assets/images/Healthcare5.jpg";
import DonationForm from "../DonationForm/DonationForm";

const Healthcare = () => {
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
        alt="Healthcare Banner"
        className="mx-auto w-full h-[500px] object-cover rounded-lg shadow-md"
      />

      <div className="mt-6 text-center px-6 sm:px-8">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Be the Lifeline Someone Needs 🏥❤️
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl">
          Join us in delivering critical healthcare support to those who can't afford it.
          Every donation helps provide medical aid, health camps, and life-saving resources.
        </p>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          "The best way to find yourself is to lose yourself in the service of others." – Mahatma Gandhi
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center">
        <div className="w-full md:w-1/2 h-[500px] md:h-screen overflow-y-auto hide-scrollbar px-4 sm:px-10">
          <img src={banner3} alt="Health Service" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            We believe that access to healthcare is a fundamental human right. Through our initiatives,
            we organize free health camps, provide essential medicines, and partner with hospitals and doctors
            to deliver quality medical services to the underprivileged sections of society.
          </h1>

          {!showDonationForm && (
            <button
              onClick={handleDonateClick}
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
            >
              Donate Now
            </button>
          )}

          <img src={Healthcare3} alt="Health Check" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            Our volunteers and medical professionals work tirelessly to reach remote areas and underserved communities.
            With mobile clinics and health awareness programs, we ensure that preventive care reaches those who need it most.
          </h1>

          <img src={Healthcare4} alt="Health Awareness" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            Mental health is equally important. We also conduct counseling sessions and workshops to promote mental well-being,
            especially for students and the elderly. We strive to create a healthy society — physically, mentally, and emotionally.
          </h1>

          <img src={Healthcare5} alt="Helping Patients" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            Your contribution can sponsor life-saving treatments, health education programs, and ensure no one is left behind
            in their fight for a healthier life. Help us build a future where healthcare is not a luxury, but a basic right for all.
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
      </div>
    </>
  );
};

export default Healthcare;
 
