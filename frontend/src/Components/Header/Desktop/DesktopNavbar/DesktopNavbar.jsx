import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import ProductDropdown from "./ProductDropdown";
import CategoryDropdown from "./CategoryDropdown";
import CollectionDropdown from "./CollectionDropdown";
import BlogDropdown from "./BlogDropdown";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function DesktopNavbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const theme = useTheme().palette.mode;
  const navItems = [
    { id: "products", label: "Products", component: ProductDropdown },
    { id: "categories", label: "Categories", component: CategoryDropdown },
    { id: "collections", label: "Collections", component: CollectionDropdown },
    { id: "blog", label: "Blog", component: BlogDropdown },
  ];
  const { t } = useTranslation();
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);

  return (
    <nav
      className={`hidden lg:flex w-full relative shadow-md ${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div
            className={`hidden lg:flex items-center gap-8 ${
              user.direction === "rtl" ? "space-x-reverse" : ""
            }`}
          >
            {navItems.map(({ id, label, component: DropdownComponent }) => (
              <div
                key={id}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-3 py-2 ${
                    user.direction === "rtl" ? "flex-row-reverse gap-2" : ""
                  }`}
                >
                  <span>{t(label)}</span>
                  <FaChevronDown
                    className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
                    size={16}
                  />
                </button>
                {activeDropdown === id && <DropdownComponent />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
