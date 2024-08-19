import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef } from "react";

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

export default function CallToAction() {
  const refH1 = useRef(null);
  const isInViewH1 = useInView(refH1);
  return (
    <div
      className="w-full min-h-96 bg-gray-500 bg-[url('https://images.news18.com/ibnlive/uploads/2021/06/1624945730_featured-image-2021-06-29t111724.512.jpg')]
           bg-cover bg-blend-multiply"
    >
      <AnimatePresence mode="wait">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          exit="exit"
          animate={isInViewH1 ? "visible" : "hidden"}
          className="container flex flex-col flex-wrap items-center justify-center p-4 py-20 space-y-10 mx-auto md:p-10"
        >
          <motion.div
            variants={childVariants}
            ref={refH1}
            className="flex flex-col items-center pt-5"
          >
            {" "}
            <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-200">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-200">
              Find out about products and other news
            </p>
          </motion.div>
          <motion.div variants={childVariants} className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3 text-black"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-orange-600 text-gray-50"
            >
              Subscribe
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
