import React from "react";

const Volunteer = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          Join as a Volunteer
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Become a part of our mission to bring positive change.
        </p>

        
        <div className="bg-orange-100 border-l-4 border-orange-500 text-left p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-orange-700 mb-2">
            🌟 Make a Real Impact
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed">
            Be the change you wish to see in the world. Your time, effort, and kindness
            can bring light to someone's darkest days. Whether you can spare an hour or
            a day, every act of service counts. Let's build a better tomorrow — together.
          </p>
          <p className="mt-4 text-sm text-gray-600 italic">
            *Currently we’re not collecting volunteer registrations online. Follow us on
            social media or reach out directly to get involved!
          </p>
        </div>

        
        
        <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Partner with Us</h3>
          <p className="mt-2 text-lg">
            We welcome collaborations with NGOs and businesses to expand our
            impact.
          </p>
          <a
            href="/partner"
            className="inline-block mt-4 bg-white text-red-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-200 transition"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
 
