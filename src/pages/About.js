import React from 'react'
import { FaIndustry, FaTools, FaHandshake } from "react-icons/fa";
import Header from '../components/Header.js';
  
const About = () => {
  return (
    <>
      <Header />
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-16 text-white overflow-hidden">

        {/* Extra 3D Animated Background Layers */}
        <div className="absolute inset-0 -z-20 bg-black animate-gradient-x"></div>
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.25),transparent)] animate-spin-slow"></div>
        </div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[conic-gradient(from_180deg_at_center,rgba(255,255,255,0.1),transparent)] animate-pulse"></div>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-moonDance mb-8 sm:mb-10 md:mb-12 animate-slowBounce text-center">
          About Us
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 w-full max-w-6xl">
          
          {/* Card 1 */}
          <div className="bg-black rounded-3xl shadow-lg shadow-yellow-500 p-6 sm:p-8 transform hover:scale-105 transition duration-500">
            <FaIndustry className="text-yellow-600 text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 animate-pulse" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Modern Fabrication</h3>
            <p className="text-gray-300 text-sm sm:text-md leading-relaxed">
              We specialize in delivering cutting-edge fabrication solutions with precision, durability, and innovation at the core of every project.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black rounded-3xl shadow-lg shadow-yellow-500 p-6 sm:p-8 transform hover:scale-105 transition duration-500">
            <FaTools className="text-yellow-600 text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 animate-pulse" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Expert Craftsmanship</h3>
            <p className="text-gray-300 text-sm sm:text-md leading-relaxed">
              Our skilled team combines advanced tools with years of expertise to ensure flawless execution and unmatched quality in every detail.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black rounded-3xl shadow-lg shadow-yellow-500 p-6 sm:p-8 transform hover:scale-105 transition duration-500">
            <FaHandshake className="text-yellow-600 text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 animate-pulse" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Building Trust</h3>
            <p className="text-gray-300 text-sm sm:text-md leading-relaxed">
              We believe in forging long-term partnerships with our clients, built on transparency, reliability, and mutual success.
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-12 sm:mt-14 md:mt-16 text-base sm:text-lg md:text-xl text-white max-w-3xl text-center px-4">
          At Pitrukrupa Fabrication, we merge technology with craftsmanship to deliver solutions that stand the test of time. Your vision, our expertise.
        </p>
      </div>
    </>
  )
}

export default About
