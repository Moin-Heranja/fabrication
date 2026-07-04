import React, { useState } from 'react'
import logo from '../asset/logo.png';
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='bg-gradient-to-b from-black fixed top-0 left-0 z-10 flex w-full h-24 items-center justify-between px-6 md:px-10'>
            {/* Logo on the left */}
            <img
                className='shadow-lg shadow-yellow-500 rounded-full w-10 md:w-12 mt-2'
                src={logo}
                alt="logo"
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-md ml-auto mt-2">
                <Link to="/" className="text-white hover:text-yellow-700 hover:scale-110 hover:animate-pulse transition duration-300 font-moonDance">Home</Link>
                <Link to="/about" className="text-white hover:text-yellow-600 hover:scale-110 hover:animate-pulse transition duration-300 font-moonDance">About Us</Link>
                <Link to="/service" className="text-white hover:text-yellow-600 hover:scale-110 hover:animate-pulse transition duration-300 font-moonDance">Service</Link>
                <Link to="/gallery" className="text-white hover:text-yellow-600 hover:scale-110 hover:animate-pulse transition duration-300 font-moonDance">Gallery</Link>
                <Link to="/contact" className="text-white hover:text-yellow-600 hover:scale-110 hover:animate-pulse transition duration-300 font-moonDance">Contact</Link>

                <div className="bg-black border-4 border-yellow-700 rounded-3xl p-2 shadow-lg shadow-yellow-500 animate-pulse ml-6">
                    <button className="text-white font-bold items-center mr-4 text-md font-moonDance flex gap-2 ml-2">
                        <IoCallOutline className='text-white text-lg' />
                        <Link to='/contact'>Get A Quote</Link>
                    </button>
                </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden ml-auto mt-2">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl">
                    {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-24 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden shadow-lg shadow-yellow-500">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="text-white text-lg font-moonDance">Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white text-lg font-moonDance">About Us</Link>
                    <Link to="/service" onClick={() => setMenuOpen(false)} className="text-white text-lg font-moonDance">Service</Link>
                    <Link to="/gallery" onClick={() => setMenuOpen(false)} className="text-white text-lg font-moonDance">Gallery</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-white text-lg font-moonDance">Contact</Link>

                    <div className="bg-black border-2 border-yellow-700 rounded-3xl p-2 shadow-lg shadow-yellow-500 animate-pulse">
                        <button className="text-white font-bold text-lg font-moonDance flex gap-2">
                            <IoCallOutline className='text-white text-lg' />
                         <Link to='/contact'>Get A Quote</Link>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
