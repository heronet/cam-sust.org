import React from "react";
import { Mail, Facebook, MapPin, Calendar } from "lucide-react";

const Footer: React.FC = () => {
  const socials = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/camsust",
      color: "hover:text-blue-500",
    },

    {
      icon: Mail,
      href: "mailto:contact@cam-sust.org",
      color: "hover:text-red-400",
    },
  ];

  const links = [
    { name: "Activities", href: "#activities" },
    { name: "Magazine", href: "#magazine" },
    { name: "Research Papers", href: "#research" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="relative bg-black/[0.96] border-t border-neutral-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Club Info Section */}
          <div className="space-y-4">
            <img
              src="/images/cam-white.png"
              alt="CAM-SUST Logo"
              className="h-12"
            />
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Astronomy Research & Outreach Organization</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Copernicus Astronomical Memorial - The only astronomy organization
              of SUST. Exploring the cosmos through education, observation, and
              community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities & Events */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Activities</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Monthly Study Circles</span>
              </li>
              <li className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Annual Astro Carnival</span>
              </li>
              <li className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-green-400" />
                <span>School Outreach Programs</span>
              </li>
              <li className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <span>World Space Week (Oct 4-10)</span>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Connect With Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>SUST, Sylhet, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href="mailto:contact@cam-sust.org"
                  className="hover:text-blue-400 transition-colors"
                >
                  contact@cam-sust.org
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              {socials.map(({ icon: Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  className={`text-gray-400 ${color} transition-colors duration-200`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="">
          {/* Inspirational Quote */}
          <div className="text-center mt-6 pt-6 border-neutral-800">
            <p className="text-gray-400 text-sm italic border-b pb-4">
              &quot;The cosmos is all there is, all there ever was, and all
              there ever will be.&quot; - Carl Sagan
            </p>
            <div className="text-gray-400 text-sm  pt-4">
              © {new Date().getFullYear()} CAM-SUST. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
