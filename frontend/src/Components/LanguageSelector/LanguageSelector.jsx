import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { IoGlobeSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { SetDirection } from "../../Redux/userSlice";
import useTheme from "@mui/material/styles/useTheme";

const options = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
  { value: "tr", label: "Türkçe" },
];

export default function LanguageSelector() {
  const [language, setLanguage] = useState(
    localStorage.getItem("kg-commerce") || "en"
  );
  const theme = useTheme().palette.mode;
  const [isOpened, setIsOpened] = useState(false);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    const savedLang = localStorage.getItem("kg-commerce") || "en";
    i18n.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    dispatch(SetDirection(savedLang === "ar" ? "rtl" : "ltr"));
  }, [dispatch, i18n]);

  const handleChange = (selectedLang) => {
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("kg-commerce", selectedLang);
    document.documentElement.dir = selectedLang === "ar" ? "rtl" : "ltr";
    dispatch(SetDirection(selectedLang === "ar" ? "rtl" : "ltr"));
    setIsOpened(false);
  };

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Globe Icon */}
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full"
      >
        <IoGlobeSharp size={20} />
      </div>

      {/* Dropdown Menu */}
      {isOpened && (
        <div
          ref={ref}
          className={`absolute top-12 left-0 flex flex-col border ${
            theme === "dark" ? "bg-gray-900" : "bg-white"
          } border-gray-300 rounded-lg shadow-lg py-2 z-10`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleChange(option.value)}
              className={`px-4 py-2 text-sm font-medium cursor-pointer rounded-lg ${
                language === option.value
                  ? theme === "dark"
                    ? "text-white bg-gray-800"
                    : "text-black bg-gray-200"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
