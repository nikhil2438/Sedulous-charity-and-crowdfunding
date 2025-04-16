import React from "react";
import Footer1 from "../../assets/images/Footer1.jpg";
import Logo from "../../assets/images/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white pt-10 pb-4 px-6 md:px-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${Footer1})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 bg-black/40 p-6 rounded-lg">
        {/* Logo & About */}
        <div>
          <div className="mb-4">
            <img src={Logo} alt="Trust Logo" className="w-24 h-24" />
          </div>
          <p className="text-sm leading-relaxed">
            कालातीत ज्ञान द्वारा निर्देशित, हमारा मंदिर विश्वास के एक बीकन के
            रूप में खड़ा है, कनेक्शन को बढ़ावा देता है, और हमारे समुदाय के भीतर
            विश्वास का पोषण करता है।
          </p>
          <div className="flex gap-3 mt-4">
            <FaFacebookF className="bg-white text-blue-600 p-2 w-8 h-8 rounded-full" />
            <FaTwitter className="bg-white text-blue-400 p-2 w-8 h-8 rounded-full" />
            <FaYoutube className="bg-white text-red-600 p-2 w-8 h-8 rounded-full" />
            <FaLinkedinIn className="bg-white text-blue-700 p-2 w-8 h-8 rounded-full" />
            <FaInstagram className="bg-white text-pink-500 p-2 w-8 h-8 rounded-full" />
            <FaPinterestP className="bg-white text-red-500 p-2 w-8 h-8 rounded-full" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Events</li>
            <li>Our Initiative</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Policy & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Privacy Policy</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              Subscribe to our Newsletter
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="name@email.com"
                className="px-4 py-3 rounded-l-md bg-white text-black w-full"
              />
              <button className="bg-orange-600 px-4 rounded-r-md text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            माँ सिद्धेश्वरी चैरिटेबल ट्रस्ट (भारतीय ट्रस्ट अधिनियम, 1882 द्वारा
            दिल्ली सरकार के तहत पंजीकृत)
          </p>
          <p className="text-sm mt-2">
            <strong>Reg No:</strong> 1592
          </p>
          <p className="text-sm">
            <strong>PAN:</strong> AAITM5890N
          </p>
          <p className="text-sm">
            <strong>TAN:</strong> DELM47247E
          </p>
          <p className="text-sm mt-2">
            बादली शहर, आस्था अस्पताल के पास, <br />
            दिल्ली, भारत, 110042
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-4 flex flex-col md:flex-row items-center justify-between text-xs">
        <p>©2025 Maa Siddheshwari Trust. All Rights Reserved.</p>
        <p>
          Developed & Designed By{" "}
          <span className="font-semibold text-green-200">SearchingYug</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
