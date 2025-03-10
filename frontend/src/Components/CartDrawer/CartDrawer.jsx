import { useEffect, useRef, useState } from "react";
import CartActions from "./CartActions";
import ShippingNotification from "./ShippingNotification";
import CartItem from "./CartItem";
import RecommendedProducts from "./RecommendedProducts";
import { IoClose } from "react-icons/io5";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { FaRegFaceSadTear } from "react-icons/fa6";

export default function CartDrawer({ setIsCartOpen, IsCartOpen }) {
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const subtotal = user?.cartItems?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const theme = useTheme().palette.mode;

  const [slider, setslider] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/products`
      );
      const data = await response.json();
      setslider(data.products.slice(30, 40));
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* Backdrop */}
      {IsCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 transition-opacity"></div>
      )}

      {/* Drawer */}
      <div
        ref={ref}
        className={`fixed right-0 ${
          theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
        }   z-50 ${
          IsCartOpen ? "translate-x-0" : "translate-x-full"
        } top-0 h-full w-full max-w-md shadow-xl transform transition-all duration-300 ease-in-out overflow-hidden flex flex-col`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between p-6 border-b ${
            theme === "dark"
              ? "bg-[#111111] text-white"
              : " text-black bg-gray-50"
          }`}
        >
          <h2 className="text-xl font-bold">SHOPPING CART</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsCartOpen(false)}
          >
            <IoClose className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <ShippingNotification />

          <div className="space-y-4">
            {user.cartItems.length > 0 ? (
              user?.cartItems?.map((item) => (
                <CartItem key={item.id} item={item} />
              ))
            ) : (
              <div className="space-y-4 flex flex-col items-center">
                <p className="text-gray-500 flex items-center gap-1">
                  Your cart is empty.{" "}
                  <span>
                    <FaRegFaceSadTear className="h-5 w-5 " />
                  </span>{" "}
                </p>
                <button
                  className="w-full bg-black text-white py-3 rounded-md hover:bg-primary-dark transition-colors"
                  onClick={() => setIsCartOpen(false)}
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            )}
          </div>

          <CartActions />
          <RecommendedProducts setIsCartOpen={setIsCartOpen} slider={slider} />

          <div className="space-y-4 pt-6 border-t">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Subtotal:</span>
              <span className="font-bold text-gray-900">
                ${subtotal.toFixed(2)} USD
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Taxes and shipping calculated at checkout
            </p>
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-primary-dark transition-colors">
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
