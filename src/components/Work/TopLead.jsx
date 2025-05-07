
import React from "react";
import charity1 from "../../assets/images/charity1.jpg";
import charity2 from "../../assets/images/charity2.jpg";
import charity3 from "../../assets/images/charity3.jpg";
import charity4 from "../../assets/images/charity4.jpg";
import charity5 from "../../assets/images/charity5.jpg";
import charity6 from "../../assets/images/charity6.jpg";
import { FaHandsHelping, FaBookReader, FaClinicMedical } from "react-icons/fa";

const impactStats = [
  {
    icon: <FaHandsHelping className="text-4xl text-red-600 mb-4" />,
    title: "5000+ जरूरतमंदों को भोजन",
    description: "गरीब और भूखे लोगों को मुफ्त भोजन मुहैया कराया गया।",
  },
  {
    icon: <FaBookReader className="text-4xl text-red-600 mb-4" />,
    title: "1200+ बच्चों की शिक्षा",
    description: "स्कूल फीस, किताबें और स्टेशनरी का प्रबंध किया गया।",
  },
  {
    icon: <FaClinicMedical className="text-4xl text-red-600 mb-4" />,
    title: "50+ स्वास्थ्य शिविर",
    description: "गाँवों और कस्बों में मुफ्त जांच और दवाइयों का वितरण।",
  },
];

const galleryImages = [
  { src: charity1, alt: "भोजन वितरण कार्यक्रम", caption: "जरूरतमंदों को खाना बाँटते हुए" },
  { src: charity2, alt: "शिक्षा सहायता", caption: "बच्चों को स्टेशनरी और किताबें देते हुए" },
  { src: charity3, alt: "स्वास्थ्य शिविर", caption: "निःशुल्क मेडिकल जांच" },
  { src: charity4, alt: "सामुदायिक सेवा", caption: "गांवों में जागरूकता अभियान" },
  { src: charity5, alt: "सर्दियों में राहत", caption: "कंबल और गर्म कपड़े बाँटते हुए" },
  { src: charity6, alt: "बच्चों के साथ उत्सव", caption: "मिठाई वितरण और उत्सव का आनंद" },
];

const AboutTrust = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Impact Section */}
      <div className="py-16 bg-gradient-to-b from-white to-red-50 text-center">
        <h2 className="text-4xl font-bold text-red-700 mb-6">हमारा प्रभाव</h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          माँ सिद्धेश्वरी चैरिटेबल ट्रस्ट आपके सहयोग से समाज में बदलाव ला रहा है। जानिए हमने अब तक क्या कुछ किया है।
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {impactStats.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300">
              {item.icon}
              <h3 className="text-xl font-semibold text-red-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16 bg-red-50 text-center px-4">
        <h2 className="text-4xl font-bold text-red-700 mb-6">हमारी दृष्टि और मिशन</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>हमारी दृष्टि:</strong> एक ऐसे समाज का निर्माण करना जहाँ हर व्यक्ति को भोजन, शिक्षा और स्वास्थ्य की मूलभूत सुविधाएँ सुलभ हों।
          </p>
          <p>
            <strong>हमारा मिशन:</strong> जरूरतमंदों की सहायता करना, बच्चों को शिक्षा प्रदान करना, स्वास्थ्य सेवाओं का विस्तार करना, और मानवता के लिए समर्पित रहना।
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="py-16 bg-white text-center px-4">
        <h2 className="text-4xl font-bold text-red-700 mb-10">हमारी झलकियाँ</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg group">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2 text-sm text-gray-600">{image.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
