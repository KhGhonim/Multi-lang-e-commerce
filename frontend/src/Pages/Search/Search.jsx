import { FilterAlt } from "@mui/icons-material";
import { CircularProgress, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import SearchTemplate from "./SearchTemplate";
import SearchFinalProducts from "./SearchFinalProducts";
import { categories, priceRanges } from "DB/db";
import PhoneNavbar from "Components/Header/Phone/PhoneNavbar";
import useFetchSearchData from "../../Hooks/useSeach";
import { ToastContainer } from "react-toastify";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  const theme = useTheme().palette.mode;
  const [IsExpended, setIsExpended] = useState(false);
  const [Querry, setQuerry] = useState(null);
  const [Catagory, setCatagory] = useState(null);
  const [Price, setPrice] = useState(null);
  const [currentPage, setcurrentPage] = useState(1);
  const { data, loading } = useFetchSearchData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(data.length / itemsPerPage);
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

  const filteredDataToQuery = data.filter((item) => {
    return item.name.toLowerCase().includes(Querry?.toLowerCase());
  });

  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split(" - ").map(Number);
    setPrice({ min, max });
  };

  function Data() {
    let PrdouctData = data;

    if (Querry) {
      PrdouctData = filteredDataToQuery;
    }
    if (Catagory && Price) {
      PrdouctData = data.filter((item) => {
        const isInCategory = item.category
          ?.toLowerCase()
          .includes(Catagory?.toLowerCase());
        const isInPriceRange =
          Number(item.price)?.toFixed(2) >= Price?.min &&
          Number(item.price)?.toFixed(2) <= Price?.max;
        return isInCategory && isInPriceRange;
      });
    } else if (Catagory) {
      PrdouctData = data.filter((item) =>
        item.category?.toLowerCase().includes(Catagory?.toLowerCase())
      );
    } else if (Price) {
      PrdouctData = data.filter(
        (item) =>
          Number(item.price)?.toFixed(2) >= Price?.min &&
          Number(item.price)?.toFixed(2) <= Price?.max
      );
    }

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
        theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"
      }`}
    >
      <ToastContainer />

      <header
        className={`sticky top-0 z-50 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gradient-to-r from-gray-800  to-gray-950 text-white"
        } py-4 px-6 shadow-lg`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="relative flex-1">
            <input
              type="text"
              name="search"
              id="search"
              onChange={(e) => setQuerry(e.target.value)}
              className="border text-black border-gray-300 rounded-full px-5 py-2 pl-14 outline-none focus:ring-2 focus:ring-gray-400 w-full"
              placeholder="Search for products..."
            />
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-500 rounded-full shadow-lg hover:bg-gray-600"
              aria-label="Search"
            >
              <CiSearch />
            </button>
          </div>
        </div>
      </header>

      {/* {Smaller Screens filter overlay} */}
      <div
        className={`${
          IsExpended ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out`}
        onClick={() => setIsExpended(false)}
      ></div>

      {/* Filters for small screens */}
      <div
        className={`bg-white rounded-t-3xl shadow-xl pt-6 pb-16 px-6 fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ease-in-out ${
          IsExpended ? "translate-y-0" : "translate-y-full"
        } lg:hidden`}
      >
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value={category.name}
                  className="form-radio accent-blue-500"
                  onChange={(e) => setCatagory(e.target.value)}
                />
                <span className="text-gray-800">{category.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Price Range</h3>
          <div className="grid gap-2">
            {priceRanges.map((range, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  value={`${range.min} - ${range.max}`}
                  className="form-radio accent-blue-500"
                  onChange={handlePriceChange}
                />
                <span>
                  {range.min === 0
                    ? `Under $${range.max}`
                    : `$${range.min} - $${range.max}`}
                </span>
              </label>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsExpended(false)}
          className="mt-4 bg-blue-600 text-white rounded-lg px-4 py-2"
        >
          Apply Filters
        </button>
      </div>

      {/* {Bigger Screens filters} */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 my-5">
        <div className="hidden md:block bg-white rounded-lg shadow-lg p-8 text-gray-800">
          <h2 className="text-2xl font-semibold mb-6">Filters</h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-3">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className={`inline-flex items-center gap-2 cursor-pointer border border-gray-300 rounded-full px-4 py-2 hover:bg-blue-50 ${
                    Catagory === category.name
                      ? "bg-blue-100 text-blue-600"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    id={`category-${category.id}`}
                    className="hidden"
                    value={category.name}
                    name="category"
                    onChange={(e) => setCatagory(e.target.value)}
                  />
                  <span className="text-sm font-medium">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Price Range</h3>
            <div className="flex flex-col gap-3">
              {priceRanges.map((range, I) => (
                <label
                  key={range.id}
                  className={`flex items-center gap-3 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-blue-50 `}
                >
                  <input
                    type="radio"
                    id={`price-${range.id}`}
                    value={`${range.min} - ${range.max}`}
                    name="price"
                    onChange={handlePriceChange}
                    className="form-radio accent-blue-500"
                  />
                  <span className="text-sm">
                    {range.min === 0
                      ? `Under $${range.max}`
                      : `$${range.min} - $${range.max}`}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* {Search Result} */}
        {loading ? (
          <div className="w-full h-dvh flex justify-center items-center">
            <CircularProgress />
          </div>
        ) : result.length === 0 ? (
          <div className="w-full h-dvh flex justify-center items-center">
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-500">
              No Result Found
            </h3>
          </div>
        ) : (
          <SearchFinalProducts result={result} />
        )}
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

      <PhoneNavbar />

      {/* {Smaller Screens filter button} */}
      <button
        onClick={FilterHandler}
        className={`lg:hidden fixed bottom-14 right-5 p-2 ml-2 bg-orange-500 rounded-lg hover ml-2:bg-orange-600 text-white shadow-lg ${
          IsExpended ? "transform rotate-90" : ""
        } transition-transform duration-300`}
      >
        <FilterAlt />
      </button>
    </div>
  );
}
