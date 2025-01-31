import { useForm } from "@formspree/react";
import { Mail } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import groovyWalkAnimation from "../loading/Email Recieved.json";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("mvgpbyob");
  const [showForm, setShowForm] = useState(true);
  const { t } = useTranslation();
  const refH1 = useRef(null);

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
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Stay Ahead in Fashion Trends
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter and get exclusive style guides, trend
            forecasts, and fashion insights.
          </p>

          {showForm ? (
            <AnimatePresence mode="wait">
              <motion.div ref={refH1} className="flex flex-row ">
                <form className="w-full flex gap-4" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 w-full rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {t("Subscribe")}
                  </button>
                </form>
              </motion.div>
            </AnimatePresence>
          ) : (
            <Lottie
              animationData={groovyWalkAnimation}
              loop={false}
              className="container flex flex-col flex-wrap items-center justify-center p-4 py-20 space-y-10 mx-auto md:p-10"
            />
          )}

          <p className="mt-4 text-sm text-gray-400">
            By subscribing, you'll receive our weekly fashion digest and early
            access to exclusive content.
          </p>
        </div>
      </div>
    </section>
  );
}
