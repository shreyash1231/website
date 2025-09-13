import { Button } from "@/components/ui/button";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full max-w-[1450px] mx-auto 
                    px-6 sm:px-10 py-4">
      {/* Left Logo */}
      <div className="flex items-center justify-center">
        <span className="text-xl font-semibold">
          <span className="text-blue-600">English</span>
          <span className="text-orange-500">Review</span>
        </span>
      </div>

      {/* Middle Nav Links */}
      <nav className={`hidden md:flex gap-8 items-center text-[#1E242C] ${manrope.className}`}>
        <span className="cursor-pointer hover:text-blue-600">Programs</span>
        <span className="cursor-pointer hover:text-blue-600">Scholarships</span>
        <span className="cursor-pointer hover:text-blue-600">Visa</span>
        <span className="cursor-pointer hover:text-blue-600">Contact Us</span>
      </nav>

      {/* Right CTA Button */}
      <Button
        className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:opacity-90"
      >
        Register Now →
      </Button>
    </div>
  );
}
