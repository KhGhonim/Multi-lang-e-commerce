// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import award from "../../Assets/award-svgrepo-com.svg";
import { Navigation } from "swiper/modules";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

export default function Slider({ Sliders, Headline }) {
  const theme = useTheme().palette.mode;

  return (
    <div className="w-full h-full p-8">
      <h1
        className={`text-3xl font-bold w-full text-center py-10 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {Headline}
      </h1>
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
            : `mySwiper bg-gradient-to-t from-zinc-50 to-zinc-200 z-50 `
        }`}
      >
        {Sliders.map((Slider, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full shadow-lg rounded-lg "
          >
            <Link
              className="w-full h-full rounded-lg  overflow-hidden flex flex-col relative "
              to={`${`ProductDetails/${Slider.id}`}`}
            >
              <div className="w-full h-80 md:h-full   ">
                <img
                  className="w-full h-full md:!h-60  object-fill"
                  src={Slider.img}
                  alt="Bioxin Keratin Argan Oil"
                />
              </div>

              <div className="cursor-pointer  h-6 bg-gradient-to-l from-orange-500 to-orange-200 text-white flex justify-center items-center text-center text-xs relative">
                <img className="!w-8 !h-8 " src={award} alt="award" />
                <span> 3rd best-selling product</span>
              </div>

              <div className={` text-black    p-4 text-xs h-full`}>
                <div className="flex justify-between items-center">
                  <span className="bg-green-500 text-white  px-2 py-1 text-xs font-bold uppercase">
                    Fast Delivery
                  </span>
                  <span className="bg-gray-600 text-white px-2 py-1 text-xs font-bold uppercase">
                    Free Shipping
                  </span>
                </div>
                <h2 className="text-sm md:text-lg font-semibold mt-2">
                  {Slider.title}
                </h2>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="text-zinc-500 ml-2">
                    ({Slider.ratingCount})
                  </span>
                </div>
                <p className="text-red-600 font-bold mt-2">
                  Lowest Price in {Slider.lowestPriceInDays} Days!
                </p>
                <p className="text-lg font-bold mt-1">
                  {Slider.price} ${" "}
                  <span className="line-through text-muted">
                    {Slider.fakePrice} $
                  </span>
                </p>
                <button className="bg-[#FFF6EE] font-semibold  mt-4 py-2 px-4 rounded-lg">
                  Buy More Pay Less
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
    </div>
  );
}
