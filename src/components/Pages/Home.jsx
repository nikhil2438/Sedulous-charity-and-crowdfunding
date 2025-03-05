import React from "react";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <h1 className="text-center text-3xl mt-5">Welcome to Our Charity</h1>
      <p className="text-center text-lg mt-2">
        Together, we can make a difference.
      </p>
    </div>
  );
};

export default Home;
