import { useDispatch } from "react-redux";
import { addToBasket } from "../../Redux/userSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function ProductCard({
  name,
  description,
  price,
  img,
  alt,
  id,
}) {
  const dispatch = useDispatch();
  const CartHandler = () => {
    dispatch(addToBasket({ name, description, price, img, alt }));
    toast.success("Added to cart");
  };
  return (
    <Link
      to={`/ProductDetails/${id}`}
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <img
        className="w-full h-72 object-cover object-center"
        src={img}
        alt="Product"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600 line-clamp-3">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          <button
            onClick={CartHandler}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
