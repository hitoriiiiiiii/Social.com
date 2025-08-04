import Navbar from "../components/Navbar";
import Prompt from "../components/Prompt";
import SocialMedia from "../components/SocialMedia";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimony";
import Features from "../components/Features";
import Preview from "../Ui/Preview" 
import {motion} from 'framer-motion'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🎨 Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #6366f1 100%)",
        }}
      />

      {/* 📦 Main Content Layer */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-8">
        {/* Navbar */}
        <div className="mb-8 mt-2">
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className = " mt-4">
        <HeroSection />
        </div>

        {/* 📱 Preview Section Fade-in */}
        <div className = " abosolute top-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-6 sm:py-8 px-4"
      >
        <Preview />
      </motion.div>
      </div>

        {/* Social Media Section */}
        <div className="abosulte left-0 ml-3">
          <SocialMedia />
        </div>

        {/* Prompt Section */}
        <div className="mb-8 mt-10">
          <Prompt />
        </div>

        {/* Testimonial Section */}
        <div className="mb-10">
          <Testimonial />
        </div>

        {/* Features Section */}
        <div className="mb-10">
          <Features />
        </div>
      </div>
    </div>
  );
}
