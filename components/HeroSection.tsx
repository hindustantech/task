import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(./assets/images/bg1.png)`,
        backgroundColor: "white",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <div className="flex items-center gap-4">
              <h1 className="text-[30px] lg:text-[60px] font-bold text-[#3bc191] uppercase tracking-wide whitespace-nowrap">
                HIRE DEDICATED
              </h1>
              <div className="flex-1 border-t-2 border-[#3bc191]"></div>
            </div>

            <h2 className="text-[60px] font-extrabold text-[#1a2e35] leading-none mt-2">DEVELOPERS</h2>
            <p className="text-[#1a2e35] text-[18px] font-semibold mt-2">Top 1% Pre-Vetted, In-House & Dedicated Software Programmers</p>
            <p className="text-sm text-[#1a2e35] max-w-lg mt-4 leading-relaxed">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy
              Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled
            </p>

            <div className="flex items-center gap-4 mt-8">
              <Button className="bg-[#FF7F7F] hover:bg-[#ff6a6a] text-white rounded-md px-6 py-3 text-sm font-semibold">View More ↗</Button>
              <Button variant="outline" className="border-[#2DC67D] text-[#2DC67D] rounded-md px-6 py-3 text-sm font-semibold">
                Get In Touch ↗
              </Button>
            </div>
          </div>

          <div className="ml-6">
            <Card className="p-0 shadow-xl rounded-lg overflow-hidden">
              <div className="bg-[#2DC67D0F] px-6 py-4 text-center">
                <h3 className="text-lg font-bold text-gray-900">Create Your Team</h3>
                <p className="text-xs text-gray-600 mt-1">Lorem Ipsum Is Simply Dummy Text Of The Printing</p>
              </div>

              <form className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input placeholder="Enter You Name" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="Enter You Email" className="h-12" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone No</label>
                    <Input placeholder="Enter You Number" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <Input placeholder="Enter You Country" className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Brief</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md resize-none h-24 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                    placeholder="Enter You Project Brief"
                  />
                </div>

                <Button className="w-full bg-[#FF7F7F] hover:bg-[#ff6a6a] text-white py-3 text-sm font-semibold rounded-md">
                  Hire Software Developer ↗
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
