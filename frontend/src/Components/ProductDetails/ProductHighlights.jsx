import { useTheme } from "@mui/material";
import { FaBox, FaComments, FaLeaf } from "react-icons/fa6";

export default function ProductHighlights() {
  const theme = useTheme().palette.mode;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <FaBox className="w-8 h-8 text-gray-500 mb-4" />
        <h3
          className={`font-semibold mb-2 ${
            theme === "dark" && "text-gray-900"
          }`}
        >
          Premium Quality
        </h3>
        <p className="text-sm text-gray-600">
          Built with premium materials and advanced technology
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <FaComments className="w-8 h-8 text-gray-500 mb-4" />
        <h3
          className={`font-semibold mb-2 ${
            theme === "dark" && "text-gray-900"
          }`}
        >
          24/7 Support
        </h3>
        <p className="text-sm text-gray-600">
          Dedicated customer support team at your service
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <FaLeaf className="w-8 h-8 text-gray-500 mb-4" />
        <h3
          className={`font-semibold mb-2 ${
            theme === "dark" && "text-gray-900"
          }`}
        >
          Eco-Friendly
        </h3>
        <p className="text-sm text-gray-600">
          Sustainable materials and eco-conscious packaging
        </p>
      </div>
    </div>
  );
}
