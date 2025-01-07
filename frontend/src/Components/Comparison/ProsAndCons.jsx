import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";

export default function ProsAndCons({ products }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={`pros-cons-${product.id}`}
            className="bg-white rounded-lg shadow p-6"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {product.name}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="flex items-center text-green-600 font-medium mb-2">
                  <FaThumbsUp className="w-4 h-4 mr-2" />
                  Pros
                </h4>
                <ul className="space-y-2">
                  {product.pros.map((pro, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center text-red-600 font-medium mb-2">
                  <FaThumbsDown className="w-4 h-4 mr-2" />
                  Cons
                </h4>
                <ul className="space-y-2">
                  {product.cons.map((con, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
