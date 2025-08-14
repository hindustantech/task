"use client";

import { Play, Star } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Krish Bruynson",
      position: "Director, Storloft",
      image: "/assets/images/test1.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Krish Bruynson",
      position: "Director, Storloft",
      image: "/assets/images/test2.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Krish Bruynson",
      position: "Director, Storloft",
      image: "/assets/images/test3.png",
      rating: 5,
    },
    {
      id: 4,
      name: "Krish Bruynson",
      position: "Director, Storloft",
      image: "/assets/images/test4.png",
      rating: 5,
    },
  ];

  return (
    <section
      className="py-20"
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
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Have To Say About Us</h2>
          <p className="text-base sm:text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Video Card Container */}
              <div
                className="relative w-full max-w-[220px] mx-auto overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
                }}
              >
                {/* Background Image */}
                <div className="relative h-48 sm:h-56 bg-gray-200">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-black group-hover:bg-opacity-30 transition-all duration-300"
                    style={{ opacity: "0.4" }}
                  ></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md transform transition-all duration-300 ${
                        hoveredCard === index ? "scale-110 bg-green-400" : ""
                      }`}
                    >
                      <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-green-500 transition-all duration-300"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
                  }}
                ></div>
              </div>

              {/* Text Section */}
              <div className="mt-3 text-left ml-4">
                <h3 className="text-sm sm:text-base font-bold text-black mb-0.5 drop-shadow-lg">{testimonial.name}</h3>
                <p className="text-black text-xs sm:text-sm drop-shadow-lg">{testimonial.position}</p>

                {/* Star Rating */}
                <div className="flex justify-start mt-1 space-x-0.5">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-3 h-3 text-green-400 fill-current drop-shadow-lg" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
