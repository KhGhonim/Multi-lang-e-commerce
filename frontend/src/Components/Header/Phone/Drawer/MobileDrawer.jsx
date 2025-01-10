import { useEffect, useRef, useState } from "react";
import DrawerHeader from "./DrawerHeader";
import { items, menuItems } from "DB/db";
import MenuItem from "./MenuItem";
import CategoryItem from "./CategoryItem";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import {
  CiGlobe,
  CiHeart,
  CiMail,
  CiPhone,
  CiSearch,
  CiUser,
} from "react-icons/ci";
import { RiEnglishInput } from "react-icons/ri";
import { TbAlphabetArabic, TbLogs } from "react-icons/tb";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { GiEgyptianProfile } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "@mui/icons-material";
import useLogOut from "../../../../Hooks/useLogOut";
import { signOut } from "../../../../Redux/userSlice";

export default function MobileDrawer({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("menu");
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  };
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const dispatch = useDispatch();
  const { HandleSignOut } = useLogOut();
  const HandlerSignOut = () => {
    HandleSignOut();
    dispatch(signOut());
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const theme = useTheme().palette.mode;
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={handleClickOutside}
        />
      )}

      {/* Drawer */}
      <div
        ref={ref}
        className={`fixed top-0 h-full w-80 left-0 ${
          theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
        } shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <DrawerHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onClose={onClose}
          isOpen={isOpen}
        />

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100%-7rem)]">
          {activeTab === "menu" ? (
            <div className="py-2">
              {menuItems
                .filter((item) => {
                  if (item.IsAdmin && user.currentUser?.user.isAdmin) return true;
                  if (!item.IsAdmin && user.currentUser) return true;
                  if (!item.IsAdmin && !user.currentUser) return true;
                  return false;
                })
                .map((item, index) => (
                  <MenuItem
                    onClick={handleClickOutside}
                    Icon={undefined}
                    key={index}
                    {...item}
                    
                  />
                ))}

              <div className="pt-2">
                <Link
                  className={`w-full px-4 font-light border-b py-3 text-${user.direction === 'rtl' ? 'right' : 'left'} hover:bg-gray-50 hover:text-black transition-colors flex items-center gap-2`}
                  to={"/blog"}
                >
                  <TbLogs className={`w-5 h-5 ${user.direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                  <span>{user.direction === 'rtl' ? 'مدونة' : 'Blog'}</span>
                </Link>

                {user.currentUser && (
                  <Link
                    className={`w-full px-4 font-light border-b py-3 text-${user.direction === 'rtl' ? 'right' : 'left'} hover:bg-gray-50 hover:text-black transition-colors flex items-center gap-2`}
                    to={"/profile"}
                  >
                    <GiEgyptianProfile className={`w-5 h-5 ${user.direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                    <span>{user.direction === 'rtl' ? 'الملف الشخصي' : 'Profile'}</span>
                  </Link>
                )}

                <Link
                  className={`w-full px-4 font-light border-b py-3 text-${user.direction === 'rtl' ? 'right' : 'left'} hover:bg-gray-50 hover:text-black transition-colors flex items-center gap-2`}
                  to={"/whishlist"}
                >
                  <CiHeart className={`w-5 h-5 ${user.direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                  <span>{user.direction === 'rtl' ? 'قائمة الرغبات' : 'Wishlist'}</span>
                </Link>

                <Link
                  className={`w-full px-4 py-3 font-light border-b text-${user.direction === 'rtl' ? 'right' : 'left'} hover:bg-gray-50 hover:text-black transition-colors flex items-center gap-2`}
                  to={"/search"}
                >
                  <CiSearch className={`w-5 h-5 ${user.direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                  <span>{user.direction === 'rtl' ? 'بحث' : 'Search'}</span>
                </Link>

                {!user.currentUser && (
                  <Link
                    className={`w-full px-4 py-3 font-light border-b text-${user.direction === 'rtl' ? 'right' : 'left'} hover:bg-gray-50 hover:text-black transition-colors flex items-center gap-2`}
                    to={"/login"}
                  >
                    <CiUser className={`w-5 h-5 ${user.direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                    <span>{user.direction === 'rtl' ? 'تسجيل الدخول / التسجيل' : 'Login/ Register'}</span>
                  </Link>
                )}

                <div className="flex flex-col py-3">
                  <h1 className={`px-5 py-3 font-bold text-${user.direction === 'rtl' ? 'right' : 'left'}`}>{user.direction === 'rtl' ? 'محتاج مساعدة؟' : 'Need help?'}</h1>
                  <Link
                    className={`w-full px-7 py-1 font-light text-${user.direction === 'rtl' ? 'right' : 'left'} hover:bg-gray-50 hover:text-black transition-colors flex items-center gap-2`}
                    to={"callto:905116888908"}
                  >
                    <CiPhone className={`w-5 h-5 ${user.direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                    <span>{user.direction === 'rtl' ? '+90 5116888908' : '+90 5116888908'}</span>
                  </Link>

                  <Link
                    className={`w-full px-7 py-1 font-light text-${user.direction === 'rtl' ? 'right' : 'left'} hover:bg-gray-50 hover:text-black transition-colors flex items-center gap-2`}
                    to={"mailto:kg@khaledghonim.com"}
                  >
                    <CiMail className={`w-5 h-5 ${user.direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                    <span>kg@khaledghonim.com</span>
                  </Link>
                </div>

                {[{
                  title: "Language",
                  Icon: <CiGlobe />,
                  subItems: [
                    { title: "English", Icon: <RiEnglishInput />, value: "en" },
                    { title: "Arabic", Icon: <TbAlphabetArabic />, value: "ar" },
                    { title: "Turkish", Icon: <FaTurkishLiraSign />, value: "tr" }
                  ]
                }].map((item, index) => (
                  <MenuItem
                    key={index}
                    title={item.title}
                    subItems={item.subItems}
                    Icon={item.Icon}
                    onClick={handleClickOutside}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="py-2">
              {items.map((category, index) => (
                <CategoryItem key={index} item={category} />
              ))}
            </div>
          )}

          {user.currentUser && (
            <Link
              onClick={HandlerSignOut}
              className={`w-full px-4 font-light border-b py-3 text-${user.direction === 'rtl' ? 'right' : 'left'} hover:bg-gray-50 hover:text-black transition-colors flex items-center gap-2`}
              to={"/login"}
            >
              <Logout className={`w-5 h-5 ${user.direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
              <span>{user.direction === 'rtl' ? 'تسجيل الخروج' : 'Log out'}</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
