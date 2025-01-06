import { useTheme } from "@mui/material";
import { collections } from "DB/db";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function CollectionDropdown() {
  const [selectedCollection, setSelectedCollection] = useState(
    collections[0].id
  );
  const theme = useTheme().palette.mode;

  return (
    <div
      className={`absolute z-50 top-full left-1/2 transform -translate-x-1/2 w-[1200px] ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      } shadow-lg rounded-b-xl`}
    >
      <div className="max-w-7xl mx-auto p-8">
        {/* Collection Tabs */}
        <div className="flex space-x-4 mb-6">
          {collections.map((collection) => (
            <button
              key={collection.id}
              className={`px-4 py-2 rounded-lg ${
                selectedCollection === collection.id
                  ? "bg-gray-900 text-white"
                  : null
              }`}
              onMouseEnter={() => setSelectedCollection(collection.id)}
            >
              {collection.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <Swiper
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper h-96 w-full relative"
        >
          {collections
            .find((c) => c.id === selectedCollection)
            ?.products.map((product) => (
              <SwiperSlide
                key={product.id}
                className={`group relative flex flex-col h-full w-full ${
                  theme === "dark" ? "bg-[#131313]" : "bg-white"
                }`}
              >
                <Link
                  to="#"
                  className="relative w-full h-80 overflow-hidden transition-all duration-300 ease-in-out rounded-lg group hover:opacity-75"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3
                    className={`text-xl font-medium text-white`}
                  >
                    {product.name}
                  </h3>
                  <p
                    className={`mt-1 text-xl text-white`}
                  >
                    {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          <button
            className={`absolute button-prev z-50 left-0 top-1/2 border -translate-y-1/2 p-2 ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-800 text-white border-orange-500"
                : "bg-white/80 hover:bg-white text-black border-gray-50"
            } rounded-full shadow-lg `}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            className={`absolute button-next z-50 right-0 top-1/2 border -translate-y-1/2 p-2 ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-800 text-white border-orange-500"
                : "bg-white/80 hover:bg-white text-black border-gray-50"
            } rounded-full shadow-lg `}
          >
            <FaChevronRight size={20} />
          </button>
        </Swiper>
      </div>
    </div>
  );
}
