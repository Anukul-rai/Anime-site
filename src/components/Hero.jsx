import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";

function Hero() {
    const [input,setInput] = useState('')

    const gotoHomepage =()=>{

    }
    return (
        <div>
            <Navbar/>
        <div className="flex flex-col items-center justify-center bg-black min-h-screen gap-6 text-white mt-[-70px]"> 
        

        {/* Logo */}
        <img src="/logo.png" alt="logo" className="h-16" />

        {/* Search Box */}
        <div className="flex w-[500px] sm:w-[400px] rounded-xl overflow-hidden bg-[#1e1e1e] ">
            <input
            type="text"
            placeholder="Enter anime name..."
            className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button className="bg-fuchsia-800 px-4 flex items-center justify-center hover:bg-pink-700 transition-all cursor-pointer">
            <CiSearch size={30} />
            </button>
        </div>

        {/* Tagline */}
        <p className="text-gray-500 text-sm text-center">
            9anime.to - Just a better place to watch anime online for free!
        </p>

        {/* Twitter Link */}
        <a
            href="https://twitter.com"
            target="_blank"
            className="flex items-center gap-2 text-[#7c3aed] hover:text-pink-700 transition-colors">
            <FaTwitter />
            Connect with us on twitter
        </a>

        {/* CTA Button */}
        <button 
        className="mt-2 bg-fuchsia-800 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-md transition-all"
        onClick={gotoHomepage}
        >
            Go to home page
        </button>
        </div>
        <About/>
        <Footer/>
        </div>
    );
}

export default Hero;
