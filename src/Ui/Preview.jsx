import React from "react";

export default function Preview() {
  return (
    <div className="relative w-full max-w-[846px] h-[360px] sm:h-[442px] mx-auto border-[6px] sm:border-[10px] border-[#8E98A8] rounded-[20px] sm:rounded-[30px] bg-white shadow-[12px_8px_15px_rgba(0,0,0,0.25)]">
      
      {/* Left Device (Tablet or Smartwatch) */}
      <div className="absolute left-[-40px] sm:left-[-70px] top-1/2 -translate-y-1/2 w-[70px] sm:w-[100px] h-[100px] sm:h-[130px] rounded-[16px] border-[3px] sm:border-[4px] border-gray-500 bg-white shadow-[9px_4px_9px_rgba(0,0,0,0.25)]" />

      {/* Right Device (Stylized Phone) */}
      <div className="absolute right-[-40px] sm:right-[-70px] bottom-[10px] sm:bottom-[20px]">
        <div
          className="relative flex justify-center items-start h-[200px] sm:h-[280px] w-[90px] sm:w-[130px] border-[3px] border-[#8E98A8]  shadow-[12px_8px_15px_rgba(0,0,0,0.25)]  rounded-2xl bg-white"
         
        >
          {/* Top bar (speaker) */}
          <span className="mt-1 w-8 h-1.5 bg-[#8E98A8]  rounded-br-xl rounded-bl-xl" />

          {/* Right side buttons */}
          <span className="absolute -right-2 top-10 h-6 sm:h-7 w-[6px] sm:w-[8px] border-[3px] border-[#8E98A8]  rounded-md bg-white" />
          <span className="absolute -right-2 bottom-20 h-8 sm:h-10 w-[6px] sm:w-[8px] border-[3px] border-[#8E98A8] rounded-md bg-white" />
        </div>
      </div>

      {/* Inside the Laptop Frame */}
      <div className="w-full h-full rounded-[20px] overflow-hidden flex items-center justify-center text-gray-400 text-sm sm:text-lg text-center px-4">
        Laptop Preview Content
      </div>
    </div>
  );
}
