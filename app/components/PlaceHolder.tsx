import React from 'react'

export default function PlaceHolder() {
  return (
    <main className="h-screen text-gray-700 px-4">
      <div className="flex flex-col space-y-6 items-center justify-center h-screen">
        <div className="text-4xl text-center font-bold">Getting an Upgrade!</div>
        <a
          href="https://www.linkedin.com/in/strangermushwana/"
          target="_blank"
          className="bg-blue-500 text-white text-xs font-bold px-10 py-3 rounded-md outline-none"
        >
          LinkedIn
        </a>
      </div>
    </main>
  )
}
