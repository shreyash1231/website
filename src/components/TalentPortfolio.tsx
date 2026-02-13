"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
export default function TalentPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/Frame 1000004851.png",
    "/images/Frame 1000004849.png",
    "/images/Frame 1000004852.png",
  ];

  const totalImages = images.length;

  const handleClick = (direction: "left" | "right") => {
    if (direction === "right") {
      setCurrentIndex((prev) =>
        prev === totalImages - 1 ? prev : prev + 1
      );
    } else {
      setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
    }
  };

  return (
    <section className="w-full flex flex-col items-center gap-12 py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-6">
        
        <h2 className="font-['ABeeZee'] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[120%] text-[#1E242C] text-center md:text-left">
          Top Talent Portfolio Showcase
        </h2>

        <div className="flex items-center gap-4">
          
          {/* Left Arrow */}
          <button
            onClick={() => handleClick("left")}
            disabled={currentIndex === 0}
            className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full 
                       flex items-center justify-center shadow-md 
                       border border-gray-300 bg-white 
                       disabled:opacity-40 disabled:cursor-not-allowed 
                       hover:bg-[#002B6B] transition"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black hover:text-white" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => handleClick("right")}
            disabled={currentIndex === totalImages - 1}
            className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full 
                       flex items-center justify-center shadow-md 
                       bg-[#002B6B] 
                       disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden w-full max-w-[1200px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center px-2 sm:px-4"
            >
              <Image
                src={src}
                alt={`Portfolio ${index + 1}`}
                className="
                  w-full 
                  max-w-[320px] 
                  sm:max-w-[400px] 
                  md:max-w-[500px] 
                  lg:max-w-[461px]
                  h-auto 
                  rounded-[20px] 
                  object-cover 
                  shadow-md
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
