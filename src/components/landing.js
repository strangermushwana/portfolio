import React from 'react'

export default function Landing() {
  return (
    <div>
      <div className="flex pb-16 items-center justify-center h-screen bg-black">
        <div className="mx-auto text-center">
          <p className="text-white text-5xl font-bold">Hello there</p>
          <div className="text-white text-2xl mt-4">
            <p>My name is <span className="ml-2 font-bold hover:underline cursor-pointer text-yellow-500"><a target="_blank" href="https://www.linkedin.com/in/strangermushwana/">Stranger</a></span></p>
          </div>
          <div className="inline-block cursor-pointer animate-bounce rounded-full p-4 mt-8 bg-blue-400 text-white text-sm">
            <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
