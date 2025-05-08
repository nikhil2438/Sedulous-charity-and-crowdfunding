import React from "react";
import festival1 from "../../assets/images/festival1.png";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const UpcomingEvents = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src={festival1}
            alt="Shobha Yatra"
            className="rounded-xl w-full shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
            शोभायात्रा
          </h2>
          <p className="text-lg text-gray-800 font-medium mb-2">
            April 28 – May 3, 2025
          </p>
          <p className="text-gray-700 leading-relaxed">
            भव्य शोभायात्रा का हिस्सा बनें और हमारी संस्कृति व आध्यात्मिकता का
            अनुभव करें।
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default UpcomingEvents;
