import React from 'react'

export default function TabButton({value, label, activeTab, setActiveTab}) {
  return (
    <button
    onClick={() => setActiveTab(value)}
    className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
      activeTab === value
        ? "border-gray-500 text-gray-600"
        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
    }`}
  >
    {label}
  </button>
  )
}
