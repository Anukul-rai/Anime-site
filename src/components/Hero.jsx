import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import About from "./About";

function Hero() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const gotoHomepage = () => {
        navigate('/mainpage');
    };

    return (
        <div>
        <div className="flex flex-col items-center justify-center bg-black min-h-screen gap-6 text-white px-4 pt-10">
            {/* Logo */}
            <img src="/logo.png" alt="logo" className="h-16" />

            {/* Search Box */}
            <div className="flex w-full max-w-md rounded-xl overflow-hidden bg-[#1e1e1e]">
            <input
                type="text"
                placeholder="Enter anime name..."
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="bg-fuchsia-800 px-4 flex items-center justify-center hover:bg-pink-700 transition-all cursor-pointer">
                <CiSearch size={24} />
            </button>
            </div>

            {/* Subtitle */}
            <p className="text-gray-400 text-center text-sm px-4">
            9anime.to – Just a better place to watch anime online for free!
            </p>

            {/* Twitter Link */}
            <a
            href="https://twitter.com"
            target="_blank"
            className="flex items-center gap-2 text-[#7c3aed] hover:text-pink-700 transition-colors text-sm"
            rel="noreferrer"
            >
            <FaTwitter />
            Connect with us on Twitter
            </a>

            {/* Main Page Button */}
            <button
            className="bg-fuchsia-800 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-md transition-all text-sm"
            onClick={gotoHomepage}
            >
            Go to Main page
            </button>
        </div>

        {/* About Section */}
        <About />
        </div>
    );
}

export default Hero;
