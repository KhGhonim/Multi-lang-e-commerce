import { FaCar, FaCarSide } from "react-icons/fa";

export default function ShippingNotification() {
  return (
    <div className="bg-gradient-to-r group from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-4">
        {/* Icon Container */}
        <div className="bg-green-500 rounded-full p-3 shadow-lg">
          <FaCar className="h-6 w-6 text-white" />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <p className="text-green-800 font-semibold text-lg">
            Congratulations! You've got free shipping!
          </p>
          <p className="text-green-600 text-xs mt-1">
            Your order qualifies for our premium delivery service
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 relative ">
        <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: "80%" }} 
          ></div>
        </div>

        {/* Moving Car Icon */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transform transition-transform duration-500 group-hover:translate-x-2"
          style={{ left: "70%" }} 
        >
          <div className="bg-white rounded-full p-2 shadow-md border border-green-100">
            <FaCarSide className="h-5 w-5 text-green-500 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
