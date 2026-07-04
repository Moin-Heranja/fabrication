import React from 'react'
import Header from '../components/Header.js'

// Example HD fabrication images (replace with your own in /asset folder)
import img1 from '../asset/fabrication1.jpg'
import img2 from '../asset/fabrication2.jpg'
import img3 from '../asset/fabrication3.jpg'
import img4 from '../asset/fabrication4.jpg'
import img5 from '../asset/fabrication5.jpg'
import img6 from '../asset/fabrication6.jpg'

const Gallery = () => {
  return (
    <section className="pt-20 sm:pt-24 relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Fixed Header */}
      <Header />

      {/* Title */}
      <div className="flex flex-col items-center justify-center pb-8 sm:pb-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-moonDance mb-4 sm:mb-6 animate-slowBounce">
          Our Gallery
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl">
          Explore our portfolio of fabrication projects showcasing precision, innovation, and modern engineering excellence.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-16 pb-16 sm:pb-20 md:pb-24 max-w-7xl mx-auto">
        
        {/* Item 1 */}
        <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg shadow-yellow-500 transform hover:scale-105 transition duration-500">
          <img src={img1} alt="Fabrication Project 1" className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:opacity-80 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 transition duration-500">
            <p className="text-white text-sm sm:text-base md:text-lg font-semibold">Heavy Metal Structures</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg shadow-yellow-500 transform hover:scale-105 transition duration-500">
          <img src={img2} alt="Fabrication Project 2" className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:opacity-80 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 transition duration-500">
            <p className="text-white text-sm sm:text-base md:text-lg font-semibold">Precision Welding</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg shadow-yellow-500 transform hover:scale-105 transition duration-500">
          <img src={img3} alt="Fabrication Project 3" className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:opacity-80 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 transition duration-500">
            <p className="text-white text-sm sm:text-base md:text-lg font-semibold">Industrial Machinery</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg shadow-yellow-500 transform hover:scale-105 transition duration-500">
          <img src={img4} alt="Fabrication Project 4" className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:opacity-80 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 transition duration-500">
            <p className="text-white text-sm sm:text-base md:text-lg font-semibold">Modern Steel Design</p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg shadow-yellow-500 transform hover:scale-105 transition duration-500">
          <img src={img5} alt="Fabrication Project 5" className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:opacity-80 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 transition duration-500">
            <p className="text-white text-sm sm:text-base md:text-lg font-semibold">Architectural Fabrication</p>
          </div>
        </div>

        {/* Item 6 */}
        <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg shadow-yellow-500 transform hover:scale-105 transition duration-500">
          <img src={img6} alt="Fabrication Project 6" className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:opacity-80 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 transition duration-500">
            <p className="text-white text-sm sm:text-base md:text-lg font-semibold">Custom Engineering Solutions</p>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="flex justify-center px-4 pb-12 sm:pb-14 md:pb-16">
        <p className="text-base sm:text-lg md:text-xl text-white max-w-xl sm:max-w-2xl md:max-w-4xl text-center">
          Each project reflects our commitment to innovation, quality, and trust. Discover how we transform raw materials into engineering marvels.
        </p>
      </div>
    </section>
  )
}

export default Gallery
