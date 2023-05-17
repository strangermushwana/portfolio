import Image from "next/image"
import React from 'react'

export default function About() {
  return (
    <div className="text-white h-screen">
      <div className="flex">
        <div className="w-1/2 h-screen p-10 bg-[#2F314A]">
          <div className="flex flex-col pb-44 max-w-2xl text-left items-center justify-center h-screen">
            <h1 className="text-5xl text-[#F19492] mb-5 font-semibold">Hello. I&apos;m a Software Engineer</h1>
            <p className="text-xl text-[#F19492] leading-2 pl-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis velit, architecto earum ex, illo laudantium iure magni eveniet, ipsa necessitatibus illum suscipit perspiciatis commodi? Ex debitis placeat reprehenderit exercitationem adipisci.</p>
          </div>
        </div>
        {

        //   <div className="w-1/2 h-screen p-10 bg-[#F19492] backdrop-blur-sm">
        //   <Image src="/images/me.png" alt="" width={1000} height={1000} />
        // </div>

        }
      </div>
    </div>
  )
}
