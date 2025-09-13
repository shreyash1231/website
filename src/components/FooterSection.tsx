"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";

// CTA + Footer Section
export default function FooterSection() {
  return (
    <div className="w-full bg-gradient-to-br mt-20">
      {/* ================= CALL TO ACTION ================= */}
     <Card className="max-w-6xl mx-auto px-6 py-12 md:py-16 shadow-md border-none bg-gradient-to-br from-white via-purple-50 to-purple-100 rounded-2xl">
  <CardContent className="text-center">
    <h2 className="font-abeezee text-[32px] md:text-[40px] font-normal leading-[120%] text-[#1E242C]">
      Join ambitious professionals and <br /> unlock your dream career today
    </h2>
    <p className="mt-4 font-manrope text-base font-normal leading-[150%] text-[#414D60] max-w-2xl mx-auto">
      Unlock your true potential and discover a world of opportunities that
      align with your skills, interests, and aspirations
    </p>

    {/* Email Input */}
    <div className="mt-8 flex items-center justify-center">
      <div className="flex w-full max-w-md items-center rounded-full border bg-white shadow-sm px-4 py-2">
        <Mail className="h-5 w-5 text-gray-400" />
        <Input
          type="email"
          placeholder="Your mail address"
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
        />
        <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
          Join Us
        </Button>
      </div>
    </div>
  </CardContent>
</Card>


     {/* ================= FOOTER ================= */}
<div className="w-full bg-gradient-to-br from-white via-purple-50 to-purple-100 mt-20">
  <footer className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-[#282828]">
    {/* Contact */}
    <div>
      <h3 className="font-manrope font-bold text-lg leading-[150%]">
        English<span className="text-purple-600">Review</span>
      </h3>
      <p className="mt-3 font-manrope text-base leading-[150%]">
        <span className="font-semibold">Corporate Head Office:</span> <br />
        3787 Jerry Dove Drive, Florence, <br />
        South Carolina, 29501, United States.
      </p>
      <p className="mt-3 font-manrope text-base leading-[150%]">
        <span className="font-semibold">Phone:</span> 843-496-7759 <br />
        <span className="font-semibold">Fax:</span> 02-222264303 <br />
        <span className="font-semibold">Email:</span> info@mastershub.com
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-manrope font-bold text-base mb-3 leading-[150%]">
        Quick Links
      </h3>
      <ul className="space-y-2 font-manrope text-base leading-[150%]">
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Employer</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>

    {/* Others */}
    <div>
      <h3 className="font-manrope font-bold text-base mb-3 leading-[150%]">
        Others
      </h3>
      <ul className="space-y-2 font-manrope text-base leading-[150%]">
        <li><a href="#">How it works</a></li>
        <li><a href="#">Terms and condition</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </div>

    {/* About us */}
    <div>
      <h3 className="font-manrope font-bold text-base mb-3 leading-[150%]">
        About us
      </h3>
      <ul className="space-y-2 font-manrope text-base leading-[150%]">
        <li><a href="#">Company milestone</a></li>
        <li><a href="#">Web mail</a></li>
        <li><a href="#">Board of Directors</a></li>
        <li><a href="#">Senior Management</a></li>
      </ul>
    </div>
  </footer>
</div>

    </div>
  );
}
