import DeleteModel from "Components/Admin/Models/DeleteModel";
import useGetAllProducts from "../../../Hooks/useGetAllProducts";
import { useEffect, useState } from "react";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useDeleteProduct from "../../../Hooks/useDeleteProduct";
import { useTheme } from "@mui/material";

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { data, loading } = useGetAllProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const filteredData = products.filter((product) => {
    const matchesSearchTerm = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isCategoryMatch =
      selectedCategory === "all" ||
      (selectedCategory === "Unspecified" && !product.category) ||
      product.category === selectedCategory;
    return matchesSearchTerm && isCategoryMatch;
  });

  const handleDeleteSuccess = (deletedProductId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p._id !== deletedProductId)
    );
  };

  const {
    HandleDelete,
    setSelectedItem,
    SelectedItem,
    Isloading,
    setIsModeLOpened,
    IsModeLOpened,
  } = useDeleteProduct();
  const theme = useTheme().palette.mode;
  return (
    <div className="space-y-6 ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Inventory Management
        </h2>
        <Link
          to="/admin/add-product"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add New Product
        </Link>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <select
            className="appearance-none bg-white border text-black border-gray-200 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Electronic">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Home">Home</option>
            <option value="Bags">Bags</option>
            <option value="Sports">Sports</option>
            <option value="Unspecified">Unspecified</option>
          </select>
          <FaFilter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      <div className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-50"} rounded-xl shadow-sm overflow-x-auto`}>
        {loading ? (
          <div className="flex w-screen h-96 items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className={`${theme === "dark" ? "bg-gray-950" : "bg-gray-50"}`}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${theme === "dark"? "text-white" : "text-black"} uppercase tracking-wider`}>
                  Product
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${theme === "dark"? "text-white" : "text-black"} uppercase tracking-wider`}>
                  Category
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${theme === "dark"? "text-white" : "text-black"} uppercase tracking-wider`}>
                  Price
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${theme === "dark"? "text-white" : "text-black"} uppercase tracking-wider`}>
                  fake Price
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${theme === "dark"? "text-white" : "text-black"} uppercase tracking-wider`}>
                  rating
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${theme === "dark"? "text-white" : "text-black"} uppercase tracking-wider`}>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} divide-y divide-gray-200`}>
              {filteredData?.map((product, index) => (
                <tr key={`product-${product._id}, index-${index}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-lg object-cover"
                        src={product.img}
                        alt={product.name}
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium ">
                          {product.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm ">
                      {product.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm ">
                      ${product.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm ">
                      {product.fakePrice}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.rating >= 4.5
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.rating}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button className="text-blue-600 hover:text-blue-900">
                        <FaEdit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setIsModeLOpened(true);
                          setSelectedItem(product);
                        }}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <DeleteModel
        onClose={() => {
          setIsModeLOpened(false);
        }}
        item={SelectedItem}
        onDelete={HandleDelete}
        IsModeLOpened={IsModeLOpened}
        Isloading={Isloading}
        handleDeleteSuccess={handleDeleteSuccess}
      />
    </div>
  );
}
