import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../Redux/userSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function ProductCard({
  name,
  description,
  price,
  img,
  alt,
  id,
  quantity,
  key,
}) {
  const dispatch = useDispatch();
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const nevigate = useNavigate();

  const CartHandler = () => {
    if (user.currentUser === null) {
      toast.warning("Please login to add to cart");
      nevigate("/login");
    } else {
      dispatch(addToBasket({ name, description, price, img, alt, quantity }));
      toast.success("Added to basket");
    }
  };
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl">
      <Link to={`/ProductDetails/${id}`}>
        <img
          className="w-full h-72 object-cover object-center"
          src={img}
          loading="lazy"
          alt={alt}
        />
      </Link>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          <button
            onClick={CartHandler}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
