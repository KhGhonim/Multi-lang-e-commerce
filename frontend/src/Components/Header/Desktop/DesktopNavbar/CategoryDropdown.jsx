import { useTheme } from "@mui/material";
import { CategoriesForNavbar } from "DB/db";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CategoryDropdown() {
  const [selectedCategory, setSelectedCategory] = useState(
    CategoriesForNavbar[0].id
  );
  const theme = useTheme().palette.mode;
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const { t } = useTranslation();

  return (
<div
  className={`absolute z-50 top-full ${user.direction === "rtl" ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"} w-[1200px] ${
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
                  : ""
              } ${user.direction === "rtl" ? "text-right" : "text-left"}`}
              onMouseEnter={() => setSelectedCategory(category.id)}
            >
              {t(category.name)}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* Subcategories and Preview */}
    <div className="col-span-3">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">
            {t(
              CategoriesForNavbar.find((c) => c.id === selectedCategory)?.name
            )}
          </h3>
          <ul className="space-y-2">
            {CategoriesForNavbar.find(
              (c) => c.id === selectedCategory
            )?.subcategories.map((sub) => (
              <li key={sub}>
                <Link to={`/search`} className="hover:text-orange-600">
                  {t(sub)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2">
          <img
            src={
              CategoriesForNavbar.find((c) => c.id === selectedCategory)?.link
            }
            alt={t("Category preview")}
            className="w-full h-48 object-cover rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
