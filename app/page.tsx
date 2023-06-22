import Image from "next/image"
import Showcase from "./components/Showcase"
import WorkHistory from "./components/WorkHistory"

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
  ]
  return (
    <main className="h-screen text-gray-700">
      <Showcase />
      <div className="py-8 max-w-6xl mx-auto text-gray-700">
        <div className="text-left font-bold text-2xl uppercase">
          Work History
        </div>
      </div>
      <div className="flex flex-col items-center">
        {workHistory.map((history) => (
          <div key={history.id} className="w-full">
            <WorkHistory history={history} />
          </div>
        ))}
      </div>
      <div className="bg-black p-10">
        <div className="max-w-6xl mx-auto text-white">Hello</div>
      </div>
    </main>
  )
}
