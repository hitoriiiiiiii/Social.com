import {
  BarChart3,
  Zap,
  Database,
  NotebookPen,
  BookOpen,
  Compass,
  Menu,
  X,
} from "lucide-react";
import DropdownMenu from "../Ui/Dropdown";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const solutions = [
    { icon: BarChart3, title: "Marketing", desc: "Boost awareness and reach." },
    { icon: Zap, title: "Automation", desc: "Save time with smart tools." },
    { icon: Database, title: "Analytics", desc: "Track and analyze metrics." },
    { icon: Compass, title: "Engagement", desc: "Better user interactions." },
  ];

  const resources = [
    { icon: NotebookPen, title: "Blog", desc: "Insights and trends." },
    { icon: BookOpen, title: "Case Studies", desc: "Real-world impact." },
    { icon: Compass, title: "Guides", desc: "Step-by-step tutorials." },
  ];

  return (
    <div className="w-full flex justify-center z-50">
      <div className="w-[95%] max-w-[1150px] h-[70px] bg-[#f7f7f7]/80 shadow-[0_9px_4px_rgba(0,0,0,0.15)] rounded-[20px] px-4 flex items-center justify-between">

        {/* Logo */}
        <div className="font-bold text-2xl sm:text-3xl text-black font-montserrat">
          Social.com
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-10 items-center text-md font-medium text-gray-600">
          <DropdownMenu title="Solutions" items={solutions} />
          <div className="hover:text-black cursor-pointer transition">Price</div>
          <DropdownMenu title="Resources" items={resources} />
          <div className="hover:text-black cursor-pointer transition">Contact Us</div>
        </div>

        {/* CTA */}
        <div className="hidden sm:block">
          <button className="bg-black text-white text-sm px-4 py-2 rounded-xl font-semibold hover:bg-[#2f3f75] transition">
            Get Started →
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden w-full bg-white px-6 py-4 rounded-b-[20px] shadow-md space-y-4 text-gray-700 text-sm font-medium">
          <DropdownMenu title="Solutions" items={solutions} isMobile />
          <div className="hover:text-black cursor-pointer transition">Price</div>
          <DropdownMenu title="Resources" items={resources} isMobile />
          <div className="hover:text-black cursor-pointer transition">Contact Us</div>
          <button className="w-full mt-2 bg-black text-white text-sm px-4 py-2 rounded-xl font-semibold hover:bg-[#2f3f75] transition">
            Get Started →
          </button>
        </div>
      )}
    </div>
  );
}
