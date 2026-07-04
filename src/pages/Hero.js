import React from 'react'
import logo from '../asset/logo.png'
import Header from '../components/Header'
import videoBg from '../asset/effect.mp4' 
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Header />

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Logo centered below header */}
        <img
          src={logo}
          alt="logo"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-lg shadow-yellow-500 mb-6 animate-slowBounce"
        />

        <h1 className="text-white font-bold font-moonDance text-3xl sm:text-4xl md:text-6xl mt-4 leading-snug">
          Engineering Strength · Building Trust
        </h1>

        <p className="font-moonDance mt-6 sm:mt-8 md:mt-12 text-white text-base sm:text-lg md:text-2xl max-w-xl sm:max-w-2xl">
          Welcome to Pitrukrupa Fabrication, your trusted partner for premium-quality fabrication solutions.
        </p>

        <div className="bg-black border-4 border-yellow-700 rounded-3xl p-2 shadow-lg shadow-yellow-500 animate-pulse mt-8 sm:mt-10">
          <Link to="/contact" className="text-white px-4 sm:px-6 text-sm sm:text-base">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
