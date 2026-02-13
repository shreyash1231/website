"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Plus, Minus } from "lucide-react";

interface FAQCardProps {
  step: number;
  question: string;
  answer: string;
}

function FAQCard({ step, question, answer }: FAQCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      className={`w-full rounded-2xl border transition-all duration-300 ${
        open
          ? "bg-[#F1F5FF] border-blue-200"
          : "bg-white border-gray-200"
      }`}
    >
      <CardContent className="flex items-start gap-4 p-4 sm:p-6">
        
        {/* Step Circle */}
        <div
          className={`flex items-center justify-center 
                      w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                      rounded-full 
                      text-sm sm:text-base md:text-lg
                      font-medium
                      transition-colors
                      ${
                        open
                          ? "bg-[#002B6B] text-white"
                          : "bg-gray-100 text-[#002B6B]"
                      }`}
        >
          {step < 10 ? `0${step}` : step}
        </div>

        {/* Question + Answer */}
        <div className="flex-1">
          <button
            onClick={() => setOpen(!open)}
            className="text-left w-full"
          >
            <h3
              className={`text-base sm:text-lg md:text-xl leading-tight transition-all ${
                open
                  ? "text-[#002B6B] font-semibold"
                  : "text-[#1E242C] font-normal"
              }`}
            >
              {question}
            </h3>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              open ? "max-h-96 mt-3" : "max-h-0"
            }`}
          >
            <p className="text-sm sm:text-base text-[#414D60] leading-relaxed">
              {answer}
            </p>
          </div>
        </div>

        {/* Toggle Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center shrink-0"
        >
          {open ? (
            <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-[#002B6B]" />
          ) : (
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#002B6B]" />
          )}
        </button>

      </CardContent>
    </Card>
  );
}

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I create an account on the job board?",
      answer:
        "Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use the advanced search filters to narrow down results by industry, job type (full-time, part-time, freelance), and experience level.",
    },
    {
      question: "How do I apply for a job through the platform?",
      answer:
        "Click on a job listing and select 'Apply'. Fill out the required fields, attach your resume, and submit directly to the employer.",
    },
    {
      question: "How can I track the status of my job applications?",
      answer:
        "Go to your dashboard and select 'My Applications' to view the status of each job you have applied for.",
    },
    {
      question: "Is there a cost to use the job board?",
      answer:
        "Basic job searching and applications are free. Employers may have premium posting options, and candidates can purchase resume-boosting features.",
    },
  ];

  const mid = Math.ceil(faqs.length / 2);
  const leftFAQs = faqs.slice(0, mid);
  const rightFAQs = faqs.slice(mid);

  return (
    <section className="w-full flex flex-col items-center 
                        mt-16 sm:mt-20 md:mt-24 
                        px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <h2 className="
        text-2xl
        sm:text-3xl
        md:text-5xl
        lg:text-6xl
        leading-tight
        text-[#1E242C]
        text-center
        md:text-left
        w-full
        max-w-7xl
      ">
        Frequently Asked Questions
      </h2>

      {/* FAQ Layout */}
      <div className="
        mt-10
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6 sm:gap-8
        w-full
        max-w-7xl
      ">
        <div className="flex flex-col gap-6">
          {leftFAQs.map((faq, index) => (
            <FAQCard
              key={index}
              step={index + 1}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {rightFAQs.map((faq, index) => (
            <FAQCard
              key={index + mid}
              step={index + 1 + mid}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
