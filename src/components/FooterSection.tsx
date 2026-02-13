"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function FooterSection() {
  return (
    <section className="w-full mt-16 sm:mt-20">

      {/* ================= CALL TO ACTION ================= */}
      <Card className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                       py-10 sm:py-14 md:py-16
                       shadow-md border-none 
                       bg-gradient-to-br from-white via-purple-50 to-purple-100 
                       rounded-2xl">
        <CardContent className="text-center">

          <h2 className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            leading-tight
            text-[#1E242C]
          ">
            Join ambitious professionals
            <span className="block">
              and unlock your dream career today
            </span>
          </h2>

          <p className="
            mt-4
            text-sm
            sm:text-base
            md:text-lg
            text-[#414D60]
            max-w-md
            sm:max-w-xl
            md:max-w-2xl
            mx-auto
          ">
            Unlock your true potential and discover a world of opportunities
            that align with your skills, interests, and aspirations.
          </p>

          {/* Email Input */}
          <div className="mt-8 flex justify-center">
            <div className="
              w-full 
              max-w-md 
              flex 
              flex-col 
              sm:flex-row 
              items-center 
              gap-3
              sm:gap-2
              bg-white 
              rounded-full 
              border 
              shadow-sm 
              px-4 py-2
            ">
              <div className="flex items-center w-full">
                <Mail className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
                <Input
                  type="email"
                  placeholder="Your mail address"
                  className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
                />
              </div>

              <Button className="
                w-full sm:w-auto
                rounded-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-6
              ">
                Join Us
              </Button>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* ================= FOOTER ================= */}
      <footer className="
        w-full 
        bg-gradient-to-br from-white via-purple-50 to-purple-100
        mt-16 sm:mt-20
      ">
        <div className="
          max-w-7xl 
          mx-auto 
          px-4 sm:px-6 lg:px-8 
          py-10 sm:py-12
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-4 
          gap-10
          text-[#282828]
        ">

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg">
              English<span className="text-purple-600">Review</span>
            </h3>

            <p className="mt-3 text-sm sm:text-base leading-relaxed">
              <span className="font-semibold">Corporate Head Office:</span><br />
              3787 Jerry Dove Drive, Florence,
              South Carolina, 29501, United States.
            </p>

            <p className="mt-3 text-sm sm:text-base leading-relaxed">
              <span className="font-semibold">Phone:</span> 843-496-7759 <br />
              <span className="font-semibold">Fax:</span> 02-222264303 <br />
              <span className="font-semibold">Email:</span> info@mastershub.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600">Jobs</a></li>
              <li><a href="#" className="hover:text-blue-600">Employer</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="font-bold text-base mb-3">Others</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-blue-600">How it works</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-bold text-base mb-3">About Us</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-blue-600">Company Milestone</a></li>
              <li><a href="#" className="hover:text-blue-600">Web Mail</a></li>
              <li><a href="#" className="hover:text-blue-600">Board of Directors</a></li>
              <li><a href="#" className="hover:text-blue-600">Senior Management</a></li>
            </ul>
          </div>

        </div>
      </footer>

    </section>
  );
}
