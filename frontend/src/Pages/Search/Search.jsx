import { FilterAlt } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SearchTemplate from "./SearchTemplate";
import SearchFinalProducts from "./SearchFinalProducts";

const categories = [
  { id: 1, name: "Electronic" },
  { id: 2, name: "Accessories" },
  { id: 3, name: "Home" },
  { id: 4, name: "Bags" },
  { id: 5, name: "Sports" },
  { id: 6, name: "Clothing" },
];
const priceRanges = [
  { id: 1, min: 0, max: 50 },
  { id: 2, min: 51, max: 100 },
  { id: 3, min: 101, max: 200 },
  { id: 4, min: 201, max: 500 },
  { id: 5, min: 501, max: 1000 },
];

const parentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 1.5,
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeInOut" } },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeInOut" } },
};

export default function Search() {
  const theme = useTheme().palette.mode;
  const [IsExpended, setIsExpended] = useState(true);
  const [Querry, setQuerry] = useState(null);
  const [Catagory, setCatagory] = useState(null);
  const [Price, setPrice] = useState(null);
  const [FetchData, setFetchData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const API = process.env.REACT_APP_BASE_URL;

  let itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(FetchData.length / itemsPerPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setcurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  const FilterHandler = () => {
    setIsExpended((prev) => !prev);
  };
  useEffect(() => {
    const FetchAllData = async () => {
      const res = await fetch(`${API}/api/search`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setFetchData(data.SearchData);
    };

    FetchAllData();
  }, []);

  const filteredDataToQuery = FetchData.filter((item) => {
    return item.name.toLowerCase().includes(Querry?.toLowerCase());
  });

  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split(" - ").map(Number);
    setPrice({ min, max });
  };

  function Data() {
    let PrdouctData = FetchData;

    if (Querry) {
      PrdouctData = filteredDataToQuery;
    }
    if (Catagory && Price) {
      PrdouctData = FetchData.filter((item) => {
        const isInCategory = item.category
          ?.toLowerCase()
          .includes(Catagory?.toLowerCase());
        const isInPriceRange =
          Number(item.price)?.toFixed(2) >= Price?.min &&
          Number(item.price)?.toFixed(2) <= Price?.max;
        return isInCategory && isInPriceRange;
      });
    } else if (Catagory) {
      PrdouctData = FetchData.filter((item) =>
        item.category?.toLowerCase().includes(Catagory?.toLowerCase())
      );
    } else if (Price) {
      PrdouctData = FetchData.filter(
        (item) =>
          Number(item.price)?.toFixed(2) >= Price?.min &&
          Number(item.price)?.toFixed(2) <= Price?.max
      );
    }

    /**
     * Slice the CatagoryData array to get the items to display on the current page.
     */
    const currentItems = PrdouctData.slice(indexOfFirstItem, indexOfLastItem);

    return currentItems.map(({ img, name, description, price, id }) => (
      <SearchTemplate
        id={id}
        img={img}
        name={name}
        description={description}
        price={price}
        key={Math.random()}
      />
    ));
  }

  const result = Data();

  return (
    <div
      className={`flex flex-col min-h-screen  ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <header
        className={`${
          theme === "dark"
            ? "bg-gray-900"
            : "bg-gradient-to-l from-orange-400 to-orange-700"
        } text-white py-4 px-6`}
      >
        <div className="container mx-auto flex items-center relative ">
          <div
            onClick={FilterHandler}
            className={`md:hidden cursor-pointer ${
              IsExpended
                ? "absolute -right-3 -bottom-0 h-8 w-8 rounded-full z-50"
                : "absolute -right-3 -bottom-6 h-16 w-8 bg-white items-center text-center text-black rounded-t-full z-50"
            } transition-all duration-500 ease-in-out`}
          >
            <FilterAlt />
          </div>
          <div className="relative flex justify-center gap-6 items-center w-full ">
            <div className="relative w-full pr-10">
              <input
                type="text"
                name="search"
                id="search"
                onChange={(e) => setQuerry(e.target.value)}
                className={`transition-all duration-300 ease-in-out border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 w-full pl-12 text-black pr-4`}
                placeholder="Search..."
              />
              <button
                className="absolute left-1 top-1/2 transform -translate-y-1/2 border border-transparent p-1 bg-gray-400  rounded-lg"
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* {Smaller Screens filters} */}
      <div
        className={`${
          IsExpended ? "hidden" : "block"
        } md:hidden bg-white rounded-md shadow-md p-6 text-black mb-4 flex flex-col justify-between text-center`}
      >
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="flex justify-between ">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate={IsExpended ? "hidden" : "visible"}
            className="mb-6"
          >
            <h3 className="text-sm font-semibold mb-2">Categories</h3>
            <motion.div variants={childVariants} className="grid gap-2">
              {categories.map((category, i) => (
                <label key={i} className="flex items-center gap-2 font-normal">
                  <input
                    type="radio"
                    id={`category-${category.id}`}
                    className="form-radio"
                    value={category.name}
                    name="category"
                    onChange={(e) => setCatagory(e.target.value)}
                  />{" "}
                  {category.name}
                </label>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate={IsExpended ? "hidden" : "visible"}
            className="mb-6"
          >
            <h3 className="text-sm font-semibold mb-2">Price Range</h3>
            <motion.div variants={childVariants} className="grid gap-2">
              {priceRanges.map((range, i) => (
                <label key={i} className="flex items-center gap-2 font-normal">
                  <input
                    type="radio"
                    id={`price-${range.id}`}
                    value={`${range.min} - ${range.max}`}
                    name="price"
                    onChange={(eo) => {
                      handlePriceChange(eo);
                    }}
                    className="form-radio"
                  />
                  {range.min === 0
                    ? `Under $${range.max}`
                    : `$${range.min} - $${range.max}`}
                </label>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 my-5">
        {/* {Bigger Screens filters} */}
        <div className="hidden md:block bg-white rounded-md shadow-md p-6 text-black">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Categories</h3>
            <div className="grid gap-2">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center gap-2 font-normal"
                >
                  <input
                    type="radio"
                    id={`category-${category.id}`}
                    className="form-radio"
                    value={category.name}
                    name="category"
                    onChange={(e) => setCatagory(e.target.value)}
                  />{" "}
                  {category.name}
                </label>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Price Range</h3>
            <div className="grid gap-2">
              {priceRanges.map((range) => (
                <label
                  key={range.id}
                  className="flex items-center gap-2 font-normal"
                >
                  <input
                    type="radio"
                    id={`price-${range.id}`}
                    value={`${range.min} - ${range.max}`}
                    name="price"
                    onChange={(eo) => {
                      handlePriceChange(eo);
                    }}
                    className="form-radio"
                  />
                  {range.min === 0
                    ? `Under $${range.max}`
                    : `$${range.min} - $${range.max}`}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* {Search Result} */}
        <SearchFinalProducts result={result} />
      </div>

      {/* pagination */}
      <div className="w-full flex justify-center items-center my-9">
        <div className="items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
          <span className="block">
            Page {currentPage} of {totalPages}
          </span>
          <div className="space-x-1">
            <button
              onClick={handlePreviousPage}
              title="previous"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md hover:shadow-xl transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={handleNextPage}
              title="next"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md hover:shadow-xl transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
