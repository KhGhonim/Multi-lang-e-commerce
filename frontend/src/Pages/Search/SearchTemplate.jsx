import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToBasket } from "../../Redux/userSlice";
import { toast } from "react-toastify";

export default function SearchTemplate({
  id,
  img,
  name,
  description,
  price,
}) {
  const dispatch = useDispatch();
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);

  const CartHandler = () => {
    if (user.currentUser === null) {
      toast.warning("Please login to add product to favorites");
    } else {
      dispatch(addToBasket({ id, img, name, description, price }));
      toast.success("Added to cart");
    }
  };
  return (
<div
  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
>
  <Link to={`/ProductDetails/${id}`} className="block">
    <img
      src={img}
      alt={name}
      className="rounded-t-lg w-full h-64 object-cover"
    />
  </Link>
  <div className="p-4">
    <h3 className="text-xl font-bold text-gray-800 truncate">{name}</h3>
    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>
  </div>
  <div className="p-4 flex justify-between items-center border-t border-gray-100">
    <p className="text-lg font-semibold text-black">${price}</p>
    <button
      type="button"
      onClick={CartHandler}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md shadow-sm transition-all duration-200"
    >
      Add to Cart
    </button>
  </div>
</div>

  );
}
