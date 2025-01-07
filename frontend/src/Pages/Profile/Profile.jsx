import { useSelector } from "react-redux";
import { useState } from "react";
import {
  FaBell,
  FaCamera,
  FaDownload,
  FaGlobe,
  FaHeart,
  FaMoon,
  FaShield,
  FaSun,
  FaUser,
} from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import PhoneNavbar from "Components/Header/Phone/PhoneNavbar";
import { mockOrders } from "DB/db";

export default function Profile() {
  const { currentUser, FavoirteProducts } = useSelector(
    // @ts-ignore
    (state) => state.UserStore
  );
  const [activeTab, setActiveTab] = useState("profile");
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: FaUser },
    { id: "orders", label: "Orders", icon: FaShoppingBag },
    { id: "saved", label: "Saved Items", icon: FaHeart },
    { id: "settings", label: "Settings", icon: CiSettings },
  ];

  const pathname = useLocation().pathname;

  return (
    <div className={`min-h-screen max-lg:py-12`}>
      <div className="max-w-7xl mx-auto px-4 pt-8">
        {/* Header Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src="https://avatar.iran.liara.run/public/45"
                alt="Profile"
                loading="lazy"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600 transition">
                <FaCamera size={16} />
              </button>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold dark:text-white">
                {getGreeting()}, {currentUser?.user?.Firstname}{" "}
                {currentUser?.user?.LastName}!
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Email: {currentUser?.user?.Email}
              </p>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-orange-500 h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Profile completion: 70%
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-4 mt-6 border-b max-lg:overflow-scroll">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors
                    ${
                      activeTab === tab.id
                        ? "border-b-2 border-orange-500 text-orange-500"
                        : "text-gray-600 hover:text-orange-500 dark:text-gray-300"
                    }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          {activeTab === "profile" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold dark:text-white">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={currentUser.user?.Firstname + ' ' + currentUser.user?.LastName}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={currentUser.user?.Email}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Country
                  </label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold dark:text-white">
                Order History
              </h2>
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="font-medium dark:text-white">
                          Order #{order.id}
                        </p>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm
                        ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium dark:text-white">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">${item.price}</p>
                        </div>
                      </div>
                    ))}
                    <div className="mt-4 flex justify-between items-center">
                      <button className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
                        <FaDownload size={16} />
                        Download Invoice
                      </button>
                      <p className="font-medium dark:text-white">
                        Total: ${order.total}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "saved" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold dark:text-white">
                Saved Items
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FavoirteProducts.length > 0 ? (
                  FavoirteProducts.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <h3 className="font-medium dark:text-white">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="font-bold text-blue-500">${item.price}</p>
                        {item.originalPrice > item.price && (
                          <p className="text-sm text-gray-500 line-through">
                            ${item.originalPrice}
                          </p>
                        )}
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                          Add to Cart
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-500 transition-all duration-300 ease-in-out">
                          <FaHeart size={20} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center w-full text-gray-500">
                    No Favoirte items found.
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold dark:text-white">
                Settings
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FaBell className="text-gray-500" />
                    <div>
                      <p className="font-medium dark:text-white">
                        Notifications
                      </p>
                      <p className="text-sm text-gray-500">
                        Manage notification preferences
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {true ? (
                      <FaMoon className="text-gray-500" />
                    ) : (
                      <FaSun className="text-gray-500" />
                    )}
                    <div>
                      <p className="font-medium dark:text-white">Dark Mode</p>
                      <p className="text-sm text-gray-500">
                        Toggle dark mode theme
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={true}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FaGlobe className="text-gray-500" />
                    <div>
                      <p className="font-medium dark:text-white">Language</p>
                      <p className="text-sm text-gray-500">
                        Choose your preferred language
                      </p>
                    </div>
                  </div>
                  <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FaShield className="text-gray-500" />
                    <div>
                      <p className="font-medium dark:text-white">
                        Security Activity
                      </p>
                      <p className="text-sm text-gray-500">
                        View recent account activity
                      </p>
                    </div>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600">
                    View Log
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {pathname === "/login" || pathname === "/register" ? null : (
        <PhoneNavbar />
      )}
    </div>
  );
}
