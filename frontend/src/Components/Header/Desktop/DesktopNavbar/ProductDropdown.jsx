import { useTheme } from "@mui/material";
import { featuredProducts } from "DB/db";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductDropdown() {
  const theme = useTheme().palette.mode;
  const { t } = useTranslation();

  // @ts-ignore
  const user = useSelector((state) => state.UserStore);

  return (
    <div
      className={`absolute z-50 top-full ${
        user.direction === "rtl"
          ? "right-1/2 transform translate-x-1/3"
          : "left-1/2 transform -translate-x-1/3"
      } w-[1200px] ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      } shadow-lg rounded-b-xl`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-8">
        {/* Categories */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className={`space-y-2 `}>
            {["Women", "Men", "Accessories"].map((category, index) => (
              <motion.li
                key={index}
                whileHover={{
                  x: user.direction === "rtl" ? -3 : 3,
                  transition: { duration: 0.2 },
                }}
                className="w-full relative"
              >
                <Link
                  to="#"
                  className="hover:text-orange-500 flex items-center justify-between group"
                >
                  {t(category)}
                  <FaArrowRight
                    className={`absolute ${
                      user.direction === "rtl"
                        ? "left-10 rotate-180"
                        : "right-10"
                    } transition-all duration-200 ease-in-out`}
                    size={16}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Featured Products */}
        <div className="col-span-3">
          <h3 className="font-semibold mb-4">Featured</h3>
          <div className="grid grid-cols-2 gap-4">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to="/search"
                className=" relative overflow-hidden rounded-lg"
              >
                <motion.img
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transform  transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <p className="text-white font-medium">{product.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
