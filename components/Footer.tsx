import { MapIcon, MapPin, Phone, PhoneCall } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const icons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <img src="assets/images/log2.svg" alt="logo" style={{ height: "40px" }} />
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
          <div className="flex space-x-3">
            {icons.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white text-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500 hover:text-white transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {["Software Team", "Technologies", "Resources", "Company", "Contact us", "FAQ"].map((link, i) => (
              <li key={i}>
                <a href="#" className="text-gray-300 hover:text-emerald-500 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Services</h3>
          <ul className="space-y-3">
            {["Dedicated Development", "Staff Augmentation Services", "Software Development", "Development Center"].map((service, i) => (
              <li key={i}>
                <a href="#" className="text-gray-300 hover:text-emerald-500 transition-colors">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start space-x-3">
              <span className="text-emerald-500">
                <MapPin />
              </span>
              <span>Siwan Bihar, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-500">
                <Phone />
              </span>
              <span>+91 6202400672</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-500">
                <FaEnvelope />
              </span>
              <span>kumarrupees507@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-emerald-500 py-4 text-center text-white font-medium">logoname. 2023. All rights reserved</div>
    </footer>
  );
}
