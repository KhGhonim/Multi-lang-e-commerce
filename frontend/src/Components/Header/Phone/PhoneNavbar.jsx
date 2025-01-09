import React, { useEffect, useState } from "react";
import { CiHome, CiSettings } from "react-icons/ci";
import { FaGift, FaSearchengin, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RxMix } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material";
import { VscAccount } from "react-icons/vsc";

export default function PhoneNavbar() {
  const [isHidden, setisHidden] = useState(false);
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const theme = useTheme().palette.mode;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setisHidden(false);
      } else {
        setisHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHidden]);
  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 p-2 ${
        theme === "dark" ? "bg-[#131728] text-white" : "bg-white text-black"
      } shadow-lg transition-all duration-500 ease-in-out ${
        isHidden ? "opacity-0 translate-y-full" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="flex items-center justify-around">
        {[
          { href: "/", label: "Home", icon: <CiHome /> },
          { href: "/search", label: "Search", icon: <FaSearchengin /> },
          { href: "/whishlist", label: "Wishlist", icon: <FaGift /> },
          {
            href: "/admin",
            label: "Admin",
            icon: <VscAccount />,
            isAdmin: true,
            requiresAuth: true,
          },
          {
            href: "/profile",
            label: "Settings",
            icon: <CiSettings />,
            requiresAuth: true,
          },
          {
            href: "/login",
            label: "Login",
            icon: <FaUser />,
            requiresAuth: false,
          },
          { href: "/compare", label: "Compare", icon: <RxMix /> },
        ]
          .filter((item) => {
            if (item.requiresAuth === undefined) return true;
            if (item.requiresAuth && user.currentUser && !item.isAdmin) return true;
            if (item.requiresAuth && user.currentUser && item.isAdmin && user.currentUser.user.isAdmin) return true;
            if (!item.requiresAuth && !user.currentUser) return true;
            return false;
          })
          .map((item, index) => (
            <Link
              key={index}
              className="flex flex-col items-center group relative"
              to={item.href}
            >
              <span className="group-hover:animate-bounce text-lg transition-transform duration-300">
                {item.icon}
              </span>
              {item.label === "Wishlist" &&
                user?.FavoirteProducts?.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                    {user?.FavoirteProducts?.length}
                  </span>
                )}
              {item.label === "Compare" &&
                user?.CompareProducts?.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                    {user?.CompareProducts?.length}
                  </span>
                )}
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
      </div>
    </div>
  );
}
