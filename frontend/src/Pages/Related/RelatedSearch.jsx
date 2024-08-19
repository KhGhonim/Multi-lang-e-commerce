import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function RelatedSearch() {
  const [searchParams] = useSearchParams();
  const SearchValue = searchParams.get("q");
  const [FetchedSearchData, setFetchedSearchData] = useState([]);
  const API = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API}/api/search/toolbar?q=${SearchValue}`
        );
        const data = await response.json();
        setFetchedSearchData(data.SearchData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [SearchValue]);
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Search Results</h1>
        <div className="relative w-full max-w-md">
          <input
            className="flex h-10 w-full pl-10 pr-4 py-2 text-black bg-white text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Search products..."
            type="text"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.3-4.3"></path>
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {FetchedSearchData.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
            img={product.img}
            alt={product.alt}
          />
        ))}
      </div>
    </div>
  );
}
