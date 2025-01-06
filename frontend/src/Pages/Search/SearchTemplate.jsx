import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToBasket } from "../../Redux/userSlice";
import { toast } from "react-toastify";

export default function SearchTemplate({
  key,
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
      key={`${key}-${id}`}
      className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="block">
        <Link to={`/ProductDetails/${id}`}>
          <img
            src={img}
            alt={name}
            className="rounded-t-md w-full h-72 object-cover"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="p-4 flex justify-between items-center">
          <p className="text-sm text-black font-bold">${price}</p>

          <button
            type="button"
            onClick={CartHandler}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
