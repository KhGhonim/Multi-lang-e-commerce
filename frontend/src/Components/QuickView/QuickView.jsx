import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToBasket, addToMyFavorites } from "../../Redux/userSlice";

export default function QuickView({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAddToCart = (product2) => {
    dispatch(addToBasket(product2));
    toast.success("Added to cart");
  };
  if (product?.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 ">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 bg-black text-white hover:bg-gray-600 transition-all ease-in-out duration-300"
        >
          <IoClose className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative aspect-square">
            <img
              src={product.img}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className={`p-6 space-y-6 text-black`}>
            <div>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-2xl">${product.price}</p>
            </div>

            <p className="text-muted-foreground">
              Go kalles this summer with this vintage navy and white striped
              v-neck t-shirt from the Nike. Perfect for pairing with denim and
              white kicks for a stylish kalles vibe.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex border rounded-md">
                <button
                  className="px-3 py-1 border-r hover:bg-gray-100"
                  onClick={() => setQuantity((prev) => prev - 1)}
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button
                  className="px-3 py-1 border-l hover:bg-gray-100"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="flex-1 py-2 font-bold rounded-full bg-[#7fd4d4] hover:bg-[#6bc1c1]  transition-all ease-in-out duration-300"
              >
                ADD TO CART
              </button>

              <button
                onClick={() => {
                  dispatch(addToMyFavorites(product));
                  toast.success(
                    "Added to my Wishlist, check your Wishlist section"
                  );
                }}
                className="rounded-full"
              >
                <FaHeart className="h-5 w-5 hover:text-red-500  transition-all ease-in-out duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
