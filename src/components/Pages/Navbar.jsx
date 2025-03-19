import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img
            src={logo}
            alt="MA SIDISHWARI Logo"
            className=" object-contain"
          />
        </Link>

        <div className="hidden md:flex space-x-6 font-semibold">
          <Link to="/" className="text-gray-700 hover:text-orange-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-500">
            About Us
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-orange-500">
            Projects
          </Link>
          <Link to="/media" className="text-gray-700 hover:text-orange-500">
            Media
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-orange-500">
            Gallery
          </Link>
        </div>
        <button
          onClick={() => navigate("/donationForm")}
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
        <div className="md:hidden bg-white border-t">
          <Link
            to="/"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100"
          >
            About Us
          </Link>
          <Link
            to="/projects"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100"
          >
            Projects
          </Link>
          <Link
            to="/media"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100"
          >
            Media
          </Link>
          <Link
            to="/gallery"
            className="block px-6 py-3 text-orange-700 hover:bg-orange-100"
          >
            Gallery
          </Link>
          <Link
            to="/donationForm"
            className="block px-6 py-3  bg-orange-500 text-white text-center"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
