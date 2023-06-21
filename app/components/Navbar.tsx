"use client"

import React, { useEffect, useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState(false)

  const isActive = () => {
    window.scrollY > 5 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive)
    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, [])
  return (
    <div
      className={
        active
          ? "sticky top-0 bg-gray-100 p-3 shadow-sm z-40"
          : "bg-gray-900 text-white p-3 shadow-sm"
      }
    >
      <div
        className={
          active
            ? "flex justify-between items-center max-w-6xl text-black p-3 mx-auto"
            : "flex justify-between items-center max-w-6xl p-3 mx-auto"
        }
      >
        <h1
          className={
            active
              ? "text-lg font-bold cursor-pointer text-black"
              : "text-lg font-bold cursor-pointer"
          }
        >
          stranger.mushwana
        </h1>
        <div
          className={
            active
              ? "flex space-x-8 items-center font-bold text-sm text-black"
              : "flex space-x-8 items-center font-bold text-sm"
          }
        >
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
