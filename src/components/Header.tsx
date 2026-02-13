"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Manrope } from "next/font/google";
import { Menu, X } from "lucide-react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="
        flex items-center justify-between
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        py-4
      ">

        {/* Logo */}
        <div className="text-lg sm:text-xl font-semibold">
          <span className="text-blue-600">English</span>
          <span className="text-orange-500">Review</span>
        </div>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex gap-8 items-center text-[#1E242C] ${manrope.className}`}>
          <span className="cursor-pointer hover:text-blue-600 transition-colors">
            Programs
          </span>
          <span className="cursor-pointer hover:text-blue-600 transition-colors">
            Scholarships
          </span>
          <span className="cursor-pointer hover:text-blue-600 transition-colors">
            Visa
          </span>
          <span className="cursor-pointer hover:text-blue-600 transition-colors">
            Contact Us
          </span>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="
            px-6 py-2
            rounded-full
            bg-gradient-to-r from-purple-500 to-blue-600
            text-white
            hover:opacity-90
            transition
          ">
            Register Now →
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className={`flex flex-col gap-4 px-6 py-6 ${manrope.className}`}>
            <span className="hover:text-blue-600 cursor-pointer">
              Programs
            </span>
            <span className="hover:text-blue-600 cursor-pointer">
              Scholarships
            </span>
            <span className="hover:text-blue-600 cursor-pointer">
              Visa
            </span>
            <span className="hover:text-blue-600 cursor-pointer">
              Contact Us
            </span>

            <Button className="
              mt-4
              w-full
              rounded-full
              bg-gradient-to-r from-purple-500 to-blue-600
              text-white
            ">
              Register Now →
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
