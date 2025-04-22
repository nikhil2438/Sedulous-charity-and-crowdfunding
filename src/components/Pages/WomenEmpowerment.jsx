import React from "react";
import banner7 from "../../assets/images/banner7.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import Healthcare3 from "../../assets/images/Healthcare3.jpg";
import Healthcare4 from "../../assets/images/Healthcare4.jpg";
import Healthcare5 from "../../assets/images/Healthcare5.jpg";
import DonationForm from "../DonationForm/DonationForm";

const WomenEmpowerment = () => {
  return (
    <>
      <img
        src={banner3}
        alt="Women Empowerment Banner"
        className="mx-auto w-full h-[500px] object-cover rounded-lg shadow-md"
      />
      <div className="mt-6 text-center px-6 sm:px-8">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Empower Her. Empower Humanity. 💪🌸
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl">
          Support women in unlocking their full potential through skill
          development, education, and self-reliance programs. Your contribution
          helps build a future rooted in equality and opportunity.
        </p>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          “There is no limit to what we, as women, can accomplish.” – Michelle Obama
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 h-[500px] md:h-screen overflow-y-auto hide-scrollbar px-4 sm:px-10">
          <img src={banner7} alt="Women Training" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            We organize skill development programs that train women in tailoring,
            digital literacy, handicrafts, and entrepreneurship to help them
            become financially independent.
          </h1>

          <img src={Healthcare3} alt="Workshops" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            Awareness campaigns and workshops on rights, healthcare, and financial
            literacy empower women to take control of their lives and decisions.
          </h1>

          <img src={Healthcare4} alt="Support Circle" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            Our community groups provide a safe space for women to support each
            other, share experiences, and inspire change at the grassroots level.
          </h1>

          <img src={Healthcare5} alt="Success Stories" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed md:text-lg">
            Behind every empowered woman is a community that believed in her
            strength. Help us build that community by funding education,
            self-employment tools, and wellness programs.
          </h1>
        </div>

        <div className="bg-orange-500 px-4 sm:px-10 md:px-14 mt-20 mb-2 flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md">
            <DonationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default WomenEmpowerment;
