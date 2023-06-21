import Image from "next/image"
import Showcase from "./components/Showcase"

export default function Home() {
  return (
    <main className="h-screen text-gray-700">
      {/* <Showcase />
      <div className="py-8 max-w-6xl mx-auto text-gray-700">
        <div className="text-center font-bold text-3xl">Work History</div>
      </div>
      <div className="p-10 bg-pl-100 mx-auto max-w-6xl">
        <div className="flex items-center mx-auto space-x-10">
        </div>
      </div> */}
      <div className="flex flex-col space-y-6 items-center justify-center h-screen">
        <div className="text-4xl font-bold">Getting an Upgrade!</div>
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
