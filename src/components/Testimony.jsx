import { motion, useAnimation } from "framer-motion";
import React from "react";
import TestimonialCard from "../Ui/TestimonialCard";

const testimonials = [
  {
    quote: `"This platform saved me hours every week. Posting across platforms is a breeze now!"`,
    name: "Prarthana Gade",
  },
  {
    quote: `"Engagement doubled after I started using the content scheduler!"`,
    name: "Ravi Desai",
  },
  {
    quote: `"It’s clean, fast, and just works. I’ve recommended it to my entire team."`,
    name: "Aisha M.",
  },
  {
    quote: `"The analytics feature is top-tier. Helped us pivot our content fast."`,
    name: "Simran V.",
  },
  {
    quote: `"Beautiful UI, blazing fast and super useful. Can’t imagine working without it."`,
    name: "Jay Patel",
  },
];

export default function TestimonialSection() {
  const controls = useAnimation();

  const startScroll = async () => {
    await controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 25,
      },
    });
  };

  const stopScroll = () => {
    controls.stop();
  };

  React.useEffect(() => {
    startScroll();
  }, []);

  return (
    <div className="w-full bg-white px-4 py-12 overflow-hidden">
      <h2 className="text-center text-2xl sm:text-4xl text-black font-['Bree_Serif'] mb-10">
        Why Creators Love Social.com
      </h2>

      {/* Motion horizontal scroll container */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={stopScroll}
        onMouseLeave={startScroll}
      >
        <motion.div
          animate={controls}
          className="flex gap-6 w-max"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} quote={t.quote} name={t.name} />
          ))}
        </motion.div>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-xl sm:text-2xl font-['Bree_Serif'] mb-4">
          Start your Ai prompt generating journey now !!
        </h3>
        <button className="bg-[#0f0f1a] text-white text-sm px-5 py-2 rounded-md font-semibold hover:bg-[#2f3f75] transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
}
