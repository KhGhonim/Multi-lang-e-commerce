import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { addToBasket } from "../../Redux/userSlice";
import { toast } from "react-toastify";
import Comments from "../../Components/Comments/Comments";
import { CircularProgress, useTheme } from "@mui/material";
import Magnifier from "react18-image-magnifier";
import { useTranslation } from "react-i18next";
import PhoneNavbar from "Components/Header/Phone/PhoneNavbar";

export default function ProductDetails() {
  const [comments, setcomments] = useState(false);
  const theme = useTheme().palette.mode;
  const [Isloading, setIsloading] = useState(false);

  const HandleComments = () => {
    setcomments((prev) => !prev);
  };
  const [Product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsloading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/products/${id}`
      );
      const data = await response.json();
      setProduct(data.product);
      setIsloading(false);
    };
    fetchProduct();
  }, [id]);

  const dispatch = useDispatch();
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const nevigate = useNavigate();

  const BasketHandler = (P) => {
    if (user.currentUser === null) {
      toast.warning("Please login to add to cart");
      nevigate("/login");
    } else {
      dispatch(addToBasket(P));
      toast.success("Added to basket");
    }
  };

  const { t } = useTranslation();
  return (
    <div
      className={`relative py-10 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto my-12 p-6 rounded-lg shadow-lg">
        {Isloading ? (
          <div className="flex justify-center items-center h-screen">
            <CircularProgress />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {/* Image Section */}
            <div className="relative rounded-lg">
              <Magnifier
                src={Product?.img}
                className="rounded-lg w-full h-auto object-cover"
              />
              <div className="mt-4 text-center text-xl font-semibold">
                {Product?.name}
              </div>
            </div>

            {/* Product Info Section */}
            <div>
              <h1 className="text-3xl font-bold mb-6">
                {Product?.description}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371.26 1.605.643l.738 1.405c.234.447.177 1.072-.219 1.455l-5.28 8.073c-.27.409-.683.617-1.083.54-.396-.077-.792-.406-.99-.807L11.049 2.927z" />
                  </svg>
                  <span className="ml-2 text-lg">{Product?.rating}</span>
                </div>
                <span>{Product?.ratingCount} Reviews</span>
                <span>| {Product?.ratingCount} Q&A</span>
              </div>

              <div className="flex items-center mb-6 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="ml-2">27.5B in carts - Limited stock!</span>
              </div>

              <p className="text-4xl font-bold mb-6">$ {Product?.price}</p>
              <button
                type="button"
                onClick={() => BasketHandler(Product)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition ease-in-out duration-300 mb-6"
              >
                {t("Add to basket")}
              </button>

              <div className="bg-gray-200 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Estimated Shipping: Within 3 days
                </h3>
                <p className="text-gray-600">
                  Your order will be shipped to you within 3 days.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Highlights Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Additional name</h3>
              <p>Organik</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Volume</h3>
              <p>100-199 ml</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Impact</h3>
              <p>Besleyici / Onarıcı</p>
            </div>
          </div>
        </div>

        {/* Shipping and Stock Information */}
        <div className="mt-10">
          <h3 className="font-bold text-lg mb-4">
            This product will be sent by HC CARE.
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>More than 100 stocks available at promotional prices.</li>
            <li>The product price is set by the seller.</li>
            <li>Sellers compete on pricing, delivery, and ratings.</li>
          </ul>
        </div>

        <Comments
          comments={comments}
          HandleComments={HandleComments}
          title={Product?.name}
        />
      </div>

        <PhoneNavbar />
    </div>
  );
}
