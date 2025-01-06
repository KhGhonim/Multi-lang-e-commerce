import { StickyNote2, TagSharp } from '@mui/icons-material';
import { FaTruckMoving } from 'react-icons/fa6';

export function CartActionContent({ activeSection }) {
  if (activeSection === "note") {
    return (
      <div className="p-4 bg-gray-50 rounded-lg space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <StickyNote2 className="h-4 w-4" />
          <span>Add Order Note</span>
        </div>
        <textarea
          name="note"
          id="note"
          cols={30}
          rows={3}
          placeholder="Add any special instructions for your order..."
          className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors">
          Save Note
        </button>
      </div>
    );
  }

  if (activeSection === "shipping") {
    return (
      <div className="p-4 bg-gray-50 rounded-lg space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <FaTruckMoving className="h-4 w-4" />
          <span>Shipping Information</span>
        </div>
        <div className="space-y-3 bg-white p-4 rounded-md border border-gray-200">
          <div>
            <h4 className="font-medium text-sm text-gray-900">Estimated Delivery Time</h4>
            <p className="text-sm text-gray-500">3-5 business days</p>
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-900">Shipping Method</h4>
            <p className="text-sm text-gray-500">Free Standard Shipping</p>
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === "coupon") {
    return (
      <div className="p-4 bg-gray-50 rounded-lg space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <TagSharp className="h-4 w-4" />
          <span>Add Coupon</span>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="flex-1 h-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button className="bg-primary text-white px-4 rounded-md hover:bg-primary-dark transition-colors">
            Apply
          </button>
        </div>
      </div>
    );
  }

  return null;
}
