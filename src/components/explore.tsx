import { Button } from "./ui/button";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Explore() {
  const images = [
    "Photo Frame.png",
    "Photo Frame (1).png",
    "Photo Frame (2).png",
    "Photo Frame (3).png",
  ];

  const scrollingImages = [...images, ...images];

  return (
    <section className="w-full flex flex-col items-center text-center 
                        pt-12 sm:pt-16 md:pt-20 
                        px-4 sm:px-6 lg:px-8">

      {/* Hero Heading */}
      <h1 className="
        font-abezee
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        xl:text-7xl
        leading-tight
        text-[#002B6B]
      ">
        Study Abroad Made
        <span className="block">Simple</span>
      </h1>

      {/* Scholarship Info */}
      <div
        className={`mt-6 max-w-md sm:max-w-xl md:max-w-2xl ${manrope.className}`}
      >
        <p className="text-[#414D60] text-sm sm:text-base md:text-lg leading-relaxed">
          Scholarships up to ₹85k + Free IELTS/PTE/Duolingo Coaching
        </p>
      </div>

      {/* Explore Button */}
      <div className="mt-8">
        <Button
          className="
            px-8 py-3
            rounded-full
            border border-gray-300
            bg-blue-600
            text-white
            text-sm sm:text-base
            hover:bg-blue-700
            transition-all
          "
        >
          Explore
        </Button>
      </div>

      {/* Horizontal Auto-Scrolling Images */}
      <div className="w-full overflow-hidden mt-12 sm:mt-16">
        <div className="flex gap-4 sm:gap-6 animate-scroll w-max">
          {scrollingImages.map((img, index) => (
            <img
              key={index}
              src={`/images/${img}`}
              alt={`Abroad ${index + 1}`}
              className="
                w-[160px]
                sm:w-[200px]
                md:w-[240px]
                lg:w-[280px]
                aspect-[3/4]
                rounded-2xl
                object-cover
              "
            />
          ))}
        </div>
      </div>

    </section>
  );
}
