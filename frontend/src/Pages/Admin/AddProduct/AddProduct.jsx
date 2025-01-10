import { useTheme } from "@mui/material";
import useAddProduct from "../../../Hooks/useAddProduct";
import { FaSpinner, FaUpload } from "react-icons/fa6";

export default function AddProduct() {
  const {
    AddProductHandler,
    HandleChanges,
    formData,
    handleMainImageChange,
    ref,
    ImageFrontEnd,
    isLoading,
  } = useAddProduct();

  const theme = useTheme().palette.mode;
  return (
    <div className={`max-w-3xl mx-auto text-black`}>
      <h2
        className={`text-2xl font-bold  mb-6 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Add New Product
      </h2>

      <form onSubmit={AddProductHandler} className={`space-y-6 `}>
        <div
          className={`bg-white rounded-xl shadow-sm p-6 space-y-6 ${
            theme === "dark" ? "bg-gray-950" : "bg-gray-50"
          }`}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={formData.name}
              onChange={(eo) => {
                HandleChanges(eo);
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows={4}
              name="description"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={formData.description}
              onChange={(eo) => {
                HandleChanges(eo);
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={formData.category}
                onChange={(eo) => {
                  HandleChanges(eo);
                }}
              >
                <option disabled value="">
                  Select category
                </option>
                <option value="Electronic">Electronics</option>
                <option value="Accessories">Accessories</option>
                <option value="Home">Home</option>
                <option value="Bags">Bags</option>
                <option value="Sports">Sports</option>
                <option value="Unspecified">Unspecified</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={formData.price}
                onChange={(eo) => {
                  HandleChanges(eo);
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lowest Price In Days
              </label>
              <input
                type="number"
                name="lowestPriceInDays"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={formData.lowestPriceInDays}
                onChange={(eo) => {
                  HandleChanges(eo);
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fake Price
              </label>
              <input
                name="fakePrice"
                type="number"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={formData.fakePrice}
                onChange={(eo) => {
                  HandleChanges(eo);
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <input
                name="rating"
                type="number"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={formData.rating}
                onChange={(eo) => {
                  HandleChanges(eo);
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating Count
              </label>
              <input
                name="ratingCount"
                type="number"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={formData.ratingCount}
                onChange={(eo) => {
                  HandleChanges(eo);
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <div
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[--bg-color] hover:bg-[--rightSide-bg-color]"
              onClick={() => ref.current && ref.current.click()}
            >
              {ImageFrontEnd ? (
                <img
                  src={ImageFrontEnd}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FaUpload className="w-8 h-8 mb-4 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500">
                    Drag and drop your image here, or click to select a file
                  </p>
                </div>
              )}
              <input
                ref={ref}
                type="file"
                name="ProductImage"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleMainImageChange(e)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className={`px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors ${
              theme === "dark" ? "bg-gray-700 text-white" : ""
            } `}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {isLoading ? (
              <div className="flex w-full h-full items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : (
              "Save Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
