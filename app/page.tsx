import Image from "next/image"
import Showcase from "./components/Showcase"
import WorkHistory from "./components/WorkHistory"

export default function Home() {
  return (
    <main className="h-screen text-gray-700">
      <Showcase />
      <div className="py-8 max-w-6xl mx-auto text-gray-700">
        <div className="text-left font-bold text-2xl uppercase">
          Work History
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <WorkHistory />
        </div>
        <div className="w-full">
          <WorkHistory />
        </div>
      </div>
      <div className="bg-black p-10">
        <div className="max-w-6xl mx-auto text-white">Hello</div>
      </div>
    </main>
  )
}
