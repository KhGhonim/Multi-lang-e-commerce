
export default function cart() {
  return (
    <div className="container mx-auto mt-10 h-dvh">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h1>

      <div className="flex flex-col items-center justify-center py-10">
        <p className="text-gray-500">Your cart is empty.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Continue Shopping
        </button>
      </div>

      {
        // <div className="bg-white rounded-lg shadow-md overflow-hidden">
        //   <table className="w-full table-auto">
        //     <thead>
        //       <tr>
        //         <th className="px-4 py-3 text-left text-gray-500 font-bold uppercase tracking-wider">
        //           Product
        //         </th>
        //         <th className="px-4 py-3 text-left text-gray-500 font-bold uppercase tracking-wider">
        //           Price
        //         </th>
        //         <th className="px-4 py-3 text-left text-gray-500 font-bold uppercase tracking-wider">
        //           Quantity
        //         </th>
        //         <th className="px-4 py-3 text-left text-gray-500 font-bold uppercase tracking-wider">
        //           Total
        //         </th>
        //         <th className="px-4 py-3 text-left text-gray-500 font-bold uppercase tracking-wider">
        //           Action
        //         </th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {cartItems.map((item, index) => (
        //         <tr key={index}>
        //           <td className="px-4 py-3 border-t border-gray-200">
        //             <div className="flex items-center">
        //               <img
        //                 className="w-16 h-16 rounded-lg"
        //                 src={item.imageUrl}
        //                 alt={item.name}
        //               />
        //               <div className="ml-4">
        //                 <p className="text-gray-900 font-medium">{item.name}</p>
        //                 {/* Optional: Display other product details */}
        //               </div>
        //             </div>
        //           </td>
        //           <td className="px-4 py-3 border-t border-gray-200 text-gray-900">
        //             ${item.price.toFixed(2)}
        //           </td>
        //           <td className="px-4 py-3 border-t border-gray-200">
        //             <input
        //               type="number"
        //               min="1"
        //               value={item.quantity}
        //               className="w-20 text-center focus:outline-none"
        //               onChange={(e) => {
        //                 const updatedItems = [...cartItems];
        //                 updatedItems[index].quantity = parseInt(e.target.value);
        //                 updateCartItems(updatedItems);
        //               }}
        //             />
        //           </td>
        //           <td className="px-4 py-3 border-t border-gray-200 text-gray-900">
        //             ${(item.price * item.quantity).toFixed(2)}
        //           </td>
        //           <td className="px-4 py-3 border-t border-gray-200">
        //             <button
        //               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        //               onClick={() => removeItem(index)}
        //             >
        //               Remove
        //             </button>
        //           </td>
        //         </tr>
        //       ))}
        //     </tbody>
        //   </table>
        //   <div className="px-4 py-4 border-t border-gray-200 flex justify-between items-center">
        //     <p className="text-gray-900 font-bold">Total:</p>
        //     <span className="text-gray-900 font-bold">
        //       ${calculateTotal().toFixed(2)}
        //     </span>
        //   </div>
        //   <div className="px-4 py-4 flex justify-end">
        //     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        //       Proceed to Checkout
        //     </button>
        //   </div>
        // </div>
      }
    </div>
  );
}
