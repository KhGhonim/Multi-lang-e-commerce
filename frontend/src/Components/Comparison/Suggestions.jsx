import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import useGetAllProducts from "../../Hooks/useGetAllProducts";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../Redux/userSlice";
import { toast } from "react-toastify";

export default function Suggestions() {
  const { data, loading } = useGetAllProducts();
  const dispatch = useDispatch();
  const AddToCartHandler = (product) => {
    dispatch(addToBasket(product));
    toast.success("Product added to cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 relative">
      <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Discover Products You’ll Love
      </h3>

      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper relative"
      >
        {loading ? (
          <div className="flex w-full h-full items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          data?.map((product) => (
            <SwiperSlide key={product._id}>
              <div className="bg-white cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100">
                <div className="relative w-full h-60">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 my-2">
                  {product.name}
                </h4>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.ratingCount} reviews)
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  {product.description}
                </p>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  ${product.price}
                </p>
                <button
                  onClick={() => AddToCartHandler(product)}
                  className="w-56 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-colors"
                >
                  <FaShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}
