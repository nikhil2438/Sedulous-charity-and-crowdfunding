
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../../assets/images/Logo.png";
import "../Pages/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLangOpen(false);
    setGoogleTranslateLanguage(lang);
  };

  const setGoogleTranslateLanguage = (lang) => {
    localStorage.setItem("selectedLanguage", lang);
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 500);
  };

  const modifyTranslateText = () => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll("span").forEach((span) => {
        if (span.textContent.trim().toLowerCase() === "select language") {
          span.textContent = "Language";
        }
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  useEffect(() => {
    
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }


    window.googleTranslateElementInit = () => {
      if (!document.querySelector(".skiptranslate")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
      modifyTranslateText();
    };

  
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    setLanguage(savedLang);
    setTimeout(() => {
      setGoogleTranslateLanguage(savedLang);
    }, 500); 
  }, []);

  return (
    <nav className="bg-white shadow-md z-50 relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="MA SIDISHWARI Logo" className="object-contain h-42 w-42" />
          <img
            src={Logo}
            alt="MA SIDISHWARI Logo"
            className="object-contain h-16 w-16"
          />
        </Link>

        <div className="hidden md:flex space-x-8 font-semibold tracking-wide">
          <Link to="/" className="text-gray-700 hover:text-orange-500 transition">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-500 transition">About Us</Link>
          <Link to="/ourinitiate" className="text-gray-700 hover:text-orange-500 transition">Our Initiate</Link>
          <Link to="/events" className="text-gray-700 hover:text-orange-500 transition">Events</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-orange-500 transition">Gallery</Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold tracking-wide items-center relative">
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            About Us
          </Link>

          {/* Our Initiatives Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 font-semibold hover:text-orange-500 transition"
            >
              <Link
                to="/ourinitiate"
                className="text-orange-700 hover:text-orange-500 transition"
              >
                Our Initiatives
              </Link>
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg z-50 w-56 mt-2">
                <ul className="text-sm text-gray-700 p-2 space-y-1">
                  <li>
                    <Link
                      to="/education"
                      className="block px-4 py-2 hover:text-orange-500"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      🎓 Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/healthcare"
                      className="block px-4 py-2 hover:text-orange-500"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      ❤️ Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/food-nutrition"
                      className="block px-4 py-2 hover:text-orange-500"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      🍲 Food & Nutrition
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/women-empowerment"
                      className="block px-4 py-2 hover:text-orange-500"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      👩 Women Empowerment
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            to="/events"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Events
          </Link>
          <Link
            to="/gallery"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Gallery
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 relative">
          <button
            onClick={() => navigate("/DonationForm")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
          >
            Donate
          </button>
        {/* Donate Button (Desktop Only) */}
        <button
          onClick={() => navigate("/DonationForm")}
          className="hidden md:block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
        >
          Donate
        </button>

          {/* <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              <span>{language === "en" ? "English" : "हिंदी"}</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white border rounded-md shadow-lg z-10">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="w-full text-left px-4 py-2 hover:bg-orange-100"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange("hi")}
                  className="w-full text-left px-4 py-2 hover:bg-orange-100"
                >
                  हिंदी
                </button>
              </div>
            )}
          </div> */}

          <div id="google_translate_element">
            
          </div>
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <Link to="/" className="block px-6 py-3 text-orange-700 hover:bg-orange-100 transition">Home</Link>
          <Link to="/about" className="block px-6 py-3 text-orange-700 hover:bg-orange-100 transition">About Us</Link>
          <Link to="/ourinitiate" className="block px-6 py-3 text-orange-700 hover:bg-orange-100 transition">Our Initiate</Link>
          <Link to="/events" className="block px-6 py-3 text-orange-700 hover:bg-orange-100 transition">Events</Link>
          <Link to="/gallery" className="block px-6 py-3 text-orange-700 hover:bg-orange-100 transition">Gallery</Link>
          <Link to="/DonationForm" className="block px-6 py-3 bg-orange-500 text-white text-center rounded-b-lg">Donate</Link>

          <div className="px-6 py-3 border-t flex justify-between items-center">
            <span className="text-gray-700 font-medium">Language:</span>
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>
          <Link
            to="/"
            className="block px-6 py-3 text-orange-700 hover:text-orange-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 text-orange-700 hover:text-orange-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Mobile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block px-6 py-3 text-orange-700"
            >
              <Link
                to="/ourinitiate"
                className=" text-orange-700 hover:text-orange-500 transition"
              >
                Our Initiatives
              </Link>
            </button>
            {isDropdownOpen && (
              <div className="pl-6 space-y-1">
                <Link
                  to="/education"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🎓 Education
                </Link>
                <Link
                  to="/healthcare"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ❤️ Healthcare
                </Link>
                <Link
                  to="/food-nutrition"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🍲 Food & Nutrition
                </Link>
                <Link
                  to="/women-empowerment"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  👩 Women Empowerment
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/events"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/gallery"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/DonationForm"
            className="block px-6 py-3 bg-orange-500 text-white text-center rounded-b-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Donate
          </Link>
        </div>
      )}

      {/* { <div
        id="google_translate_element"
        style={{ position: "absolute", top: 0, left: 0, opacity: 0, pointerEvents: "none", zIndex: -1 }}
      /> } */}
    </nav>
  );
};

export default Navbar;
