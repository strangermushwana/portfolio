import Image from "next/image"
import React from "react"

export interface IEduction {
  history: {
    jobTitle: string
    company: string
    image: string
    description: string
    languages: string[]
    term: string
  }
}

export default function WorkHistory({ history }: IEduction) {
  const colors = [
    "bg-red-200",
    "bg-yellow-500",
    "bg-green-800",
    "bg-red-800",
    "bg-blue-800",
    "bg-orange-700",
    "bg-purple-800",
  ]
  return (
    <div className="py-6 bg-pl-100 mx-auto max-w-6xl">
      <div className="flex flex-col items-center space-x-10">
        <div className="w-full">
          <div className="flex items-center shadow-md py-10 px-5 w-full">
            <div className="flex flex-col pl-4">
              <Image src={history.image} alt="" width={350} height={400} />
              <div className="font-semibold text-2xl mt-4 text-yellow-600">
                {history.jobTitle}
              </div>
              <div className="text-md font-thin my-1 uppercase">
                {history.term}
              </div>
              <div className="font-sm my-1 max-w-4xl">
                {history.description}
              </div>
              <div className="grid gap-y-3 gap-x-2 grid-cols-4 w-fit py-8 font-mono">
                {history.languages.map((language, index) => (
                  <div
                    key={language}
                    className={
                      colors[index] +
                      " text-xs w-fit rounded-full font-bold text-center px-6 py-2 text-white"
                    }
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
