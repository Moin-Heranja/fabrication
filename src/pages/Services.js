import React from 'react'
import Header from '../components/Header.js'
import { FaCogs, FaDraftingCompass, FaProjectDiagram } from "react-icons/fa"
import videoBg from '../asset/effect.mp4' 

const Services = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Fixed Header */}
      <Header />

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-30"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Title */}
      <div className="flex flex-col items-center justify-center pt-20 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-moonDance mb-4 sm:mb-5 md:mb-6 animate-slowBounce">
          Our Services
        </h2>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl">
          At Pitrukrupa Fabrication, we deliver world-class engineering and fabrication services designed to meet the highest standards of quality, precision, and trust.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4 sm:px-8 md:px-16 pb-16 sm:pb-20 md:pb-24 max-w-7xl mx-auto">
        
        {/* Service 1 */}
        <div className="bg-black rounded-3xl shadow-lg shadow-yellow-500 p-6 sm:p-8 md:p-10 transform hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-yellow-300">
          <FaCogs className="text-yellow-600 text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 md:mb-6 animate-spin-slow" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Custom Fabrication</h3>
          <p className="text-gray-300 text-sm sm:text-md md:text-base leading-relaxed">
            We provide tailored fabrication solutions using advanced machinery and skilled craftsmanship, ensuring durability and precision in every project.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-black rounded-3xl shadow-lg shadow-yellow-500 p-6 sm:p-8 md:p-10 transform hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-yellow-300">
          <FaDraftingCompass className="text-yellow-600 text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 md:mb-6 animate-pulse" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Design & Engineering</h3>
          <p className="text-gray-300 text-sm sm:text-md md:text-base leading-relaxed">
            Our expert team combines creativity with technical expertise to deliver innovative designs that meet client requirements and industry standards.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-black rounded-3xl shadow-lg shadow-yellow-500 p-6 sm:p-8 md:p-10 transform hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-yellow-300">
          <FaProjectDiagram className="text-yellow-600 text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 md:mb-6 animate-slowBounce" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Project Management</h3>
          <p className="text-gray-300 text-sm sm:text-md md:text-base leading-relaxed">
            From concept to completion, we manage projects with precision, ensuring timely delivery, cost efficiency, and uncompromised quality.
          </p>
        </div>
      </div>

      {/* Footer Text */}
      <div className="flex justify-center px-4 pb-12 sm:pb-14 md:pb-16">
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl sm:max-w-2xl md:max-w-4xl text-center">
          Our services are built on innovation, trust, and excellence. Partner with us to bring your vision to life with unmatched quality and professionalism.
        </p>
      </div>
    </div>
  )
}

export default Services
