import React from "react";
import banner2 from "../../assets/images/banner2.jpg";
import festival1 from "../../assets/images/festival1.png";
import festival2 from "../../assets/images/festival2.png";
import Video from "../../components/Pages/Video";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Event = () => {
  return (
    <>
      {/* Banner */}
      <div className="w-full">
        <img
          src={banner2}
          alt="Event Banner"
          className="w-full h-auto object-cover max-h-[500px]"
        />
      </div>

      {/* Main Section */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-10">
        {/* शोभायात्रा Section */}
        <motion.div
          className="flex flex-col-reverse sm:flex-row items-center mb-16 w-full max-w-6xl rounded-3xl  p-6 sm:p-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="sm:w-1/2 text-center sm:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">
              शोभायात्रा
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-4">
              📅 April 28 to May 3, 2025
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              भव्य शोभायात्रा का हिस्सा बनें और हमारी संस्कृति व आध्यात्मिकता का
              अनुभव करें। मनोहारी झांकियां, वाद्य यंत्रों की मधुर ध्वनि और
              श्रद्धालुओं का जोश इसे खास बनाते हैं।
            </p>
          </div>
          <div className="sm:w-1/2 flex justify-center">
            <img
              src={festival1}
              alt="Shobha Yatra"
              className="w-full max-w-sm rounded-xl shadow-md"
            />
          </div>
        </motion.div>

        {/* लभुआनी महोत्सव Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center mb-16 w-full max-w-6xl rounded-3xl "
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="sm:w-1/2 flex justify-center">
            <img
              src={festival2}
              alt="Labhuani Mahotsav"
              className="w-full max-w-sm rounded-xl shadow-md"
            />
          </div>
          <div className="sm:w-1/2 text-center sm:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">
              लभुआनी महोत्सव
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-4">
              📅 April 27, 2025
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              यह महोत्सव परंपरा, कला और संस्कृति का संगम है। लोक नृत्य, संगीत और
              हस्तशिल्प यहाँ की विशेषता हैं। यह नई पीढ़ी को अपनी जड़ों से जोड़ने
              का अवसर है।
            </p>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="w-full max-w-6xl mt-4 mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Video />
        </motion.div>
      </div>
    </>
  );
};

export default Event;
