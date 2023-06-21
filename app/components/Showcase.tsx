import Image from "next/image"
import React from "react"

export default function Showcase() {
  return (
    <div className=" py-10 bg-gray-900">
      <div className="max-w-6xl flex items-center mx-auto">
        <div className="w-1/2 text-left p-6">
          <div className="max-w-sm">
            <div className="font-semibold text-4xl text-yellow-600">
              Stranger Mushwana
            </div>
            <div className="font-semibold text-2xl my-2 text-white">
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
            <div className="text-sm text-white">
              Experienced Developer, skilled in creating dynamic web
              applications. Strong team player and an eager learner with a
              passion for technology. I enjoy problem-solving and constantly
              seek new ways to improve. 🚀
            </div>
            <div className="flex space-x-4 items-center mt-8">
              <a
                href="#"
                className="px-8 py-3 bg-green-900 hover:bg-green-800 text-white rounded-md font-semibold text-xs"
              >
                Contact me
              </a>
              <a
                href="#"
                className="px-8 py-3 border border-red-300 text-white rounded-md font-semibold text-xs"
              >
                Download Resume
              </a>
            </div>
            <div className="flex space-x-3 items-center mt-6">
              <div className="p-2 text-center overflow-hidden rounded-full bg-white cursor-pointer">
                <Image
                  src="/images/github.png"
                  alt="Image of myself"
                  width={20}
                  height={20}
                />
              </div>
              <div className="rounded-full bg-white cursor-pointer">
                <div className="p-2 text-center overflow-hidden rounded-full bg-white">
                  <Image
                    src="/images/linkedin.png"
                    alt="Image of myself"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="rounded-full bg-white cursor-pointer">
                <div className="p-2 text-center overflow-hidden rounded-full bg-white">
                  <Image
                    src="/images/twitter.png"
                    alt="Image of myself"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-right mt-8 w-1/2 relative">
          <div className=" px-6 w-full pt-10 rounded-md overflow-hidden mb-20 z-10">
            <Image
              className="rounded-full bg-red-100 overflow-hidden"
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
            <div className="absolute overflow-hidden z-100 top-10 left-0">
              <Image
                alt="Nodejs Logo"
                src="/images/docker.png"
                width={90}
                height={90}
              />
            </div>
            <div className="absolute overflow-hidden z-100 top-[19rem] left-80">
              <Image
                alt="Nodejs Logo"
                src="/images/typescript.png"
                width={120}
                height={120}
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
            <div className="absolute overflow-hidden z-100 top-[10rem] right-3">
              <Image
                alt="React Logo"
                src="/images/visual-studio.png"
                width={100}
                height={100}
              />
            </div>
            <div className="absolute overflow-hidden z-100 top-[10rem] right-32">
              <Image
                alt="React Logo"
                src="/images/postgre.png"
                width={50}
                height={50}
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
