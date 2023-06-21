import Image from "next/image"
import Showcase from "./components/Showcase"

export default function Home() {
  return (
    <main>
      <Showcase />
      <div className="py-8 max-w-6xl mx-auto text-gray-700">
        <div className="text-center font-bold text-3xl">Work History</div>
      </div>
      <div className="p-10 bg-pl-100 mx-auto max-w-6xl">
        <div className="flex items-center mx-auto space-x-10">
          {/* <div className="one">Incoming</div> */}
        </div>
      </div>
    </main>
  )
}
