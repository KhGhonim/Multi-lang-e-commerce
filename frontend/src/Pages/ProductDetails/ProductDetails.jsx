import Header2 from "Components/Header/Header2/Header2";
import Header3 from "Components/Header/Header3/Header3";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Header2 />
      <Header3 />
      <div className="container mx-auto my-10 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2016/08/27/09/02/hair-care-1626554_960_720.jpg"
              alt="HC Care Complex Bitkisel Saç Bakım Kompleksi"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white opacity-75 rounded-lg px-4 py-2 text-center font-bold text-gray-800">
              GIFT PRODUCT
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371.26 1.605.643l.738 1.405c.234.447.177 1.072-.219 1.455l-5.28 8.073c-.27.409-.683.617-1.083.54-.396-.077-.792-.406-.99-.807L11.049 2.927z"
                  />
                </svg>
                <span className="ml-2 text-gray-800">4.6</span>
              </div>
              <span className="ml-4 text-gray-600">46030 Review</span>
              <span className="ml-4 text-gray-600">
                | 12052 Question & Answer
              </span>
            </div>
            <div className="bg-gray-200 rounded-lg px-4 py-2 mb-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 21.91.822 12.299m15.836-5.657l-1.591-1.591m0 0a3 3 0 11-4.243 4.243 3 3 0 014.243-4.243zm-7.544 0a3 3 0 11-4.243 4.243 3 3 0 014.243-4.243z"
                  />
                </svg>
                <span className="ml-2 text-gray-800">Users like it!</span>
              </div>
              <a href="#" className="ml-4 text-blue-500 font-bold">
                See Comments
              </a>
            </div>
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="ml-2 text-gray-800">
                27.5B in people's carts, get it while it lasts!
              </span>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-4">439 TL</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg w-full mb-4">
              Add to Basket
            </button>

            <div className="bg-gray-200 rounded-lg px-4 py-2 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Estimated Shipping: Within 3 days
              </h3>
              <p className="text-gray-600">
                Choose your address and find out when it will be delivered!
              </p>
              <a href="#" className="text-blue-500 font-bold">
                Select Location
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Highlights:</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-gray-800 font-bold mb-2">
                Additional Feature
              </h3>
              <p className="text-gray-600">Organik</p>
            </div>
            <div>
              <h3 className="text-gray-800 font-bold mb-2">Volume</h3>
              <p className="text-gray-600">100-199 ml</p>
            </div>
            <div>
              <h3 className="text-gray-800 font-bold mb-2">Impact</h3>
              <p className="text-gray-600">Besleyici / Onarıcı</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-gray-800 font-bold mb-4">
            This product will be sent by HC CARE.
          </h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              More than 100 stocks to be sold at the campaign price presented.
            </li>
            <li>
              The sales price of the product you have reviewed is determined by
              the seller.
            </li>
            <li>
              A product can be sold by more than one seller. Sellers of products
              offered for sale by more than one seller can sell the product
              based on the price they set for the product, seller points,
              delivery status.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
