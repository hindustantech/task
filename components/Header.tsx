"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="assets/images/logo.svg"
              alt="logo"
              className="w-auto"
              style={{ height: "30px" }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Software Services", "Services", "Technologies", "Industries", "Company"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Button and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:inline-flex border-[#2DC67D] bg-transparent"
            >
              Get in Touch
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col space-y-2 bg-white border-t border-gray-100">
          {["Software Services", "Services", "Technologies", "Industries", "Company"].map((link) => (
            <a
              key={link}
              href="#"
              className="block text-gray-700 hover:text-emerald-600 font-medium py-2"
            >
              {link}
            </a>
          ))}
          <Button variant="outline" className="w-full border-[#2DC67D] bg-transparent mt-2">
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
}
