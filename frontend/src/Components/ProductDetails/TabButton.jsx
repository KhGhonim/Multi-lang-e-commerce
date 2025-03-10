import { useTheme } from "@mui/material";

export default function TabButton({ value, label, activeTab, setActiveTab }) {
  const theme = useTheme().palette.mode;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
        activeTab === value
          ? theme === "dark"
            ? "border-gray-300 text-gray-200"
            : "border-gray-500 text-gray-600"
          : theme === "dark"
          ? "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      }`}
    >
      {label}
    </button>
  );
}
