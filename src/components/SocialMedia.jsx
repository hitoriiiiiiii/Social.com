import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaSnapchatGhost,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialMedia() {
  const icons = [
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaFacebookF,
    FaSnapchatGhost,
    FaYoutube,
  ];

  return (
    <div className="relative bg-[#f1f3fa] rounded-lg shadow-sm backdrop-blur-sm px-3 pt-4 pb-5 w-full max-w-[760px] mx-auto overflow-hidden min-h-[140px]">
      {/* 💫 Blurry Gradient at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#c2d4ff] via-[#99b2f3] to-transparent blur-lg opacity-50 z-0" />

      {/* CTA Button */}
      <div className="absolute top-3 right-3 z-10">
        <button
          className="bg-[#1f1f21] text-[#fdfbff] text-[10px] font-semibold px-3 py-1 rounded-md font-montserrat
          transition duration-300 ease-in-out whitespace-nowrap
          hover:bg-[#2f3f75] hover:shadow-md hover:scale-105"
        >
          Get Started →
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-10 sm:mt-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
        {/* Tagline */}
        <div className="flex-1">
          <h2 className="text-[13px] sm:text-[16px] leading-tight font-[Langar] text-[#4C4B6B] mb-1">
            One platform to manage content across Instagram,
          </h2>
          <h2 className="text-[13px] sm:text-[16px] leading-tight font-[Langar] text-[#4C4B6B] mb-2">
            Facebook, Twitter, LinkedIn & more...
          </h2>

          {/* Scrolling Icons */}
          <div className="relative overflow-hidden w-full h-[28px] sm:h-[34px]">
            <motion.div
              className="flex gap-3 sm:gap-4 text-[16px] sm:text-[20px] text-neutral-600 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
            >
              {[...Array(2)].flatMap((_, index) =>
                icons.map((Icon, i) => (
                  <div key={`${index}-${i}`}>
                    <Icon />
                  </div>
                ))
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
