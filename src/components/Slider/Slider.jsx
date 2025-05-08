import React, { useState, useEffect } from "react";
import page from "../../assets/images/page.png";

import temple1 from "../../assets/images/temple1.jpg";
import defg from "../../assets/images/defg.jpg";
import puja4 from "../../assets/images/puja4.jpg";
import charity5 from "../../assets/images/charity5.jpg";
import puja7 from "../../assets/images/puja7.jpg";
import poltics11 from "../../assets/images/poltics11.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [page, temple1, defg, puja4, charity5, puja7 , poltics11];

  console.log("Images:", images);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Welcome to Our Charity
              </h2>
              <p className="text-lg sm:text-xl mb-6">
                Making a difference, one step at a time.
              </p>
              <div className="space-x-4">
                <Link to ="/vision">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition">
                  Read More
                </button>
                </Link>
                <Link to="/donationForm">
                  <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-800 transition">
                    Donate Now
                  </button>
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        ❯
      </button>

      <div className="absolute bottom-5 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
