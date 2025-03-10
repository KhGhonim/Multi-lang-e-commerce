import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function RecommendedProducts({ slider, setIsCartOpen }) {
  return (
    <div className="px-4 py-6">
      <h3 className="text-xl font-bold mb-4">You may also like</h3>
      <Swiper
        pagination={{ clickable: true }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {slider?.map((product) => {
          return (
            <SwiperSlide className="py-4 cursor-pointer" key={product._id}>
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link
                  className="relative group block w-full h-64"
                  to={`/ProductDetails/${product._id}`}
                  onClick={() => setIsCartOpen(false)}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                {/* Product Details */}
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-xs">{product.name}</h4>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
