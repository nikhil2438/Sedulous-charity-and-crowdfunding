import React from "react";
import educationImg from "../../assets/images/education.jpg";
import banner7Img from "../../assets/images/banner7.jpg";
import pageImg from "../../assets/images/page.png";
import banner5Img from "../../assets/images/banner5.jpg";
import banner4Img from "../../assets/images/banner4.jpg";
import FoodImg from "../../assets/images/Food.jpg";

const projects = [
  {
    title: "Education for All",
    description:
      "Providing free education and scholarships for underprivileged children.",
    image: educationImg,
    tag: "Education",
  },
  {
    title: "Healthcare Support",
    description: "Free medical camps and hospital assistance for the needy.",
    image: banner7Img,
    tag: "Health",
  },
  {
    title: "Women Empowerment",
    description:
      "Skill development programs to empower women for self-sufficiency.",
    image: pageImg,
    tag: "Women",
  },
  {
    title: "Food & Nutrition",
    description: "Distributing meals and groceries to the homeless and poor.",
    image: banner5Img,
    tag: "Food",
  },
  {
    title: "Food & Nutrition",
    description: "Distributing meals and groceries to the homeless and poor.",
    image: banner4Img,
    tag: "Food",
  },
  {
    title: "Women Empowerment",
    description:
      "Skill development programs to empower women for self-sufficiency.",
    image: FoodImg,
    tag: "Women",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-red-700 mb-12 relative inline-block sm:text-center">
          Our Projects
          <span className="block w-24  mx-auto mt-3 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                  {project.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
