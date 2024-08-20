import { useTheme } from "@mui/material";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const IsInView = useInView(BannerHook);
  return (
    <div className="w-full h-dvh relative overflow-hidden">
      <img
        src="https://images.news18.com/ibnlive/uploads/2021/06/1624945730_featured-image-2021-06-29t111724.512.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div
        ref={BannerHook}
        className="w-full absolute inset-0 bg-gradient-to-b from-transparent to-black "
      >
        <AnimatePresence mode="wait">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            exit="exit"
            animate={IsInView ? "visible" : "hidden"}
            className={`absolute max-md:top-1/3 max-md:w-auto top-1/2 left-0 right-0 -translate-y-1/2   p-8 w-1/2     text-text bg-white/80  rounded-xl z-50 ${
              theme === "dark" ? "text-black" : "text-black"
            }`}
          >
            <motion.div variants={childVariants}>
              <h1 className="text-3xl font-bold">What is Lorem Ipsum?</h1>
              <p className="text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </motion.div>
            <motion.div
              variants={childVariants}
              className="flex justify-end items-center"
            >
              <Link
                className=" bg-gray-600 text-white rounded-lg px-4 py-2 mt-4  w-32"
                to={"/search"}
              >
                Read More
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
