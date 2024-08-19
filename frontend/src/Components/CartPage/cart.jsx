import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveItem } from "../../Redux/userSlice";
import { toast } from "react-toastify";
import { useTheme } from "@mui/material";

export default function Cart() {
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const dispatch = useDispatch();
  const theme = useTheme().palette.mode;

  return (
    <div className="container mx-auto mt-10 h-dvh">
      <h1
        className={`text-2xl font-bold ${
          theme === "dark" ? "text-white" : "text-black"
        } mb-10`}
      >
        Your Cart
      </h1>

      {user.cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-gray-500">Your cart is empty.</p>
          <Link
            to={"/"}
            className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div
          className={`${
            theme === "dark" ? "bg-black" : "bg-white"
          } rounded-lg shadow-md overflow-hidden overflow-x-auto p-7`}
        >
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th
                  className={`rounded-lg shadow-md overflow-hidden overflow-x-auto ${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-center`}
                >
                  Product Image
                </th>
                <th
                  className={` rounded-lg shadow-md overflow-hidden overflow-x-auto ${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-center`}
                >
                  Product Name
                </th>
                <th
                  className={` rounded-lg shadow-md overflow-hidden overflow-x-auto ${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-center`}
                >
                  Price
                </th>
                <th
                  className={` rounded-lg shadow-md overflow-hidden overflow-x-auto ${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-center`}
                >
                  Quantity
                </th>
                <th
                  className={`rounded-lg shadow-md overflow-hidden overflow-x-auto ${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-center`}
                >
                  Total
                </th>
                <th
                  className={` rounded-lg shadow-md overflow-hidden overflow-x-auto ${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-center`}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {user.cartItems.map((item, index) => {
                const total = Number(item.price) * Number(item.quantity);

                return (
                  <tr key={index}>
                    <td className="px-4 py-3 border-t border-gray-200 ">
                      <div className="flex items-center text-xs">
                        <img
                          className="w-16 h-16 rounded-lg"
                          src={item.img}
                          alt={item.name}
                        />
                      </div>
                    </td>
                    <td
                      className={`px-4 py-3 border-t border-gray-200 text-center`}
                    >
                      <div>
                        <p className=" font-bold">{item.name}</p>
                      </div>
                    </td>
                    <td
                      className={`px-4 py-3 border-t border-gray-200 text-center`}
                    >
                      {item.price}
                    </td>
                    <td
                      className={`px-4 py-3 border-t border-gray-200 text-center`}
                    >
                  {item.quantity}
                    </td>
                    <td className="px-4 py-3 border-t border-gray-200 text-center">
                      ${total}
                    </td>
                    <td className="px-4 py-3 border-t border-gray-200 text-center">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                          dispatch(RemoveItem(item));
                          toast.success("Item removed/decremented from cart");
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="px-4 py-4 border-t border-gray-200 flex justify-between items-center">
            <p className=" font-bold">Total:</p>
            <span className=" font-bold">$</span>
          </div>
          <div className="px-4 py-4 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
