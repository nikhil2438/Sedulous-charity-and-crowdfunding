import React from "react";

const categories = [
  { name: "Emergency", icon: "🚑" },
  { name: "Child Health", icon: "👶" },
  { name: "Cancer", icon: "🎗️" },
  { name: "NGO Support", icon: "🤝" },
  { name: "Hospital Aid", icon: "🏥" },
  { name: " Organ Transplant", icon: "💉" },
  { name: "Education", icon: "📚" },
  { name: "Personal Cause", icon: "💖" },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 relative inline-block ">
          Our Charity Categories
          <span className="absolute left-1/2 -bottom-2 w-24 md:w-32 h-1 bg-gradient-to-r from-red-500 to-orange-400 transform -translate-x-1/2 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full h-44 sm:h-48 bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-xl shadow-xl p-4 sm:p-6  transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="text-3xl sm:text-4xl  transition-transform duration-300 hover:scale-140">
                {category.icon}
              </span>
              <h3 className="mt-2 text-sm sm:text-lg font-semibold">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
