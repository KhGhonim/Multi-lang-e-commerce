import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SetDirection } from "../.././../../Redux/userSlice";

export default function MenuItem({ Icon, subItems, title, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("kg-commerce") || "en"
  );
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    const savedLang = localStorage.getItem("kg-commerce") || "en";
    i18n.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    dispatch(SetDirection(savedLang === "ar" ? "rtl" : "ltr"));
  }, [dispatch, i18n]);

  const handleChange = (selectedLang) => {
    if (
      selectedLang === "ar" ||
      selectedLang === "tr" ||
      selectedLang === "en"
    ) {
      setLanguage(selectedLang);
      i18n.changeLanguage(selectedLang);
      localStorage.setItem("kg-commerce", selectedLang);
      document.documentElement.dir = selectedLang === "ar" ? "rtl" : "ltr";
      setIsOpen(false);
    }
  };
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-all duration-700 ease-in-out flex items-center justify-between group"
      >
        <div className="flex items-center gap-3">
          {Icon && <span className="text-xl">{Icon}</span>}
          <span className="group-hover:text-black">{title}</span>
        </div>
        {isOpen ? (
          <FaChevronDown className="w-4 h-4 text-gray-400 group-hover:text-black transition-all duration-700 ease-in-out" />
        ) : (
          <FaChevronRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-all duration-700 ease-in-out" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div
          onClick={(event) => {
            onClick(event);
          }}
          className="bg-gray-50 py-1"
        >
          {subItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => {
                handleChange(item?.value);
              }}
              className={`px-8 flex justify-between  py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300 ease-in-out `}
            >
              {item.title}

              {item.Icon && <span className="text-xl">{item.Icon}</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
