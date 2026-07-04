import React from 'react'
import Header from '../components/Header'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'
import { FaWhatsapp } from "react-icons/fa"

const Home = () => {
  return (
    <>
      {/* Fixed Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" className="h-screen">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-black">
        <About />
      </section>
      
      <section id="gallery" className="min-h-screen bg-black">
        <Gallery />
      </section>

      <section id="services" className="min-h-screen bg-black">
        <Services />
      </section>

      <section id="contact" className="min-h-screen bg-black">
        <Contact />
      </section>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/919876543210" // Replace with your WhatsApp number in international format
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500 transition duration-300 flex items-center justify-center"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  )
}

export default Home
