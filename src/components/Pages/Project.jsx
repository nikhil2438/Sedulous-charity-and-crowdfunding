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
  },
  {
    title: "Healthcare Support",
    description: "Free medical camps and hospital assistance for the needy.",
    image: banner7Img,
  },
  {
    title: "Women Empowerment",
    description:
      "Skill development programs to empower women for self-sufficiency.",
    image: pageImg,
  },
  {
    title: "Food & Nutrition",
    description: "Distributing meals and groceries to the homeless and poor.",
    image: banner5Img,
  },

  {
    title: "Food & Nutrition",
    description: "Distributing meals and groceries to the homeless and poor.",
    image: banner4Img,
  },

  {
    title: "Women Empowerment",
    description:
      "Skill development programs to empower women for self-sufficiency.",
    image: FoodImg,
  },
];

export default function Projects() {
  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-800">
        Our Projects
        <span
          className="block w-24 h-1 bg-gradient-to-r from-red-500 to-
        -600 mx-auto mt-2 rounded-full"
        ></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
