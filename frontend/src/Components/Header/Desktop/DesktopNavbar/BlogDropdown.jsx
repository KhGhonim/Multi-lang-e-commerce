import { useTheme } from "@mui/material";
import { blogPosts } from "DB/db";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function BlogDropdown() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const theme = useTheme().palette.mode;
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);

  return (
    <div
      className={`absolute z-50 top-full ${user.direction === "ltr" ? "right-1/2 transform translate-x-1/3" : "left-1/2 transform -translate-x-1/3"}  w-[1200px] ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      } shadow-lg rounded-b-xl`}
    >
      <div className={`p-8`}>
        <div className="relative">
          <h3 className={`font-semibold text-lg mb-4`}>Latest from the Blog</h3>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {blogPosts.map((post) => (
                  <Link
                    to={`/blog`}
                    key={post.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="grid grid-cols-2 gap-8">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                        <h4 className="text-xl font-medium mt-2">
                          {post.title}
                        </h4>
                        <p className="text-gray-600 mt-2">{post.excerpt}</p>
                        <Link
                          to="#"
                          className={`${
                            theme === "dark"
                              ? "text-orange-600"
                              : "text-blue-600"
                          } mt-4 hover:underline`}
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className={`absolute left-0 top-1/2 border -translate-y-1/2 p-2 ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-800 text-white border-orange-500"
                  : "bg-white/80 hover:bg-white text-black border-gray-50"
              } rounded-full shadow-lg `}
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-0 top-1/2 border -translate-y-1/2 p-2 ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-800 text-white border-orange-500"
                  : "bg-white/80 hover:bg-white text-black border-gray-50"
              } rounded-full shadow-lg `}
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
