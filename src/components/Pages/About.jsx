import React from "react";
import templeImage from "../../assets/images/temple.jpg";
import { FaBookOpen, FaPray, FaRing, FaYinYang } from "react-icons/fa";
import { GiCow } from "react-icons/gi";

const About = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${templeImage})` }}
    >
      <div className="absolute inset-0 bg-orange-800 bg-opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-orange-400 drop-shadow-lg mb-8 sm:mb-12">
          माँ सिद्धेश्वरी चैरिटी ट्रस्ट
        </h1>

        {/* हमारे बारे में */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-10 shadow-2xl border border-white/30">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-300 mb-4">
            हमारे बारे में
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-white">
            Maa Siddheshwari Charitable Trust works to promote Indian
            spirituality and education, crossing all boundaries of caste and
            creed. We also protect and nurture Indian cultural and educational
            values.
          </p>
          <p className="text-base sm:text-lg mt-4 text-white">
            We run holistic projects focusing on spiritual, social, and economic
            growth for all.
          </p>
        </div>

        {/* उद्देश्य */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-10 shadow-2xl border border-white/30">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-300 mb-6 text-center">
            🔱 हमारी संस्था का उद्देश्य 🔱
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-white text-base sm:text-lg">
            <div className="space-y-4">
              <p>
                <FaBookOpen className="inline text-red-400 mr-2" />
                <span className="font-bold">शिक्षा:</span> स्कूल, कॉलेज, गुरुकुल
                की स्थापना।
              </p>
              <p>
                <FaPray className="inline text-red-400 mr-2" />
                <span className="font-bold">धार्मिक अनुष्ठान:</span> पूजा, हवन
                एवं धार्मिक आयोजन।
              </p>
              <p>
                <FaRing className="inline text-red-400 mr-2" />
                <span className="font-bold">वैदिक विवाह:</span> शुभ अनुष्ठानों
                का आयोजन।
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <FaYinYang className="inline text-red-400 mr-2" />
                <span className="font-bold">भारतीय संस्कृति:</span> योग, कला एवं
                परंपरा का प्रचार।
              </p>
              <p>
                <GiCow className="inline text-red-400 mr-2" />
                <span className="font-bold">गौ सेवा:</span> गौशालाओं की स्थापना
                एवं देखरेख।
              </p>
            </div>
          </div>
        </div>

        {/* ट्रस्टी का संदेश */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-10 shadow-2xl border border-white/30">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-300 mb-4">
            ट्रस्टी का संदेश
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-white">
            As a trustee, I’m honored to protect our temple’s values — unity,
            compassion, and growth. We remain transparent, accountable, and
            committed to serving our community.
          </p>
          <p className="text-base sm:text-lg mt-4 text-white">
            Every contribution strengthens our legacy, supports sacred spaces,
            and nurtures spiritual development.
          </p>
        </div>

        {/* हमारा नज़रिया */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/30">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-300 mb-6 text-center">
            🌼 हमारा नज़रिया 🌼
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white text-base sm:text-lg">
            <ul className="space-y-3 list-disc list-inside">
              <li>Support Gurukuls, schools, and cultural research centers.</li>
              <li>
                Organize worship, rituals, and festivals of all religions.
              </li>
              <li>Perform Vedic marriage and rituals with tradition.</li>
              <li>Empower saints and spread ancient knowledge.</li>
            </ul>
            <ul className="space-y-3 list-disc list-inside">
              <li>Promote yoga, arts, and Indian values among youth.</li>
              <li>Establish temples and Gaushalas (cow shelters).</li>
              <li>Feed underprivileged children passionate about learning.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
