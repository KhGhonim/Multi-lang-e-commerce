import { CloseRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material";

export default function DrawerHeader({
  onClose,
  activeTab,
  onTabChange,
  isOpen,
}) {
  const theme = useTheme().palette.mode;
  return (
    <div className="border-b relative">
      <div
        className={`absolute ${
          isOpen ? "-right-14 opacity-100" : "left-0 opacity-0"
        }  px-4 h-14 transition-all duration-500 ease-in-out`}
      >
        <button
          onClick={onClose}
          className={`p-2  rounded-lg transition-colors ${
            theme === "dark"
              ? "bg-[#131313] text-white"
              : "bg-gray-900 text-white"
          }`}
        >
          <CloseRounded className="w-5 h-5" />
        </button>
      </div>
      <div className="flex ">
        <button
          onClick={() => onTabChange("menu")}
          className={`flex-1 py-5 text-sm font-medium border-b transition-all duration-300 ease-in-out ${
            activeTab === "menu"
              ? "border-black text-black bg-[#F0F0F0]"
              : "border-transparent text-gray-500 hover:text-black"
          }`}
        >
          MENU
        </button>
        <button
          onClick={() => onTabChange("categories")}
          className={`flex-1 py-5 text-sm font-medium border-b transition-colors ${
            activeTab === "categories"
              ? "border-black text-black bg-[#F0F0F0]"
              : "border-transparent text-gray-500 hover:text-black"
          }`}
        >
          CATEGORIES
        </button>
      </div>
    </div>
  );
}
