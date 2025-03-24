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
          
           <div className="bg-orange-50 p-6 mt-6 rounded-lg shadow-lg border-l-4 border-orange-600">
            <h2 className="text-3xl font-semibold text-orange-700 mb-4">
              🔱 हमारी संस्था का उद्देश्य 🔱
            </h2>
            <ul className="list-disc space-y-4 text-lg text-gray-800 pl-6">
              <li>
                <span className="text-orange-700 font-semibold">📚 शैक्षणिक संस्थानों की स्थापना:</span> 
                स्कूलों, कॉलेजों, पाठशालाओं, अनुसंधान केंद्रों और गुरुकुल शिक्षा प्रणाली का निर्माण और समर्थन।
              </li>
              <li>
                <span className="text-orange-700 font-semibold">🛕 धार्मिक अनुष्ठानों का आयोजन:</span> 
                सभी धर्मों की पूजा, हवन, धार्मिक संस्कारों और त्योहारों का संचालन।
              </li>
              <li>
                <span className="text-orange-700 font-semibold">💍 वैदिक परंपरा अनुसार विवाह:</span> 
                विवाह सहित सभी शुभ अनुष्ठान और धार्मिक समारोह वैदिक रीति-रिवाजों के अनुसार संपन्न करना।
              </li>
              <li>
                <span className="text-orange-700 font-semibold">🧘 आध्यात्मिक ज्ञान का प्रसार:</span> 
                स्वामियों और ब्रह्मचारियों को वेदों और प्राचीन भारतीय ज्ञान प्रणाली के प्रचार में सक्षम बनाना।
              </li>
              <li>
                <span className="text-orange-700 font-semibold">🎭 भारतीय कला और संस्कृति:</span> 
                युवाओं में भारतीय कला, संस्कृति, योग और हमारी ज्ञान परंपरा के प्रति प्रेम और जागरूकता बढ़ाना।
              </li>
              <li>
                <span className="text-orange-700 font-semibold">🐄 मंदिर और गौशाला की स्थापना:</span> 
                आध्यात्मिक साधना और गो-सेवा को बढ़ावा देना।
              </li>
              <li>
                <span className="text-orange-700 font-semibold">🍛 गरीब बच्चों के लिए भोजन:</span> 
                उन लाखों बच्चों को भोजन उपलब्ध कराना, जिनमें सीखने की लालसा तो है लेकिन संसाधनों की कमी है।
              </li>
            </ul>
          </div>
          
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
