import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useForm } from "@formspree/react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../loading/Email Recieved.json";
import { useTranslation } from "react-i18next";

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
  const [state, handleSubmit] = useForm("mvgpbyob");
  const [showForm, setShowForm] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    if (state.succeeded) {
      setShowForm(false);
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);
  return (
    <div
      className="w-full min-h-96 bg-gray-500 bg-[url('https://images.news18.com/ibnlive/uploads/2021/06/1624945730_featured-image-2021-06-29t111724.512.jpg')]
           bg-cover bg-blend-multiply"
    >
      {showForm ? (
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
                {t("Get Our Updates")}
              </h1>
              <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-200">
                {t("Find out about products and other news")}
              </p>
            </motion.div>
            <motion.div variants={childVariants} className="flex flex-row">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="example@email.com"
                  className="w-3/5 p-3 rounded-l-lg sm:w-2/3 text-black"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-2/5 p-3 text-sm font-semibold rounded-r-lg sm:w-1/3 bg-orange-600 text-gray-50"
                >
                  {t("Subscribe")}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
      ) : (
        <Lottie
          animationData={groovyWalkAnimation}
          loop={false}
          className="container flex flex-col flex-wrap items-center justify-center p-4 py-20 space-y-10 mx-auto md:p-10"
        />
      )}
    </div>
  );
}
