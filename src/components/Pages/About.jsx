import React from "react";
import templeImage from "../../assets/images/temple.jpg"; 

const About = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${templeImage})` }}
    >
      
      <div className="absolute inset-0  bg-opacity-50"></div>

      <div className="relative z-10 text-center max-w-5xl p-6 md:p-12">
      
        <h1 className="text-5xl font-extrabold text-white mb-6 uppercase drop-shadow-lg">
          माँ सिद्धेश्वरी चारित्राबाल ट्रस्ट
        </h1>

        
        <section className="bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-xl border border-white/30 mb-8">
          <h2 className="text-3xl font-semibold text-orange-400 mb-4">
            हमारे बारे में
          </h2>
          <p className="text-lg text-black-200 leading-relaxed">
            Maa Siddheshwari Charitable Trust works to advance religion and
            spirituality, including the Indian traditional knowledge system. We
            focus on education and skills beyond caste, creed, language, and
            religion.
          </p>
          <p className="text-lg text-black-200 mt-4">
            We also promote Indian culture and educational heritage, running
            projects to encourage the social, economic, cultural, and spiritual
            development of people with a holistic approach.
          </p>
        </section>

        
        <section className="bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-xl border border-white/30 mb-8">
          <h2 className="text-3xl font-semibold text-orange-400 mb-4">
            🔱 हमारी संस्था का उद्देश्य 🔱
          </h2>
          <ul className="list-disc text-lg text-black-200 pl-6 space-y-3">
            <li>
              <span className="text-red-500 font-semibold">📚 शिक्षा:</span> 
              स्कूलों, कॉलेजों और गुरुकुलों की स्थापना।
            </li>
            <li>
              <span className="text-red-500 font-semibold">🛕 धार्मिक अनुष्ठान:</span> 
              पूजा-पाठ, हवन एवं धार्मिक आयोजन।
            </li>
            <li>
              <span className="text-red-500 font-semibold">💍 वैदिक विवाह:</span> 
              सभी शुभ अनुष्ठानों का वैदिक रीति से आयोजन।
            </li>
            <li>
              <span className="text-red-500 font-semibold">🎭 भारतीय संस्कृति:</span> 
              योग, कला एवं परंपरा का प्रचार-प्रसार।
            </li>
            <li>
              <span className="text-red-500 font-semibold">🐄 गौ सेवा:</span> 
              गौशालाओं की स्थापना एवं देखरेख।
            </li>
          </ul>
        </section>

        
        <section className="bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-xl border border-white/30 mb-8">
          <h2 className="text-3xl font-semibold text-orange-400 mb-4">
            ट्रस्टी का संदेश
          </h2>
          <p className="text-lg text-black-200 leading-relaxed">
            As a trustee of our temple trust fund, I am honored to serve and
            uphold our sacred mission of preserving our temple’s heritage and
            promoting its values of unity, compassion, and spiritual growth.
          </p>
          <p className="text-lg text-black-200 mt-4">
            Our commitment to transparency, accountability, and responsible
            stewardship ensures that every contribution directly supports the
            prosperity and longevity of our temple.
          </p>
          <p className="text-lg text-black-200">
            With the support of our dedicated community, we strive to safeguard
            our temple’s traditions, maintain its sacred spaces, and expand our
            outreach to enrich the lives of all who seek solace and spiritual
            nourishment within our holy walls.
          </p>
        </section>

        
        <section className="bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-xl border border-white/30">
          <h2 className="text-3xl font-semibold text-orange-400 mb-4 text-center">
            हमारा नज़रिया
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="text-lg text-black-200 list-disc pl-6">
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
            <ul className="text-lg text-black-200 list-disc pl-6">
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
    </div>
  );
};

export default About;
 
