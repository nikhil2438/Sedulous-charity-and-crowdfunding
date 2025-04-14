import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";


import abc from "../../assets/images/abc.jpg";
import abc1 from "../../assets/images/abc1.jpg";
import abc2 from "../../assets/images/abc2.jpg";
import pop1 from "../../assets/images/pop1.jpg";
import pop2 from "../../assets/images/pop2.jpg";
import pop3 from "../../assets/images/pop3.jpg";
import pop4 from "../../assets/images/pop4.jpg";
import pop5 from "../../assets/images/pop5.jpg";
import pop6 from "../../assets/images/pop6.jpg";

const images = [
  { src: abc, title: "सत्य प्रकाश सिंह ने मुलाकात की, परम पूज्य स्वामी चिदानन्द सरस्वती जी।" },
  { src: abc1, title: "सत्य प्रकाश सिंह ने मुलाकात की, स्वामी रामदेव बाबा" },
  { src: abc2, title: "सत्य प्रकाश सिंह ने मुलाकात की, पद्मविभूषण स्वामी रामभद्राचार्य जी महाराज" },
  { src: pop1, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्रीमती द्रौपदी मुर्मू, भारत के माननीय राष्ट्रपति" },
  { src: pop2, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्री रामनाथ कोविंद, भारत के पूर्व राष्ट्रपति" },
  { src: pop3, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्री राजनाथ सिंह, माननीय रक्षा मंत्री, भारत सरकार" },
  { src: pop4, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्री रघुवर दास, ओडिशा के माननीय गवर्नर" },
  { src: pop5, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्री हेमन्त सोरेन, झारखंड के माननीय मुख्यमंत्री" },
  { src: pop6, title: "सत्य प्रकाश सिंह ने मुलाकात की, श्री योगी आदित्यनाथ, उत्तर प्रदेश के माननीय मुख्यमंत्री" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    if (selectedImage) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSelectedImage(images[(currentIndex + 1) % images.length]); 
      }, 3000); 

      return () => clearInterval(interval);
    }
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-orange-700 mb-6">
        Temple Gallery
      </h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedImage(image);
              setCurrentIndex(index);
            }}
            className="cursor-pointer"
          >
            <div className="shadow-lg rounded-xl overflow-hidden bg-white">
              <img src={image.src} alt={image.title} className="w-full h-56 object-contain" />
              <div className="text-center bg-orange-200 p-3">
                <p className="font-semibold text-orange-800 text-sm md:text-base">{image.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      
      <Dialog.Root open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <Dialog.Content className="bg-white p-4 rounded-lg shadow-xl max-w-3xl w-full relative">
              <Dialog.Title className="text-lg font-bold text-center text-orange-700">
                {selectedImage?.title}
              </Dialog.Title>
              <Dialog.Description className="text-gray-600 text-center mb-4 text-sm md:text-base">
                Click outside or press Esc to close
              </Dialog.Description>

              
              <motion.img
                key={selectedImage?.src}
                src={selectedImage?.src}
                alt="Full View"
                className="max-w-full max-h-[80vh] rounded-lg mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              />

              
              <div className="flex justify-between mt-4 space-x-2">
                <button
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm md:text-base flex-1"
                  onClick={() => {
                    const prevIndex = (currentIndex - 1 + images.length) % images.length;
                    setCurrentIndex(prevIndex);
                    setSelectedImage(images[prevIndex]);
                  }}
                >
                  Previous
                </button>

                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md text-sm md:text-base flex-1"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </button>

                <button
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm md:text-base flex-1"
                  onClick={() => {
                    const nextIndex = (currentIndex + 1) % images.length;
                    setCurrentIndex(nextIndex);
                    setSelectedImage(images[nextIndex]);
                  }}
                >
                  Next
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Gallery;
