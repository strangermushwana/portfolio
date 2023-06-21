import Image from "next/image"
import Showcase from "./components/Showcase"

export default function Home() {
  return (
    <main>
      <Showcase />
      <div className="p-8 text-gray-700">
        <div className="text-center font-bold text-3xl">My tech stack</div>
      </div>
      <div className="p-10 bg-red-100 mx-auto max-w-6xl">
        <div className="flex items-center mx-auto space-x-10">
          <div className="one">{/* <Image src="./images/Node" /> */}</div>
        </div>
      </div>
    </main>
  )
}
