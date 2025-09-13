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
      className={`w-full rounded-[20px] border shadow-sm transition-colors ${
        open ? "bg-[#F1F5FF] border-blue-200" : "bg-white border-gray-200"
      }`}
    >
      <CardContent className="flex items-start gap-4 p-6">
        {/* Step Circle */}
        <div
          className={`w-[56px] h-[56px] rounded-[48px] flex items-center justify-center font-['Manrope'] font-medium text-[20px] leading-[150%] ${
            open ? "bg-[#002B6B] text-white" : "bg-gray-100 text-[#002B6B]"
          }`}
        >
          {step < 10 ? `0${step}` : step}
        </div>

        {/* Question + Answer */}
        <div className="flex-1 flex flex-col">
          <span
            className={`font-['ABeeZee'] text-[20px] md:text-[24px] leading-[120%] ${
              open ? "text-[#002B6B] font-semibold" : "text-[#1E242C] font-normal"
            }`}
          >
            {question}
          </span>

          {open && (
            <span className="mt-2 font-['Manrope'] text-[16px] leading-[150%] text-[#414D60]">
              {answer}
            </span>
          )}
        </div>

        {/* Toggle + / - */}
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <Minus className="w-6 h-6 text-[#002B6B]" />
          ) : (
            <Plus className="w-6 h-6 text-[#002B6B]" />
          )}
        </div>
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
      question: "How do I create an account on the job board?",
      answer:
        "Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use the advanced search filters to narrow down results by industry, job type (full-time, part-time, freelance), and experience level.",
    },
    {
      question: "Is there a cost to use the job board, and what features are free?",
      answer:
        "Basic job searching and applications are free. Employers may have premium posting options, and candidates can purchase resume-boosting features.",
    },
  ];

  const mid = Math.ceil(faqs.length / 2);
  const leftFAQs = faqs.slice(0, mid);
  const rightFAQs = faqs.slice(mid);

  return (
    <div className="w-full flex flex-col items-center mt-24 gap-12">
      {/* Heading */}
      <span className="font-['ABeeZee'] text-[32px] md:text-[56px] leading-[120%] text-[#1E242C] text-left">
        Frequently asked Questions
      </span>

      {/* Two-column FAQ layout */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1300px]">
        <div className="flex flex-col gap-6 flex-1 min-w-[300px]">
          {leftFAQs.map((faq, index) => (
            <FAQCard
              key={index}
              step={index + 1}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6 flex-1 min-w-[300px]">
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
    </div>
  );
}
