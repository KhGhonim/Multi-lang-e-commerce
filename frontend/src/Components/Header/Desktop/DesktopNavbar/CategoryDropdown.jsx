import { useTheme } from "@mui/material";
import { CategoriesForNavbar } from "DB/db";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryDropdown() {
  const [selectedCategory, setSelectedCategory] = useState(
    CategoriesForNavbar[0].id
  );
  const theme = useTheme().palette.mode;

  return (
    <div
      className={`absolute z-50 top-full left-1/2 transform -translate-x-1/2 w-[1200px] ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      } shadow-lg rounded-b-xl`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-8">
        {/* Category List */}
        <div className="col-span-1 border-r">
          <ul className="space-y-2">
            {CategoriesForNavbar.map((category) => (
              <li key={category.id}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    selectedCategory === category.id
                      ? theme === "dark"
                        ? "bg-gray-900 font-medium"
                        : "bg-gray-200 font-medium"
                      : null
                  }`}
                  onMouseEnter={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Subcategories and Preview */}
        <div className="col-span-3">
          <div className="grid grid-cols-3  gap-8">
            {/* Subcategories */}
            <div className="col-span-1">
              <h3 className="font-semibold mb-4">
                {
                  CategoriesForNavbar.find((c) => c.id === selectedCategory)
                    ?.name
                }
              </h3>
              <ul className="space-y-2">
                {CategoriesForNavbar.find(
                  (c) => c.id === selectedCategory
                )?.subcategories.map((sub) => (
                  <li key={sub}>
                    <Link to={`/search`} className="hover:text-orange-600">
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preview Image */}
            <div className="col-span-2">
              <img
                src={
                  CategoriesForNavbar.find((c) => c.id === selectedCategory)
                    ?.link
                }
                alt="Category preview"
                className="w-full h-48 object-cover rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
