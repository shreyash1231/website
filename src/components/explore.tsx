import { Button } from "./ui/button";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Explore() {
  // Array of image file names (from public/images/)
  const images = [
    "Photo Frame.png",
    "Photo Frame (1).png",
    "Photo Frame (2).png",
    "Photo Frame (3).png",
  ];

  // Duplicate array for seamless scrolling
  const scrollingImages = [...images, ...images];

  return (
    <div className="w-full flex flex-col items-center text-center pt-12 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <span className="font-abezee text-4xl md:text-5xl lg:text-[72px] font-normal leading-[120%] text-[#002B6B]">
        Study Abroad Made
      </span>
      <span className="font-abezee text-4xl md:text-5xl lg:text-[72px] font-normal leading-[120%] text-[#002B6B]">
        Simple
      </span>

      {/* Scholarship Info */}
      <div
        className={`w-full max-w-[430px] h-auto flex flex-col justify-center items-center text-center mt-6 ${manrope.className}`}
      >
        <span className="text-[#414D60] text-[14px] md:text-[16px] leading-[150%]">
          Scholarships up to ₹85k + Free IELTS/PTE/Duolingo
        </span>
        <span className="text-[#414D60] text-[14px] md:text-[16px] leading-[150%]">
          Coaching
        </span>
      </div>

      {/* Explore Button */}
      <div className="mt-8">
        <Button
          className="flex items-center justify-center 
                     w-[155px] md:w-[180px] h-[56px] 
                     px-6 py-4 
                     gap-2 
                     rounded-full 
                     border border-gray-300 
                     bg-blue-600 text-white text-sm md:text-base"
        >
          Explore
        </Button>
      </div>

      {/* Horizontal Auto-Scrolling Images */}
      <div className="w-full overflow-hidden mt-12">
        <div className="flex gap-6 justify-center animate-scroll">
          {scrollingImages.map((img, index) => (
            <img
              key={index}
              src={`/images/${img}`}
              alt={`Abroad ${index + 1}`}
              className="w-[200px] sm:w-[240px] md:w-[288px] h-[238px] sm:h-[288px] md:h-[338px] rounded-[20px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
