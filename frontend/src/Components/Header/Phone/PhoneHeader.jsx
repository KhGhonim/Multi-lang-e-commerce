import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MobileDrawer from "./Drawer/MobileDrawer";
import Logo from "Components/Logo/Logo";
import DarkAndLightMode from "Components/DarkAndLightMode/DarkAndLightMode";
import { useTheme } from "@mui/material";
import CartDrawer from "Components/CartDrawer/CartDrawer";

export default function PhoneHeader({ setMode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [IsCartOpen, setIsCartOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const theme = useTheme().palette.mode;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHidden]);
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  return (
    <>
      <div
        className={`lg:hidden absolute p-2 top-0 left-0 right-0 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} z-40 shadow-md`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo photo */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-[--text-color]"
          >
            <HiOutlineMenuAlt2 size={24} />
          </button>
          <Logo />

          <div className="flex items-center gap-4">
            <DarkAndLightMode setMode={setMode} />

            <div onClick={() => setIsCartOpen(true)} className="relative">
              <HiOutlineShoppingCart
                size={24}
                className="text-[--text-color]"
              />
              <span
                className={`absolute -top-2 -right-2 ${
                  theme === "dark"
                    ? "bg-red-500 text-white"
                    : "bg-gray-800 text-white"
                } text-xs rounded-full w-5 h-5 flex items-center justify-center`}
              >
                {user.cartItems.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <CartDrawer setIsCartOpen={setIsCartOpen} IsCartOpen={IsCartOpen} />
    </>
  );
}
