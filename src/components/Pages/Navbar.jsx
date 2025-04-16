import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={Logo}
            alt="MA SIDISHWARI Logo"
            className="object-contain h-16 w-16"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold tracking-wide items-center">
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

          {/* Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 font-semibold hover:text-orange-500 transition">
              Our Initiatives
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg z-50 w-56 mt-2">
              <ul className="text-sm text-gray-700 p-2 space-y-1">
                <li>
                  <Link
                    to="/education"
                    className="block px-4 py-2 hover:text-orange-500"
                  >
                    🎓 Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/healthcare"
                    className="block px-4 py-2 hover:text-orange-500"
                  >
                    ❤️ Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    to="/food-nutrition"
                    className="block px-4 py-2 hover:text-orange-500"
                  >
                    🍲 Food & Nutrition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/women-empowerment"
                    className="block px-4 py-2 hover:text-orange-500"
                  >
                    👩 Women Empowerment
                  </Link>
                </li>
              </ul>
            </div>
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

        {/* Desktop Donate Button */}
        <button
          onClick={() => navigate("/DonationForm")}
          className="hidden md:block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
        >
          Donate
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <Link
            to="/"
            className="block px-6 py-3 text-orange-700 hover:text-orange-500 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 text-orange-700 hover:text-orange-500 transition"
          >
            About Us
          </Link>

          {/* Our Initiatives Mobile Dropdown */}
          <div className="">
            <p className="block px-6 py-3 text-orange-700 hover:text-orange-500 transition">
              Our Initiatives
            </p>
            <div className="pl-6 space-y-1">
              <Link
                to="/education"
                className="block py-2 text-sm text-gray-700 hover:text-orange-500"
              >
                🎓 Education
              </Link>
              <Link
                to="/healthcare"
                className="block py-2 text-sm text-gray-700 hover:text-orange-500"
              >
                ❤️ Healthcare
              </Link>
              <Link
                to="/food-nutrition"
                className="block py-2 text-sm text-gray-700 hover:text-orange-500"
              >
                🍲 Food & Nutrition
              </Link>
              <Link
                to="/women-empowerment"
                className="block py-2 text-sm text-gray-700 hover:text-orange-500"
              >
                👩 Women Empowerment
              </Link>
            </div>
          </div>

          <Link
            to="/events"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100 transition"
          >
            Events
          </Link>
          <Link
            to="/gallery"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100 transition"
          >
            Gallery
          </Link>
          <Link
            to="/DonationForm"
            className="block px-6 py-3 bg-orange-500 text-white text-center rounded-b-lg"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
