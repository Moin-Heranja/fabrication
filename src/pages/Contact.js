import React from 'react'
import Header from '../components/Header.js'
import videoBg from '../asset/effect.mp4'
import Footer from '../components/Footer.js'

const Contact = () => {
  return (
    <section className="pt-20 sm:pt-24 relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
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
      <div className="flex flex-col items-center justify-center pb-8 sm:pb-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-moonDance mb-4 sm:mb-6 animate-slowBounce">
          Contact Us
        </h2>
      </div>
    
      {/* Footer Text */}
      <div className="flex justify-center px-4 pb-12 sm:pb-14 md:pb-16">
        <p className="text-sm sm:text-base md:text-lg text-white max-w-xl sm:max-w-2xl md:max-w-4xl text-center">
          Let’s collaborate to create fabrication solutions that stand the test of time. Reach out today and start building with us.
        </p>
      </div>

      <Footer/>
    </section>
  )
}

export default Contact
