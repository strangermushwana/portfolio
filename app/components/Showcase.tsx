import Image from "next/image"
import React from "react"

export default function Showcase() {
  return (
    <div className=" py-10">
      <div className="max-w-6xl flex items-center mx-auto">
        <div className="w-1/2 text-left p-6">
          <div className="max-w-sm">
            <div className="font-semibold text-4xl text-yellow-600">
              Stranger Mushwana
            </div>
            <div className="font-semibold text-2xl my-2 text-gray-700">
              Software Developer
            </div>
            <div className="flex space-x-1 items-center my-6">
              <span className="relative flex items-center h-2.4 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm text-green-700">
                Open to freelance projects
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Experienced Developer, skilled in creating dynamic web
              applications. Strong team player and an eager learner with a
              passion for technology. I enjoy problem-solving and constantly
              seek new ways to improve. 🚀
            </div>
            <div className=" flex space-x-4 items-center my-8">
              <a
                href="#"
                className="px-8 py-3 bg-green-900 hover:bg-green-800 text-white rounded-md font-semibold text-xs"
              >
                Contact me
              </a>
              <a
                href="#"
                className="px-8 py-3 border hover:bg-gray-200 text-gray-900 rounded-md font-semibold text-xs"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-left mt-10 w-1/2">
          <div className="relative px-6 bg-black w-full pt-16 rounded-md overflow-hidden mb-20">
            <Image
              src="/images/me.png"
              alt="Image of myself"
              width={300}
              height={350}
            />
            <div className="absolute overflow-hidden z-100 top-10 left-96">
              <Image
                alt="Nodejs Logo"
                src="/images/node.png"
                width={100}
                height={100}
              />
            </div>
            <div className="absolute bg-white overflow-hidden z-100 top-32 left-64">
              <Image
                alt="Angular Logo"
                src="/images/anglar.png"
                width={100}
                height={100}
              />
            </div>
            <div className="absolute overflow-hidden z-100 top-[18rem] right-3">
              <Image
                alt="React Logo"
                src="/images/react.png"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
