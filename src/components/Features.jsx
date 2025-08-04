"use client";

import { motion } from "framer-motion";
import {
  Zap,
  LayoutTemplate,
  Sparkles,
  Send,
  Flag,
  Users,
} from "lucide-react";

const features = [
  {
    title: "30-Second Creation",
    description:
      "Enter your content, customize, and share in seconds — no design skills needed.",
    icon: Zap,
    color: "text-blue-500",
  },
  {
    title: "Pro Templates",
    description:
      "Dozens of stunning templates designed for indie creators and startups.",
    icon: LayoutTemplate,
    color: "text-violet-500",
  },
  {
    title: "Auto-Caption Generator",
    description:
      "AI-powered captions that match your tone and message perfectly.",
    icon: Sparkles,
    color: "text-pink-500",
  },
  {
    title: "Social Sharing",
    description:
      "One-click sharing to Twitter, LinkedIn, or download directly.",
    icon: Send,
    color: "text-purple-500",
  },
  {
    title: "Milestone Tracking",
    description:
      "Automatically generate content when you hit milestones.",
    icon: Flag,
    color: "text-pink-500",
  },
  {
    title: "Team Collaboration",
    description:
      "Give access to your team for seamless brand consistency.",
    icon: Users,
    color: "text-violet-500",
  },
];

export default function Features() {
  return (
    <div className="py-12 px-4 sm:px-8 rounded-[20px] bg-gradient-to-b from-white via-fuchsia-200 to-white border-black/30 border-opacity-30">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-medium font-['Bree_Serif'] text-black">
          Power Up Your Content Game
        </h2>
        <p className="text-lg text-gray-700 mt-2 font-medium max-w-xl mx-auto">
          Everything you need to create, schedule, and grow your social presence fast.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="flex items-start space-x-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <div className="mt-1">
                <Icon className={`${feature.color} w-6 h-6`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-grey-800 mb-1 font-['Bree_Serif']">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-gray-700 leading-snug">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-xl font-medium text-gray-900 font-['Bree_Serif'] mb-4">
          Start managing your content smarter, not harder.
        </p>
        <button className="bg-[#1f1f21] text-white text-sm px-6 py-3 rounded-lg font-semibold hover:bg-[#2f3f75] transition duration-200">
          Get Started Now
        </button>
      </div>
    </div>
  );
}
