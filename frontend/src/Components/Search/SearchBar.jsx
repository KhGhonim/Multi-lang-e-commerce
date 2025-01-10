import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import useTheme from "@mui/material/styles/useTheme";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [fetchedSearchData, setFetchedSearchData] = useState([]);
  const theme = useTheme().palette.mode;
  // @ts-ignore
  const user = useSelector((state) => state.UserStore);
  const { t } = useTranslation();

  const fetchSearchData = async () => {
    setIsLoading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/search/toolbar?q=${searchValue}`
    );
    const data = await res.json();

    setFetchedSearchData(data.SearchData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (searchValue.length >= 3) {
      setIsSearchBoxVisible(true);
      setIsLoading(true);

      fetchSearchData();
    } else {
      setIsSearchBoxVisible(false);
    }
  }, [searchValue]);

  return (
    <div className="relative max-w-md ">
      <div
        className={`flex items-center rounded-tr-xl rounded-bl-xl px-4 py-2 shadow-md focus-within:ring-2 ${
          theme === "dark"
            ? "bg-gray-800 focus-within:ring-orange-500 "
            : "bg-gray-200 focus-within:ring-gray-500 "
        } `}
      >
        <CiSearch className={`${user.direction === "rtl" ? "absolute left-2" : "absolute right-2"}`} />
        <input
          type="text"
          placeholder={t("Search")}
          className="bg-transparent flex-1 outline-none text-sm ml-2"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {isSearchBoxVisible && (
        <div
          className={`absolute top-10 left-0 right-0 rounded-br-xl rounded-bl-xl shadow-lg z-20 p-4   ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          ) : fetchedSearchData && fetchedSearchData.length > 0 ? (
            <ul className="space-y-3">
              {fetchedSearchData?.map((product) => (
                <li key={product?.id}>
                  <Link
                    to={`/RelatedSearch?q=${searchValue}`}
                    target="_blank"
                    className={`flex items-center gap-4 py-3 rounded-lg transition ${
                      theme === "dark"
                        ? "bg-gray-800 text-white "
                        : " hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <img
                      src={product?.img}
                      alt={product?.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <p className="text-xs font-medium ">{product?.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex justify-center items-center h-auto  text-xs">
              <p>No products were found!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
