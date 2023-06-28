import Image from "next/image"
import Showcase from "./components/Showcase"
import WorkHistory from "./components/WorkHistory"
import PlaceHolder from "./components/PlaceHolder"

export default function Home() {
  const workHistory = [
    {
      id: 1,
      jobTitle: "Software Developer",
      company: "JOBJACK",
      term: "May 2021 - Current",
      image: "/images/jobjack.png",
      description:
        "As a Developer, I played a pivotal role in leading and contributing to the successful delivery of complex software projects. Leveraging my extensive technical expertise, I spearheaded the design, development, and implementation of innovative solutions while ensuring adherence to best practices and industry standards.",
      languages: [
        "Angular",
        "Node.js",
        "Postgres",
        "TypeScript",
        "MongoDB",
        "GraphQL",
        "Nest.js",
      ],
    },
    {
      id: 2,
      jobTitle: "Software Engineer Intern",
      company: "ORACLE",
      term: "March 2020 - March 2021",
      image: "/images/oracle.png",
      description:
        "I had the opportunity to gain valuable hands-on experience and contribute to various software development projects. Throughout my internship, I worked closely with the development team, assisting in the design, implementation, and testing of software solutions.",
      languages: ["Java", "HTML & CSS", "JavaScript", "XML", "PL/SQL", "REST"],
    },
    {
      id: 3,
      jobTitle: "Programming Tutor",
      company: "University of Limpopo",
      term: "February 2016 - March 2020",
      image: "/images/angular.png",
      description:
        "I had the opportunity to gain valuable hands-on experience and contribute to various software development projects. Throughout my internship, I worked closely with the development team, assisting in the design, implementation, and testing of software solutions.",
      languages: ["HTML & CSS", "C++", "Python", "Java", "C#"],
    },
  ]
  return (
    <PlaceHolder />
    // <main className="h-screen text-gray-700">
    //   <Showcase />
    //   <div className="py-8 max-w-6xl mx-auto text-gray-700">
    //     <div className="text-left font-bold text-2xl uppercase">
    //       Work History
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-3 mx-auto gap-3 max-w-6xl">
    //     {workHistory.map((history) => (
    //       <div key={history.id} className="w-full">
    //         <WorkHistory history={history} />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="bg-black py-10">
    //     <div className="max-w-6xl mx-auto text-gray-700">
    //       <div className="text-center text-white font-bold text-2xl uppercase">
    //         Education
    //       </div>
    //     </div>
    //     <div className="max-w-6xl mx-auto text-white">
    //       <div className="flex flex-col py-10 bg-pl-100 mx-auto items-center max-w-6xl">
    //         <div className="pl-4 mx-auto mb-10">
    //           <Image src="/images/ul.png" alt="" width={350} height={400} />
    //         </div>
    //         <div className="w-full">
    //           <div className="flex flex-col items-center shadow-md px-5 w-full">
    //             <div className="font-semibold text-2xl my-4 text-yellow-600">
    //               University of Limpopo
    //             </div>
    //             <div className="text-md font-thin my-1 uppercase">
    //               FEBRUARY 2015 - NOVEMVER 2018
    //             </div>
    //             <div className="font-sm my-4 text-center max-w-4xl">
    //               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    //               Voluptatum sequi vel eaque ipsum nemo velit aperiam fuga odio
    //               labore magni inventore corporis, aliquid provident ea maxime
    //               ducimus officiis. Magnam dolores expedita illum rem adipisci
    //               quam vero dolorem, quia ullam dolorum.
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="py-8 max-w-6xl mx-auto text-gray-700">
    //     <div className="text-left font-bold text-2xl uppercase">Projects</div>
    //   </div>
    // </main>
  )
}
