import { FaLeaf } from 'react-icons/fa6'
import { PiPackageFill } from "react-icons/pi";
import { TbMessageCircleFilled } from 'react-icons/tb';

export default function FeatureCards() {
  return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
      <div className="border rounded-lg shadow-md p-6">
        <div className="p-6">
          <PiPackageFill  className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="font-semibold mb-2">Premium Quality</h3>
          <p className="text-sm text-gray-600">
            Built with premium materials and advanced technology
          </p>
        </div>
      </div>
      <div className="border rounded-lg shadow-md p-6">
        <div className="p-6">
          <TbMessageCircleFilled 
          className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="font-semibold mb-2">24/7 Support</h3>
          <p className="text-sm text-gray-600">
            Dedicated customer support team at your service
          </p>
        </div>
      </div>
      <div className="border rounded-lg shadow-md p-6">
        <div className="p-6">
          <FaLeaf className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="font-semibold mb-2">Eco-Friendly</h3>
          <p className="text-sm text-gray-600">
            Sustainable materials and eco-conscious packaging
          </p>
        </div>
      </div>
    </div>  )
}
