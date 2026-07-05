import React, { useEffect, useState } from 'react'
import logo from '../asset/logo.png'
import Home from './Home'

const Loader = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full shadow-lg shadow-yellow-500 animate-bounce mb-6"
        />

        {/* Company Name */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-moonDance animate-pulse tracking-wide">
          PITRUKRUPA FABRICATION
        </h1>

        {/* Loading Percentage */}
        <p className="mt-8 text-lg font-semibold text-yellow-400">
          {progress}%
        </p>

        {/* Professional Loading Bar */}
        <div className="w-72 sm:w-80 h-3 bg-gray-700 rounded-full overflow-hidden mt-3 shadow-lg">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-75 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

      </div>
    )
  }

  return <Home />
}

export default Loader