import { Link } from "react-router-dom";
import { Mail, Calendar, Users, MapPin } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 flex items-center justify-center shadow-md">
                <img
                  className="text-white font-bold text-sm"
                  src="images/ieee-logo.png"
                  alt="IEEE Logo"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">
                  SUI - IEEE SB
                </h3>
                <p className="text-sm text-gray-400">Student Branch</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering students to innovate, collaborate, and advance
              technology for the betterment of humanity.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="font-semibold text-lg text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {["About", "Events", "Resources"].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${link.toLowerCase().replace(/\s/g, "")}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h4 className="font-semibold text-lg text-white mt-6 mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sui_ieee?igsh=NWNldnZycm90cHZ4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@suiieee-y6z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors text-2xl"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/sui-ieee/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Chapters */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Chapters</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-blue-400 transition-colors">
                Computer Society
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Power & Energy Society
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Women in Engineering
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Young Professionals
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-500" />
                <a
                  href="mailto:sui.ieee@sageuniversity.in"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  sui.ieee@sageuniversity.in
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span className="text-gray-400">Fridays, 4:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-4 w-4 text-blue-500" />
                <span className="text-gray-400">200+ Active Members</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span className="text-gray-400">SAGE University, Indore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} IEEE Student Branch, SAGE University
            Indore. <span className="text-blue-400">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
