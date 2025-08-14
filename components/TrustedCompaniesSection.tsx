import { FaCheckCircle } from "react-icons/fa";

export default function TrustedCompaniesSection() {
  return (
    <section
      className="py-20 bg-white"
      style={{
        backgroundImage: `
        radial-gradient(circle at 80% 20%, rgba(255, 233, 231, 0.5) 0%, transparent 50%),
        linear-gradient(to left, #ffe9e7, #ffedef, #fef1f5, #fdf6fa, #fdfafd, #fafcff, #fafdfe, #fdfefd, #fcfdfd, #fbfcfc, #fafafa, #f9f9f9)
      `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Illustration */}
          <div className="relative">
            <img src="assets/images/typing.png" alt="Trusted by companies" className="w-full h-auto" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-[32px] font-bold text-gray-900 leading-snug mb-6">
              Top Companies Trust ValueCoders For Hiring Software Developers
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-10">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry&apos;s Standard
              Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
              {[
                "Client-Centric Approach",
                "Best-in-Class Project Management",
                "Global Quality Standards",
                "Time-Zone Compatibility",
                "Cutting-Edge Infrastructure",
                "Agile Adaptability",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0" />
                  <span className="text-gray-900 font-semibold text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
