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
        <Link to="/">
          <img
            src={Logo}
            alt="MA SIDISHWARI Logo"
            className=" object-contain h-30 w-30"
          />
        </Link>

        <div className="hidden md:flex space-x-8 font-semibold uppercase tracking-wide ">
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-500 transition"
          >
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-orange-500  transition "
          >
          <Link
            to="/about"
            className="text-gray-700 hover:text-orange-500  transition "
          >
            About Us
          </Link>
          <Link
            to="/projects"
            className="text-gray-700 hover:text-orange-500  transition"
          >
          <Link
            to="/projects"
            className="text-gray-700 hover:text-orange-500  transition"
          >
            Projects
          </Link>
          <Link
            to="/Events"
            className="text-gray-700 hover:text-orange-500  transition"
          >
          <Link
            to="/Events"
            className="text-gray-700 hover:text-orange-500  transition"
          >
            Events
          </Link>
          <Link
            to="/gallery"
            className="text-gray-700 hover:text-orange-500  transition"
          >
          <Link
            to="/gallery"
            className="text-gray-700 hover:text-orange-500  transition"
          >
            Gallery
          </Link>
        </div>
        <button
          onClick={() => navigate("/DonationForm")}
          className="hidden md:block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
        >
          Donate
        </button>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t  shadow-lg">
          <Link
            to="/"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100  transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100  transition"
          >
            About Us
          </Link>
          <Link
            to="/projects"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100   transition"
          >
            Projects
          </Link>
          <Link
            to="/events"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100   transition"
          >
            Events
          </Link>
          <Link
            to="/gallery"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100   transition"
          >
            Gallery
          </Link>
          <Link
            to="/DonationForm"
            className="block px-6 py-3  bg-orange-500 text-white text-center  rounded-b-lg"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
