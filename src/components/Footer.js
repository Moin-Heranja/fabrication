import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-10 sm:py-12 px-4 sm:px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">

          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-moonDance">Pitrukrupa Fabrication</h3>
            <p className="text-white text-sm sm:text-md leading-relaxed">
              Delivering precision, durability, and trust through modern fabrication solutions. We merge technology with craftsmanship to create engineering excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-moonDance">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-white text-sm sm:text-base">
              <li>
                <Link to="/" className="hover:text-yellow-500 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-500 transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-yellow-500 transition duration-300">Service</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-yellow-500 transition duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-500 transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-moonDance">Contact Info</h3>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <FaPhoneAlt className="text-yellow-500 text-base sm:text-xl" />
              <p className="text-gray-300 text-sm sm:text-md">+91 87802 25023</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <FaEnvelope className="text-yellow-500 text-base sm:text-xl" />
              <p className="text-gray-300 text-sm sm:text-md">cp662034@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <FaMapMarkerAlt className="text-yellow-500 text-base sm:text-xl" />
              <p className="text-gray-300 text-sm sm:text-md">Rajkot, Gujarat, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} Pitrukrupa Fabrication. All rights reserved · Privacy Policy
        </div>
      </footer>
    </>
  )
}

export default Footer
