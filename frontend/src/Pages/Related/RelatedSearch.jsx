import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { CircularProgress } from "@mui/material";

export default function RelatedSearch() {
  const [searchParams] = useSearchParams();
  const SearchValue = searchParams.get("q");
  const [FetchedSearchData, setFetchedSearchData] = useState([]);
  const [Isloading, setIsloading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/search/toolbar?q=${SearchValue}`
        );
        const data = await response.json();
        setFetchedSearchData(data.SearchData);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [SearchValue]);

  return (
    <div className="container mx-auto py-10 p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-medium text-gray-800">
          Search Results for{" "}
          <span className="font-bold capitalize">{SearchValue} </span>
        </h1>
      </div>
      {Isloading ? (
        <div className="w-full h-dvh flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {FetchedSearchData.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              img={product.img}
              alt={product.alt}
              id={product.id}
              quantity={product.quantity}
            />
          ))}
        </div>
      )}
    </div>
  );
}
