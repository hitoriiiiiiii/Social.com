import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function DropdownMenu({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-black transition"
      >
        {title}
        <motion.span
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          animate={open ? "open" : "closed"}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      {/* Dropdown */}
      <motion.ul
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={dropdownWrapperVariants}
        className="absolute left-0 top-[120%] w-[90vw] sm:w-[480px] max-w-[90vw] bg-white shadow-xl border border-gray-200 rounded-xl p-4 sm:p-6 z-50 origin-top"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <motion.li
              key={index}
              variants={dropdownItemVariants}
              onClick={() => setOpen(false)}
              className="flex gap-3 p-3 rounded-md hover:bg-gray-100 cursor-pointer transition"
            >
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-md shrink-0">
                <item.icon className="w-5 h-5 text-black" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </div>
      </motion.ul>
    </div>
  );
}

const dropdownWrapperVariants = {
  open: {
    scaleY: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const dropdownItemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -10 },
};
