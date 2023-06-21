import React from "react"

export default function Navbar() {
  return (
    <div className="top-1 bg-white p-3 shadow-sm ">
      <div className="flex justify-between items-center max-w-6xl text-gray-800 p-3 mx-auto">
        <h1 className="text-lg font-bold cursor-pointer hover:text-gray-900">
          stranger.mushwana
        </h1>
        <div className="flex space-x-8 items-center font-bold text-sm text-gray-700">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <a
            href="#"
            className="px-8 py-2.5 bg-purple-900 text-white rounded-md font-semibold text-xs"
          >
            Hire me
          </a>
        </div>
      </div>
    </div>
  )
}
