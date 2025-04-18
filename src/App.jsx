import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Pages/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Pages/Gallery";
import Events from "./components/Pages/Events";
import Ourinitiate from "./components/Pages/Ourinitiate";
import Payment from "./components/Payment/Payment";
import Rtgs from "./components/Payment/Rtgs";
import Vision from "./components/DonationForm/Vision";
import DonationForm from "./components/DonationForm/DonationForm";
import ContactAndPartner from "./components/Work/Partnerpage";
import FundRaise from "./components/FundRaise/FundRaise";
function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 

        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ourinitiate" element={<Ourinitiate />} />
        <Route path="/donationform" element={<DonationForm />} />
        <Route path="rtgs" element={<Rtgs />} />
<Route path = "/vision" element= {<Vision/>}/>
        <Route path="/payment" element={<Payment />} />
        <Route path="/partner" element={<ContactAndPartner />} />
        <Route path = "/fundraiser" element ={<FundRaise/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

