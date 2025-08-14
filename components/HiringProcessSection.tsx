import { ArrowRight } from "lucide-react";

export default function HiringProcessSection() {
  const steps = [
    {
      icon: "/assets/images/inqury.png",
      title: "INQUIRY",
      description: "Tell us about your project requirements and technical needs",
    },
    {
      icon: "/assets/images/developer.png",
      title: "SELECT DEVELOPERS",
      description: "Choose from our pool of pre-vetted skilled developers",
    },
    {
      icon: "/assets/images/team.png",
      title: "TEAM INTEGRATION",
      description: "Seamlessly integrate developers into your existing team",
    },
    {
      icon: "/assets/images/scale.png",
      title: "TEAM SCALING",
      description: "Scale your team up or down based on project requirements",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-r from-green-50 to-pink-50"
      style={{
        backgroundImage: `url(./assets/images/bg1.png)`,
        backgroundColor: "white",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple and straightforward process to get your dedicated development team ready within 48 hours
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-green-400">
                <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" />
                <div className="absolute -top-3 -right-3 w-10 h-10 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md bg-[#FF8C91]">
                  {index + 1}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 right-[-40px]">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>
              )}

              {index < steps.length - 1 && (
                <div className="lg:hidden mt-6">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                </div>
              )}

              <h3 className="mt-6 text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
