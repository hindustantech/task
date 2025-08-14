import Image from "next/image"

export default function TechnologySection() {
  const technologies = [
    {
      icon: "/icons/backend.png",
      category: "Backend Development",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#f5f7ff]",
      borderColor: "border-b-[6px] border-[#3a4bd1]",
    },
    {
      icon: "/icons/frontend.png",
      category: "Fronted Development",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#fff3e6]",
      borderColor: "border-b-[6px] border-[#fbb03b]",
    },
    {
      icon: "/icons/mobile.png",
      category: "Mobile Development",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#fde9f8]",
      borderColor: "border-b-[6px] border-[#d59bf6]",
    },
    {
      icon: "/icons/blockchain.png",
      category: "Blockchain, Ai/ML",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#e6f9ff]",
      borderColor: "border-b-[6px] border-[#00c4ff]",
    },
    {
      icon: "/icons/devops.png",
      category: "DevOps & Low-Code",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#fdf1e6]",
      borderColor: "border-b-[6px] border-[#ff9f43]",
    },
    {
      icon: "/icons/ecommerce.png",
      category: "E-commerce & CMS",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#ffe5e5]",
      borderColor: "border-b-[6px] border-[#ff5a5f]",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#243746]">
            Our Diverse Technology Competency
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been
            The Industry's Standard Dummy Text Ever Since
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((item, index) => (
            <div
              key={index}
              className={`rounded-md p-6 shadow-sm ${item.bg} ${item.borderColor} transition-transform hover:-translate-y-1`}
            >
              <div className="mb-4">
                <Image src={item.icon} alt={item.category} width={40} height={40} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.category}</h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                {item.techs.join(" | ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
