import { IoClose } from "react-icons/io5";

export default function ComparisonTable({
  products,
  renderStars,
  DeleteCompareHandler,
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider w-1/4">
                Feature
              </th>
              {products.map((product) => (
                <th
                  key={product.id}
                  className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider w-1/4 relative"
                >
                  <div className="relative group">
                    <button
                      onClick={() => DeleteCompareHandler(product)}
                      className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transform hover:scale-110 transition-all duration-200"
                    >
                      <IoClose className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors duration-200" />
                    </button>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32 object-cover rounded-lg mx-auto mb-4 group-hover:opacity-75 transition-opacity duration-200"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 text-center">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-blue-600 mt-2 text-center">
                      ${product.price}
                    </p>
                    {renderStars(product.rating)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((feature, O) => (
              <tr
                key={O}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {feature.features.Category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {feature.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {feature.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {feature.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
