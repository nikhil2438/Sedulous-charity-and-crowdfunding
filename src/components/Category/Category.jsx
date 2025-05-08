import React from "react";
// import Footer1 from "../../assets/images/Footer1.jpg";

const AboutSection = () => {
  return (
    <section className="py-12 ">
      <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden max-w-6xl mx-auto">
      
        {/* <img
          src={Footer1}
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100 transition duration-800 transform hover:scale-105"
        /> */}

        
        <div className="relative z-10 p-8 sm:p-12 text-center text-red-500">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 ">
            हमारे बारे में
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed font-medium text-red-700 ">
            माँ सिद्धेश्वरी चैरिटेबल ट्रस्ट भारतीय पारंपरिक ज्ञान प्रणाली सहित धर्म और
            आध्यात्मिकता को आगे बढ़ाने पर काम करता है; हम जाति, पंथ, भाषा और धर्म से परे शिक्षा और
            कौशल पर ध्यान केंद्रित करते हैं।
            <br />
            <br />
            हम भारतीय संस्कृति और शैक्षिक विरासत को भी बढ़ावा देते हैं और समग्र दृष्टिकोण के साथ
            लोगों के सामाजिक, आर्थिक, सांस्कृतिक और आध्यात्मिक विकास को प्रोत्साहित करने के लिए
            परियोजनाएं चलाते हैं।
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
