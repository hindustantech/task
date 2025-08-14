import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="assets/images/logo.svg" alt="logo" className="w-full" style={{ height: "30px" }} />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">
              Software Services
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">
              Technologies
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">
              Industries
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">
              Company
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden border-[#2DC67D] sm:inline-flex bg-transparent">
              Get in Toch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
