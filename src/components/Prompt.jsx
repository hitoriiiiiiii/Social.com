import React from "react";
import avatar1 from "../assets/hitori.jpg";
import avatar2 from "../assets/hitori2.jpg";

export default function Prompt() {
  return (
    <div className="relative rounded-3xl border border-white/40 shadow-[0_0_35px_rgba(255,255,255,0.15)] backdrop-blur-md bg-grey-200  w-[90%] max-w-5xl mx-auto flex flex-col items-center px-6 sm:px-8 py-16 sm:py-20 overflow-hidden">

      {/* 🔵 Inward Gradients */}
      <div className="absolute w-[400px] h-[300px] top-[80px] left-[8%] bg-white blur-[120px] rounded-full opacity-20 z-0" />
      <div className="absolute w-[400px] h-[280px] top-[200px] left-[12%] bg-[#71a5ee] blur-[110px] rounded-full opacity-40 z-0" />
      <div className="absolute w-[320px] h-[280px] top-[250px] right-[12%] bg-[#9a60e1] blur-[110px] rounded-full opacity-40 z-0" />
      <div className="absolute w-[400px] h-[300px] bottom-[60px] right-[15%] bg-white blur-[90px] rounded-full opacity-20 z-0" />

      {/* Heading */}
      <h2 className="text-2xl sm:text-[36px] font-[400] font-['Bree_Serif'] text-[#030012d6] text-center z-10">
        Your Social Sidekick Has Arrived!
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-[15px] sm:text-lg font-medium text-gray-700 text-center font-[Langar] z-10">
        Let, Ai agents reply, react, and run your socials while you relax.
      </p>

      {/* Prompt Cards */}
      <div className="mt-20 w-full flex flex-col gap-3 items-center z-10">
        {/* Left Prompt Box */}
        <div className="relative self-start rounded-2xl p-5 sm:p-6 max-w-md bg-white/10 backdrop-blur-[12px] shadow-[0_4px_30px_rgba(255,255,255,0.1)] border border-white/30">
          <img
            src={avatar1}
            alt="avatar1"
            className="w-12 h-12 rounded-full absolute -top-6 left-6 object-cover"
          />
          <p className="mt-10 text-[15px] leading-snug text-black font-medium">
            “Write an Instagram caption about self-worth during hard times. <br />
            Make it emotional but empowering, use short punchy lines, and end with a call to save or share.”
          </p>
        </div>

        {/* Right Prompt Box */}
        <div className="relative self-end rounded-2xl p-5 sm:p-6 max-w-md bg-white/10 backdrop-blur-[12px] shadow-[0_4px_30px_rgba(255,255,255,0.1)] border border-white/30">
          <img
            src={avatar2}
            alt="avatar2"
            className="w-12 h-12 rounded-full absolute -top-6 right-6 object-cover"
          />
          <p className="mt-10 text-[15px] leading-snug text-black font-medium">
            "Write a warm thank-you message for a user who complimented the post. <br />
            Add 1 emoji. Make it short and sweet."
          </p>
        </div>
      </div>
    </div>
  );
}
