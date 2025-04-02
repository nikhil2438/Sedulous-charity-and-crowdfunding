import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Pages/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Pages/Gallery";
import Events from "./components/Pages/Events";
import Projects from "./components/Pages/Project";
import Register from "./components/LoginRegister/Register";
import Login from "./components/LoginRegister/Login";

import DonationForm from "./components/DonationForm/DonationForm";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/donationform" element={<DonationForm />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
