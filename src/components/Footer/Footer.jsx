import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-orange text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Dedicated to helping those in need through crowdfunding and
            community support. Your kindness changes lives.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">
            Quick Links
          </h3>
          <ul className="text-gray-400 space-y-3 text-sm">
            {["Home", "About", "Donate", "Fundraisers", "Contact"].map(
              (link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">
            Newsletter
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe for updates on new fundraisers and impact stories.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none w-full"
            />
            <button className="bg-yellow-500 text-gray-900 px-5 py-2 rounded-r font-semibold hover:bg-yellow-400 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebook />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedin />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-gray-400 hover:text-yellow-400 text-2xl transition duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4">
            📧 support@charitytrust.com
          </p>
          <p className="text-gray-400 text-sm">📞 +91 9876543210</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Ma Sidhashweri Charity & Trust. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
