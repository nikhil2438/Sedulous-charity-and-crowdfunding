import React from "react";
import banner2 from "../../assets/images/banner2.jpg";
import hero from "../../assets/images/hero.jpg";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-extrabold text-orange-700 mb-6 text-center uppercase">
        माँ सिद्धेश्वरी चारित्राबाल ट्रस्ट
      </h1>

      <section className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h2 className="text-3xl font-semibold text-orange-600 mb-4">
            हमारे बारे में
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Maa Siddheshwari Charitable Trust works to advance religion and
            spirituality, including the Indian traditional knowledge system. We
            focus on education and skills beyond caste, creed, language, and
            religion.
          </p>
          <p className="text-lg text-gray-700">
            We also promote Indian culture and educational heritage, running
            projects to encourage the social, economic, cultural, and spiritual
            development of people with a holistic approach.
          </p>
        </div>
        <div>
          <img
            src={banner2}
            alt="Economic Support"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mt-10 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={hero} alt="Trustee" className="rounded-lg shadow-lg" />
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-semibold text-orange-600 mb-4">
            ट्रस्टी का संदेश
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            As a trustee of our temple trust fund, I am honored to serve and
            uphold our sacred mission of preserving our temple’s heritage and
            promoting its values of unity, compassion, and spiritual growth.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our commitment to transparency, accountability, and responsible
            stewardship ensures that every contribution directly supports the
            prosperity and longevity of our temple.
          </p>
          <p className="text-lg text-gray-700">
            With the support of our dedicated community, we strive to safeguard
            our temple’s traditions, maintain its sacred spaces, and expand our
            outreach to enrich the lives of all who seek solace and spiritual
            nourishment within our holy walls.
          </p>
        </div>
      </section>

      <section className="mt-10 max-w-5xl text-left">
        <h2 className="text-3xl font-semibold text-orange-600 mb-4 text-center">
          हमारा नज़रिया
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="text-lg text-gray-700 list-disc pl-6">
            <li className="mb-2">
              Establish and support schools, colleges, research centers, and the
              Gurukul education system to advance Indian culture and knowledge.
            </li>
            <li className="mb-2">
              Organize and conduct worship, homa, religious ceremonies, and
              festivals of all religions.
            </li>
            <li className="mb-2">
              Perform rituals and ceremonies, including weddings, according to
              Vedic traditions.
            </li>
            <li className="mb-2">
              Empower monks and spiritual seekers to spread the wisdom of the
              Vedas and other ancient Indian knowledge.
            </li>
          </ul>
          <ul className="text-lg text-gray-700 list-disc pl-6">
            <li className="mb-2">
              Inspire youth to appreciate art, culture, yoga, and Indian
              heritage.
            </li>
            <li className="mb-2">
              Establish temples and cow shelters (Gaushalas).
            </li>
            <li className="mb-2">
              Feed millions of underprivileged children in India who have the
              enthusiasm to learn but lack resources.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
