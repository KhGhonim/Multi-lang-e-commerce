import { useDispatch } from "react-redux";
import { addToBasket } from "../../Redux/userSlice";
import { toast } from "react-toastify";

export default function ProductCard({ name, description, price, img, alt }) {
  const dispatch = useDispatch();
  const CartHandler = () => {
    dispatch(addToBasket({ name, description, price, img, alt }));
    toast.success("Added to cart");
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={img} alt={alt} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-600 font-semibold">{price}</span>
          <button
            onClick={CartHandler}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus:outline-none bg-blue-600 text-white hover:bg-blue-500 h-9 rounded-md px-3"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
