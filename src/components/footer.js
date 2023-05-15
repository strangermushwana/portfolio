import Link from "next/link"

export default function Footer() {
  return (
    <footer className="hidden bg-black max-w-5xl mx-auto px-8 mt-16 sticky bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">© 2023 <a href="https://strangermushwana.com/" target="_blank" className="hover:underline">Stranger Mushwana™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
            <li><Link href="#" className="mr-4 hover:underline md:mr-6 ">About</Link></li>
            <li><Link href="#" className="mr-4 hover:underline md:mr-6 ">Contact</Link></li>
            <li><Link href="#" className="mr-4 hover:underline md:mr-6 ">Donate</Link></li>
        </ul>
      </div>
    </footer>
  )
}
