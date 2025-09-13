"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TalentProtfolio() {
  const [activeArrow, setActiveArrow] = useState<"left" | "right" | null>(null);
  const [offset, setOffset] = useState(0);

  const imageWidth = 461 + 32; // width + gap (gap-8 = 2rem = 32px)
  const totalImages = 3;

  const handleClick = (direction: "left" | "right") => {
    setActiveArrow(direction);

    if (direction === "right") {
      setOffset((prev) => Math.max(prev - imageWidth, -(imageWidth * (totalImages - 1))));
    } else {
      setOffset((prev) => Math.min(prev + imageWidth, 0));
    }

    setTimeout(() => setActiveArrow(null), 300);
  };

  return (
    <div className="flex flex-col items-center w-full gap-12">
      {/* Top Section: Heading + Arrows */}
      <div className="flex items-center justify-center gap-6 w-full">
        <span className="font-['ABeeZee'] text-[56px] leading-[120%] text-[#1E242C] text-center mr-100">
          Top Talent portfolio Showcase
        </span>

        {/* Left Arrow */}
        <div
          onClick={() => handleClick("left")}
          className={`w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-md cursor-pointer border transition-colors duration-300 ${
            activeArrow === "left" ? "bg-[#002B6B] border-[#002B6B]" : "bg-white border-gray-300"
          }`}
        >
          <ArrowLeft
            className={`w-6 h-6 transition-colors duration-300 ${
              activeArrow === "left" ? "text-white" : "text-black"
            }`}
          />
        </div>

        {/* Right Arrow */}
        <div
          onClick={() => handleClick("right")}
          className={`w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-md cursor-pointer transition-colors duration-300 ${
            activeArrow === "right" ? "bg-[#002B6B]" : "bg-[#002B6B]"
          }`}
        >
          <ArrowRight
            className={`w-6 h-6 transition-colors duration-300 ${
              activeArrow === "right" ? "text-white" : "text-white"
            }`}
          />
        </div>
      </div>

      {/* Bottom Section: Horizontal Sliding Images */}
      <div className="overflow-hidden w-full flex justify-center">
        <div
          className="flex gap-8 transition-transform duration-700"
          style={{ transform: `translateX(${offset}px)` }}
        >
          <img
            src="/images/Frame 1000004851.png"
            alt="Portfolio 1"
            className="w-[461px] h-[603px] rounded-[20px] object-cover shadow-md"
          />
          <img
            src="/images/Frame 1000004849.png"
            alt="Portfolio 2"
            className="w-[461px] h-[603px] rounded-[20px] object-cover shadow-md"
          />
          <img
            src="/images/Frame 1000004852.png"
            alt="Portfolio 3"
            className="w-[461px] h-[603px] rounded-[20px] object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
