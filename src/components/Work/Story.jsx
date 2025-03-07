import React from "react";
import hero from "../../assets/images/hero.jpg";

const successStories = [
  {
    name: "Amit Sharma",
    story:
      "Amit, a cancer survivor, received timely financial help for his treatment. Now, he is leading a healthy life and helping others in need.",
    image: hero,
  },
  {
    name: "Sita Devi",
    story:
      "Thanks to generous donors, Sita Devi was able to afford a life-saving surgery. Her family is forever grateful for the support.",
    image: hero,
  },
  {
    name: "NGO Helping Hands",
    story:
      "With crowdfunding, our NGO was able to provide education and meals to over 500 underprivileged children.",
    image: hero,
  },
];

const testimonials = [
  {
    quote:
      "This platform made it easy to support a cause that truly matters. Seeing the impact firsthand was heartwarming!",
    name: "Rahul Mehta",
  },
  {
    quote:
      "I'm grateful for the donors who made my surgery possible. This platform changed my life!",
    name: "Priya Sen",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
          Success Stories & Testimonials
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Your support changes lives. Read the stories of those who benefited
          from your generosity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{story.name}</h3>
              <p className="text-gray-600 mt-2">{story.story}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white py-8 px-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800">
            What Our Donors Say
          </h3>
          <div className="mt-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mb-6">
                <p className="text-lg italic text-gray-700">
                  "{testimonial.quote}"
                </p>
                <h4 className="text-red-600 font-semibold mt-2">
                  - {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
