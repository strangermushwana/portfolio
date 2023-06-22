import Image from "next/image"
import React from "react"

export default function WorkHistory() {
  return (
    <div className="py-6 bg-pl-100 mx-auto max-w-6xl">
      <div className="flex flex-col items-center space-x-10">
        <div className="w-full">
          <div className="flex items-center shadow-md py-10 px-5 w-full">
            <div className="flex flex-col pl-4">
              <Image
                src="/images/jobjack.png"
                alt=""
                width={350}
                height={400}
              />
              <div className="font-semibold text-2xl mt-4 text-yellow-600">
                Software Engineer
              </div>
              <div className="text-md font-thin my-1 uppercase">
                May 2021 - Current
              </div>
              <div className="font-sm my-1 max-w-4xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                temporibus modi sequi in eum pariatur at iure aliquid, numquam
                quasi fugiat excepturi, deleniti, eos neque recusandae dolor
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                placeat enim optio obcaecati praesentium et nesciunt ad, laborum
                dicta eligendi? magni
              </div>
              <div className="grid gap-y-3 gap-x-2 grid-cols-4 w-fit py-8 font-mono">
                <div className="bg-red-200 text-xs w-fit rounded-full font-bold text-center px-6 py-2 text-white">
                  Angular
                </div>
                <div className="bg-yellow-500 text-xs w-fit rounded-full font-bold text-center px-6 py-2 text-white">
                  Node.js
                </div>
                <div className="bg-green-800 text-xs w-fit rounded-full font-bold text-center px-6 py-2 text-white">
                  MongoDB
                </div>
                <div className="bg-red-800 text-xs w-fit rounded-full font-bold text-center px-6 py-2 text-white">
                  Nest.js
                </div>
                <div className="bg-blue-800 text-xs w-fit rounded-full font-bold text-center px-6 py-2 text-white">
                  Postgres
                </div>
                <div className="bg-purple-800 text-xs w-fit rounded-full font-bold text-center px-6 py-2 text-white">
                  GraphQL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
