import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <header className="hidden bg-black sticky top-0">
        <div className="container max-w-5xl bg-black flex flex-col mb-8 justify-between mx-auto text-center items-center md:flex-row md:mb-0 md:px-10 lg:px-0">
          <Link href="/" className="logo text-2xl font-bold p-6 text-white">Stranger Mushwana</Link>
          <div className="flex space-x-4 m-2 items-center justify-center text-gray-800 md:m-0">
            <div className="flex space-x-5 mr-12">
            </div>
            <div className="hover:scale-95 duration-300 w-fit">
              <Link href="#" className="py-3 px-8 bg-orange-400 rounded-xl text-white">Contact</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}