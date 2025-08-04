import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
}

export default function TestimonialCard({ quote, name }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-b from-[#daeaff] to-[#cad9fc] rounded-[20px] p-5 w-[280px] sm:w-[300px] text-center shadow-sm cursor-pointer">
      <p className="text-sm sm:text-base font-medium text-black mb-3">
        {quote}
      </p>
      <p className="text-black font-semibold text-sm font-['Bree_Serif']">
        {name}
      </p>
    </div>
  );
}
