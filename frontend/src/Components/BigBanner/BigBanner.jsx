import { useTheme } from "@mui/material";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const parentVariants = {
  hidden: { opacity: 0, x: -400 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 1.5,
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, x: -100, transition: { duration: 1, ease: "easeInOut" } },
};

const childVariants = {
  hidden: { opacity: 0, x: -400 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
  exit: { opacity: 0, x: -100, transition: { duration: 1, ease: "easeInOut" } },
};
export default function BigBanner() {
  const theme = useTheme().palette.mode;
  const BannerHook = useRef(null);
  const IsInView = useInView(BannerHook, { once: true });

  const { t } = useTranslation();
  return (
    <div className="relative w-full h-[32rem] overflow-hidden bg-cover bg-fixed bg-center bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

      <div
        ref={BannerHook}
        className="absolute inset-0 flex flex-col justify-center items-center text-center p-10 z-40"
      >
        <AnimatePresence mode="wait">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            exit="exit"
            animate={IsInView ? "visible" : "hidden"}
            className={`p-8 bg-white/70 rounded-3xl shadow-lg backdrop-blur-sm ${
              theme === "dark" ? "text-gray-800" : "text-gray-900"
            }`}
          >
            <motion.h1
              variants={childVariants}
              className="text-5xl font-extrabold leading-tight tracking-wide mb-4"
            >
            {t("Discover the New Collection")}
            </motion.h1>
            <motion.p
              variants={childVariants}
              className="text-lg mb-6 text-gray-700"
            >
              {t("Explore our latest designs for an exceptional shopping experience.")}
              {t("Stay trendy with exclusive offers!")}
            </motion.p>
            <motion.div
              variants={childVariants}
              className="flex justify-center items-center gap-4"
            >
              <Link
                className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out"
                to={"/search"}
              >
                {t("Shop Now")}
              </Link>
              <Link
                className="px-6 py-3 bg-gray-700 text-white rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out"
                to={"/search"}
              >
                {t("Learn More")}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
