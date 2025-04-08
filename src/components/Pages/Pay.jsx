import React from "react";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import Banner7 from "../../assets/images/banner4.jpg";
import Banner5 from "../../assets/images/banner5.jpg";
import Payment from "../../components/Pages/Payment";

const Pay = () => {
  return (
    <>
      <img src={banner2} alt="Banner" className="" />

      <div className="mt-6 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Your Small Contribution Can Make a Huge Difference! 🌍❤️
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Join hands with us to bring hope and support to those in need. Every
          donation counts and can change a life forever. Let's make the world a
          better place together.
        </p>
        <p className="mt-2 text-gray-500">
          "Happiness doesn’t result from what we get, but from what we give." -
          Ben Carson
        </p>
      </div>
      <>
        <Payment />
      </>
      <div className="flex">
        <div className="h-screen overflow-y-auto hide-scrollbar p-4  w-1/2">
          <img src={banner3} alt="Banner" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed">
            As a trustee of our temple trust fund, I am honored to serve and
            uphold our sacred mission of preserving our temple’s heritage and
            promoting its values of unity, compassion, and spiritual growth. Our
            commitment to transparency, accountability, and responsible
            stewardship ensures that every contribution directly supports the
            prosperity and longevity of our temple. With the support of our
            dedicated community, we strive to safeguard our temple’s traditions,
            maintain its sacred spaces, and expand our outreach to enrich the
            lives of all who seek solace.
          </h1>

          <img src={Banner5} alt="Banner" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed">
            As a trustee of our temple trust fund, I am honored to serve and
            uphold our sacred mission of preserving our temple’s heritage and
            promoting its values of unity, compassion, and spiritual growth. Our
            commitment to transparency, accountability, and responsible
            stewardship ensures that every contribution directly supports the
            prosperity and longevity of our temple. With the support of our
            dedicated community, we strive to safeguard our temple’s traditions,
            maintain its sacred spaces, and expand our outreach to enrich the
            lives of all who seek solace.
          </h1>

          <img src={Banner7} alt="Banner" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed">
            As a trustee of our temple trust fund, I am honored to serve and
            uphold our sacred mission of preserving our temple’s heritage and
            promoting its values of unity, compassion, and spiritual growth. Our
            commitment to transparency, accountability, and responsible
            stewardship ensures that every contribution directly supports the
            prosperity and longevity of our temple. With the support of our
            dedicated community, we strive to safeguard our temple’s traditions,
            maintain its sacred spaces, and expand our outreach to enrich the
            lives of all who seek solace.
          </h1>

          <img src={Banner5} alt="Banner" className="h-auto w-full mt-10" />
          <h1 className="text-left mt-3 text-base leading-relaxed">
            As a trustee of our temple trust fund, I am honored to serve and
            uphold our sacred mission of preserving our temple’s heritage and
            promoting its values of unity, compassion, and spiritual growth. Our
            commitment to transparency, accountability, and responsible
            stewardship ensures that every contribution directly supports the
            prosperity and longevity of our temple. With the support of our
            dedicated community, we strive to safeguard our temple’s traditions,
            maintain its sacred spaces, and expand our outreach to enrich the
            lives of all who seek solace.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Pay;
