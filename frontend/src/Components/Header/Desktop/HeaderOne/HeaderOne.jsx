import LanguageSelector from "Components/LanguageSelector/LanguageSelector";
import DarkAndLightMode from "Components/DarkAndLightMode/DarkAndLightMode";
import SearchBar from "Components/Search/SearchBar";
import Logo from "Components/Logo/Logo";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlinePersonOutline, MdOutlineShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiLogoutCircleLine } from "react-icons/ri";
import useLogOut from "Hooks/useLogOut";
import { GoArrowSwitch } from "react-icons/go";
import { useTheme } from "@mui/material";
import CartDrawer from "Components/CartDrawer/CartDrawer";
import { useState } from "react";
import { FaUserCog } from "react-icons/fa";

export default function HeaderOne({ setMode }) {
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const { HandleSignOut } = useLogOut();
  const theme = useTheme().palette.mode;
  const [IsCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="hidden lg:flex  py-4 w-full flex-row  items-center  px-6 relative">
      <SearchBar />
      <Logo />
      <div className="flex flex-row w-1/5  items-center gap-4">
        <LanguageSelector />
        <DarkAndLightMode setMode={setMode} />
        {user.currentUser ? (
          <Link
            to="/login"
            onClick={HandleSignOut}
            className="text-lg font-semibold"
          >
            <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
              <RiLogoutCircleLine className="text-2xl cursor-pointer" />
            </motion.div>
          </Link>
        ) : (
          <Link to="/login" className="text-lg font-semibold">
            <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
              <MdOutlinePersonOutline className="text-2xl cursor-pointer" />
            </motion.div>
          </Link>
        )}
        {user.currentUser && (
          <Link to="/profile" className="text-lg font-semibold">
            <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
              <FaUserCog className="text-3xl cursor-pointer" />
            </motion.div>
          </Link>
        )}

        <Link to={"/whishlist"}>
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="relative"
          >
            <FaRegHeart className="text-xl cursor-pointer" />
            <div
              className={`absolute  text-xs -top-2 -right-2 ${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-red-500 text-white"
              } rounded-full w-4 h-4 flex items-center justify-center`}
            >
              {user.FavoirteProducts.length}
            </div>
          </motion.div>
        </Link>
        <div onClick={() => setIsCartOpen(!IsCartOpen)}>
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="relative"
          >
            <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
            <div
              className={`absolute  text-xs -top-2 -right-2 ${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-red-500 text-white"
              } rounded-full w-4 h-4 flex items-center justify-center`}
            >
              {user.cartItems.length}
            </div>
          </motion.div>
        </div>
        <Link to={"/compare"}>
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="relative"
          >
            <GoArrowSwitch className="text-2xl cursor-pointer" />
            <div
              className={`absolute  text-xs -top-2 -right-2 ${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-red-500 text-white"
              } rounded-full w-4 h-4 flex items-center justify-center`}
            >
              {user.CompareProducts.length}
            </div>
          </motion.div>
        </Link>
      </div>
      <CartDrawer setIsCartOpen={setIsCartOpen} IsCartOpen={IsCartOpen} />
    </div>
  );
}
