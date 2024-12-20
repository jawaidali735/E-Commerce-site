"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {

  const images = [
    "/images/Apple.jpg",
    "/images/WATCH.jpg",
    "/images/case.png",
    "/images/Apple.jpg",
    "/images/WATCH.jpg",
    "/images/case.png",
  ];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <section className="relative bg-[#f5f5f5] text-center h-screen flex items-center justify-center overflow-hidden px-6 sm:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
  
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <h1 className="text-3xl mt-20 lg:mt-0  sm:text-4xl lg:text-5xl font-bold text-[#333]">
              Welcome to Our Store
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#555]">
              Explore the best deals on fashion, electronics, and more.
            </p>
            <Link href="/shop">
              <motion.button
                className="mt-6 px-6 py-2 bg-yellow-500 text-white font-semibold text-lg rounded-md hover:bg-yellow-600 duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>
            </Link>
          </motion.div>

   
          <div className="w-full  md:w-1/2 relative overflow-hidden h-72 md:h-96">
            <AnimatePresence>
          
              <motion.div
                key={currentImageIndex} 
                className="relative w-full h-full flex-shrink-0 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 200 }} 
                animate={{
                  opacity: 1,
                  x: 0, 
                }}
                exit={{
                  opacity: 0,
                  x: 200, 
                }}
                transition={{
                  duration: 1.5, 
                }}
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`Featured Product ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
