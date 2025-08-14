import { ArrowUpRight } from "lucide-react";

export default function WhyIndiaSection() {
  const benefits = [
    "English Speaking Programmers",
    "Flexible Work Hours",
    "Rapid Onboarding Process",
    "Expertise In Top Technologies",
    "Reliable Partner Credentials",
  ];

  return (
    <section className="relative bg-[#0B0D39] text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B0D39]/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[34px]  font-bold leading-tight mb-8">
              Why Hire Software Developers
              <br /> In India?
            </h2>

            <div className="flex justify-center">
              <img
                src="assets/images/bgcards.png"
                alt="Developers in India"
                className="rounded-xl shadow-lg object-cover w-full max-w-md"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <div className="flex items-center justify-between group">
                  <span className="text-lg">{benefit}</span>
                  <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-emerald-400 transition" />
                </div>
                {/* Divider */}
                {index < benefits.length - 1 && <div className="border-t border-white/20 mt-3" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
