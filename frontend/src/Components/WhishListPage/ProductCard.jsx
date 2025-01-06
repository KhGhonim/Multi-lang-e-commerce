import { motion } from "framer-motion";
import { CiShoppingBasket, CiTrash } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../Redux/userSlice";
import { toast } from "react-toastify";

export default function ProductCard({ id, item, onDelete }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToBasket(product));
    toast.success("Added to cart");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={item.img}
          loading="lazy"
          alt={item.name}
          className="w-full h-[300px] object-cover"
        />
        <button
          onClick={() => onDelete(id)}
          className="absolute top-2 right-2 p-2 bg-orange-500 text-white rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
          aria-label="Remove from wishlist"
        >
          <CiTrash className="w-5 h-5" />
        </button>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full absolute inset-0 flex flex-col items-center justify-center gap-4"
        >
          <div className="relative">
            <button className="w-56 bg-white hover:bg-gray-950 text-gray-900 hover:text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-300">
              <span>Quick view</span>
              <FaEye className="w-4 h-4" />
            </button>
          </div>
          <div
            onClick={() => {
              handleAddToCart(item);
            }}
            className="relative"
          >
            <button className="w-56 bg-white hover:bg-gray-950 text-gray-900 hover:text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-300">
              <span>Add to Cart</span>
              <CiShoppingBasket className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="p-4">
        <h3 className="text-lg text-black font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center gap-2 text-black">
          <span className="text-lg font-bold">${item.price}</span>
          {item.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${item.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
