import { items } from "DB/db";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



const parentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 1.5,
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeInOut" } },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeInOut" } },
};

export default function SelectYourProduct() {
  const refH1 = useRef(null);
  const isInViewH1 = useInView(refH1);
  const {t} = useTranslation();
  return (
    <AnimatePresence mode="wait">
      <motion.div className="space-y-8 my-10 ">
        <motion.div
          ref={refH1}
          variants={parentVariants}
          initial="hidden"
          exit="exit"
          animate={isInViewH1 ? "visible" : "hidden"}
          className="flex justify-evenly space-x-4 cursor-pointer overflow-x-scroll md:overflow-x-hidden scroll scrollbar-hide  text-xs md:text-base  "
        >
          {items.map((item, index) => {
            return (
              <motion.div variants={childVariants} key={index}>
                <Link className="flex flex-col items-center " to={item.link}>
                  <img src={item.src} alt={item.alt} className={item.classes} />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          exit="exit"
          animate={isInViewH1 ? "visible" : "hidden"}
          className="flex justify-evenly items-center  space-x-4 px-4 text-center text-xs md:text-base font-bold "
        >
          <motion.div variants={childVariants}>
            <Link
              className="bg-green-100 text-green-700 px-1 md:px-4 py-2 rounded-md"
              to={"/search"}
            >
              {t("Most Added to Cart")}
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link
              className="bg-orange-100 text-orange-400 px-1 md:px-4 py-2 rounded-md"
              to={"/search"}
            >
              {t("Most Highlighted")}
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link
              className="bg-orange-100 text-red-700 px-1 md:px-4 py-2 rounded-md"
              to={"/search"}
            >
              {t("Most Featured")}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
