import React, { useState } from "react";
import { CiStickyNote } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";
import { TbTruck } from "react-icons/tb";
import { CartActionContent } from "./CartActionContent";
import { useTheme } from "@mui/material";

export default function CartActions() {
  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? "" : section));
  };

  const theme = useTheme().palette.mode;

  return (
    <div
      className={`space-y-4 ${
        theme === "dark" ? "bg-[#111111] text-white" : " text-black bg-gray-100"
      } rounded`}
    >
      <div className="flex justify-center gap-4 py-4">
        <button
          className={`p-3 rounded-full border border-gray-300 hover:border-gray-400 transition-colors ${
            activeSection === "note"
              ? "bg-gray-100 border-gray-400"
              : "bg-white"
          }`}
          onClick={() => toggleSection("note")}
        >
          <CiStickyNote className="h-5 w-5 text-gray-700" />
        </button>
        <button
          className={`p-3 rounded-full border border-gray-300 hover:border-gray-400 transition-colors ${
            activeSection === "shipping"
              ? "bg-gray-100 border-gray-400"
              : "bg-white"
          }`}
          onClick={() => toggleSection("shipping")}
        >
          <TbTruck className="h-5 w-5 text-gray-700" />
        </button>
        <button
          className={`p-3 rounded-full border border-gray-300 hover:border-gray-400 transition-colors ${
            activeSection === "coupon"
              ? "bg-gray-100 border-gray-400"
              : "bg-white"
          }`}
          onClick={() => toggleSection("coupon")}
        >
          <FaTag className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {activeSection && <CartActionContent activeSection={activeSection} />}
    </div>
  );
}
