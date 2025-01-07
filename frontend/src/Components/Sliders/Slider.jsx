// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import award from "../../Assets/award-svgrepo-com.svg";
import { Navigation } from "swiper/modules";
import {
  ArrowBack,
  ArrowForward,
  CompareArrows,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { CircularProgress, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AddToCompare, addToMyFavorites } from "../../Redux/userSlice";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { GoEye } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Slider({ Sliders, Headline, setQuickViewProduct }) {
  const theme = useTheme().palette.mode;
  const dispatch = useDispatch();
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  /**
   * Handles adding a product to favorites.
   *
   * @param {Object} Slider - The product to be added to favorites.
   */
  const FavHandler = (Slider) => {
    if (user.currentUser === null) {
      toast.warning("Please login to add product to favorites");
    } else {
      dispatch(addToMyFavorites(Slider));
      toast.success(
        "Added to my favorites, check your whishlist to see your favorites"
      );
    }
  };

  const AddToCompareHandler = (Slider) => {
    if (user.currentUser === null) {
      toast.warning("Please login to add product to favorites");
    } else {
      dispatch(AddToCompare(Slider));
      toast.success("Added to compare list");
    }
  };

  const { t } = useTranslation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => setHoveredItem(index);
  const handleMouseLeave = () => setHoveredItem(null);
  return (
    <div className="w-full h-full p-8">
      <h1
        className={`text-3xl font-bold w-full text-center py-10 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {t(Headline)}
      </h1>
      {Sliders.length > 0 ? (
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-baby",
            prevEl: ".swiper-button-prev-baby",
          }}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
          className={`${
            theme === "dark"
              ? `mySwiper  z-50 `
              : `mySwiper bg-gradient-to-t from-zinc-50 to-zinc-200 z-40 `
          }`}
        >
          {Sliders.map((Slider, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full shadow-lg rounded-lg relative group"
            >
              <AnimatePresence>
                {hoveredItem === index && (
                  <motion.div
                    onClick={() => FavHandler(Slider)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-0 right-0 p-3 z-50"
                  >
                    <motion.span
                      className="text-xs cursor-pointer group-hover:block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FavoriteBorderOutlined className="w-5 h-5 bg-black rounded-lg hover:bg-red-600 text-white p-2 transition-all duration-300 ease-in-out" />
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {hoveredItem === index && (
                  <motion.div
                    onClick={() => setQuickViewProduct(Slider)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 p-3 z-50"
                  >
                    <motion.span
                      className="text-xs cursor-pointer group-hover:block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GoEye className="w-6 h-6 bg-black rounded-lg hover:bg-red-600 text-white p-2 transition-all duration-300 ease-in-out" />
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {hoveredItem === index && (
                  <motion.div
                    onClick={() => AddToCompareHandler(Slider)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-0 transform -translate-x-1/2  p-3 z-50"
                  >
                    <motion.span
                      className="text-xs cursor-pointer group-hover:block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CompareArrows className="w-6 h-6 bg-black rounded-lg hover:bg-red-600 text-white p-2 transition-all duration-300 ease-in-out" />
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                className="w-full h-full rounded-lg overflow-hidden flex flex-col relative"
                to={`ProductDetails/${Slider.id}`}
              >
                <div className="w-full h-80 md:h-full">
                  <img
                    className="w-full h-full md:!h-60 object-fill"
                    src={Slider.img}
                    alt="Bioxin Keratin Argan Oil"
                  />
                </div>

                <div className="cursor-pointer h-6 bg-gradient-to-l from-orange-500 to-orange-200 text-white flex justify-center items-center text-center text-xs relative">
                  <img className="!w-8 !h-8" src={award} alt="award" />
                  <span>{t("3rd best-selling product")}</span>
                </div>

                <div className={`text-black p-4 text-xs h-full`}>
                  <div className="flex justify-between items-center">
                    <span className="bg-green-500 text-white px-2 py-1 text-xs font-bold uppercase">
                      {t("Fast Delivery")}
                    </span>
                    <span className="bg-gray-600 text-white px-2 py-1 text-xs font-bold uppercase">
                      {t("Free Shipping")}
                    </span>
                  </div>
                  <h2 className="text-xs font-extrabold mt-2 text-black">
                    {Slider.name}
                  </h2>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500">★★★★☆</span>
                    <span className="text-zinc-500 ml-2">
                      ({Slider.ratingCount})
                    </span>
                  </div>
                  <p className="text-red-600 font-bold mt-2">
                    {t("Lowest Price In")} {Slider.lowestPriceInDays}{" "}
                    {t("Days")}!
                  </p>
                  <p className="text-lg font-bold mt-1">
                    {Slider.price}
                    <span className="line-through text-muted">
                      {Slider.fakePrice}
                    </span>
                  </p>
                  <button className="bg-[#FFF6EE] font-semibold mt-4 py-2 px-4 rounded-lg">
                    {t("Buy More Pay Less")}
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          ))}

          <div className="swiper-button-next-baby absolute right-0 top-1/2 z-50 bg-gray-50 text-black rounded-full border-2 w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#F48118] hover:text-white transition-all duration-500 cursor-pointer">
            <ArrowForward />
          </div>
          <div className="swiper-button-prev-baby absolute left-0 top-1/2 z-50  bg-gray-50 text-black rounded-full border-2 w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#F48118] hover:text-white transition-all duration-500 cursor-pointer">
            <ArrowBack />
          </div>
        </Swiper>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}
