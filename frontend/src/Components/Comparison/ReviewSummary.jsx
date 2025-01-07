import { Star } from '@mui/icons-material'
import React from 'react'

export default function ReviewSummary({products}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((product) => (
        <div
          key={`review-${product.id}`}
          className="bg-white rounded-lg shadow p-6"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Review Summary
          </h3>
          <div className="space-y-4">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center">
                <div className="w-24 flex items-center">
                  {Array(stars)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                </div>
                <div className="flex-1 ml-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-yellow-400 rounded-full"
                      style={{
                        width: `${
                          (product.reviews.breakdown[stars * 2 - 1] /
                            product.reviews.total) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                <span className="ml-4 text-sm text-gray-500">
                  {product.reviews.breakdown[stars * 2 - 1]}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-6 text-blue-600 hover:text-blue-800 text-sm font-medium">
            View all reviews
          </button>
        </div>
      ))}
    </div>
  </div>
  )
}
