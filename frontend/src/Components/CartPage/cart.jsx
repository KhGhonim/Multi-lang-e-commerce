import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveItem } from "../../Redux/userSlice";
import { toast } from "react-toastify";

export default function Cart() {
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto mt-10 h-dvh">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h1>

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
        <div className="bg-white rounded-lg shadow-md overflow-hidden overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-gray-500 font-bold uppercase tracking-wider">
                  Product Image
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-bold uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-bold uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-bold uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-bold uppercase tracking-wider">
                  Total
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-bold uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {user.cartItems.map((item, index) => {
                // Remove any non-numeric characters except for the comma
                const formattedPrice = item.price
                  .replace(/[^0-9,]/g, "")
                  .replace(",", ".");

                // Convert to number and calculate the total
                const total = Number(formattedPrice) * Number(item.quantity);

                return (
                  <tr key={index}>
                    <td className="px-4 py-3 border-t border-gray-200">
                      <div className="flex items-center text-xs">
                        <img
                          className="w-16 h-16 rounded-lg"
                          src={item.img}
                          alt={item.feature}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3 border-t border-gray-200">
                      <div>
                        <p className="text-gray-900 font-medium">
                          {item.feature}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-t border-gray-200 text-gray-900">
                      {item.price}
                    </td>
                    <td className="px-4 py-3 border-t border-gray-200">
                      <input
                        type="number"
                        value={item.quantity}
                        className="w-20 text-center focus:outline-none"
                      />
                    </td>
                    <td className="px-4 py-3 border-t border-gray-200 text-gray-900">
                      ${total}
                    </td>
                    <td className="px-4 py-3 border-t border-gray-200">
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
            <p className="text-gray-900 font-bold">Total:</p>
            <span className="text-gray-900 font-bold">$</span>
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
