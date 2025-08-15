import Image from "next/image";

export default function WhyHireSection() {
  const technologies = [
    {
      icon: "/assets/images/backend.png",
      category: "Backend Development",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#f5f7ff]",
      borderColor: "border-b-[6px] border-[#3a4bd1]",
    },
    {
      icon: "/assets/images/frontend.png",
      category: "Fronted Development",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#fff3e6]",
      borderColor: "border-b-[6px] border-[#fbb03b]",
    },
    {
      icon: "/assets/images/mobile.png",
      category: "Mobile Development",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#fde9f8]",
      borderColor: "border-b-[6px] border-[#d59bf6]",
    },
    {
      icon: "/assets/images/blockchain.png",
      category: "Blockchain, Ai/ML",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#e6f9ff]",
      borderColor: "border-b-[6px] border-[#00c4ff]",
    },
    {
      icon: "/assets/images/devops.png",
      category: "DevOps & Low-Code",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#fdf1e6]",
      borderColor: "border-b-[6px] border-[#ff9f43]",
    },
    {
      icon: "/assets/images/cms.png",
      category: "E-commerce & CMS",
      techs: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"],
      bg: "bg-[#ffe5e5]",
      borderColor: "border-b-[6px] border-[#ff5a5f]",
    },
  ];
  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 10% 70%, rgba(47, 201, 128, 0.2) 0%, transparent 30%),
        radial-gradient(circle at 90% 30%, rgba(255, 133, 120, 0.2) 0%, transparent 30%)`,
        backgroundColor: "white",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img src="assets/images/leftbg.png" alt="" className="absolute top-0 left-0 w-1/3 opacity-80" />
        <img src="assets/images/rightbg.png" alt="" className="absolute top-0 right-0 w-1/3 opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className=" text-2xl md:text-4xl font-bold text-black">Why Hire Developers From Our Name</h2>
          <p className="text-black max-w-2xl mx-auto mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-10">
          <div className="flex justify-center">
            <img src="assets/images/leftcard.png" alt="High quality cost ratio" className="w-full max-w-md" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-300 mb-6">High Quality/Cost Ratio</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="w-6 h-6 flex items-center justify-center bg-emerald-500 rounded-full mt-1">
                  <svg className="w-6 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-black">Hire Silicon Valley Caliber At Half The Cost</h4>
                  <p className="text-black text-sm">
                    Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="w-6 h-6 flex items-center justify-center bg-red-500 rounded-full mt-1">
                  <svg className="w-6 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-black">100+ Skills Available</h4>
                  <p className="text-black text-sm">
                    Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Rigorous Vetting</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="w-6 h-6 flex items-center justify-center bg-emerald-500 rounded-full mt-1">
                  <svg className="w-6 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-black">5+ Hours Of Tests And Interviews</h4>
                  <p className="text-black text-sm">
                    Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="w-6 h-6 flex items-center justify-center bg-red-500 rounded-full mt-1">
                  <svg className="w-6 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-black">Seniority Tests</h4>
                  <p className="text-black text-sm">
                    Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="assets/images/rightcard.png" alt="Rigorous vetting process" className="w-full max-w-md" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#243746]">Our Diverse Technology Competency</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy
            Text Ever Since
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
              <p className="text-sm text-gray-800 leading-relaxed">{item.techs.join(" | ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
