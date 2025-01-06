import { useTheme } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ProductDropdown() {
  const theme = useTheme().palette.mode;
  const featuredProducts = [
    {
      id: 1,
      name: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1596356453261-0d265ae2520a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "New Arrivals",
      image:
        "https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Best Sellers",
      image:
        "https://images.unsplash.com/photo-1477901492169-d59e6428fc90?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Perfect For You",
      image:
        "https://plus.unsplash.com/premium_photo-1699973056972-499716bc0305?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div
      className={`absolute z-50 top-full left-1/2 transform -translate-x-1/3 w-[1200px] ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      } shadow-lg rounded-b-xl`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-8">
        {/* Categories */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="w-full relative group">
              <Link
                to="#"
                className="hover:text-orange-500 flex items-center justify-between "
              >
                Women{" "}
                <FaArrowRight
                  className="absolute right-10  transition-all duration-200 ease-in-out"
                  size={16}
                />
              </Link>
            </li>
            <li className="w-full relative">
              <Link
                to="#"
                className="hover:text-orange-500 flex items-center justify-between group"
              >
                Men{" "}
                <FaArrowRight
                  className="absolute right-10 transition-all duration-200 ease-in-out"
                  size={16}
                />
              </Link>
            </li>
            <li className="w-full relative">
              <Link
                to="#"
                className="hover:text-orange-500 flex items-center justify-between group"
              >
                Accessories{" "}
                <FaArrowRight
                  className="absolute right-10 transition-all duration-200 ease-in-out"
                  size={16}
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Featured Products */}
        <div className="col-span-3">
          <h3 className="font-semibold mb-4">Featured</h3>
          <div className="grid grid-cols-2 gap-4">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to="#"
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <p className="text-white font-medium">{product.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
