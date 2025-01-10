import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function HeroSectionSlider({ SliderArray, title }) {
  const { t } = useTranslation();
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);

  return (
    <div>
      <Swiper
        dir={`${user.direction === "rtl" ? "rtl" : "ltr"}`}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper h-full w-full"
      >
        {SliderArray.map((photo, index) => {
          return (
            <SwiperSlide key={index} className="w-full h-full">
              <motion.div className="w-full h-80 md:h-96">
                {" "}
                <img
                  src={photo.Photo}
                  alt={photo.alt}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                  <div className="text-white text-base md:text-2xl font-bold transition-transform duration-300 ease-in-out group-hover:scale-110">
                    {t(title)}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
