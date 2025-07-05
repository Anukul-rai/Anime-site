import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
        {/* Top Navbar */}
        <nav className="flex items-center justify-between bg-slate-900 p-4">
            <div>
            <HiMenuAlt1
                size={35}
                color="white"
                className="cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(!isOpen)
                }}
            />
            </div>
            <Link to='/'>
            <img src="/logo.png" alt="logo" className="h-12 w-auto" />
            </Link>
            <Searchbar/>

            <Link to='/login'
            className="bg-fuchsia-800 text-white px-5 py-3 rounded-full hover:bg-pink-700 transition duration-300 font-light text-sm">
            Sign In
            </Link>
        </nav>

        {/* Dropdown Menu */}
        {isOpen && (
            <div className="absolute z-10 mt-1 w-full flex justify-start">
                <div className="flex flex-col gap-2 text-white bg-fuchsia-800 px-6 py-4 rounded-xl shadow-xl">
                    <Link to="/home" className="hover:text-gray-300">Home</Link>
                    <Link to="/genre" className="hover:text-gray-300">Genre</Link>
                    <Link to="/types" className="hover:text-gray-300">Types</Link>
                    <Link to="/updated" className="hover:text-gray-300">Updated</Link>
                    <Link to="/added" className="hover:text-gray-300">Added</Link>
                </div>
            </div>
)}

        </div>
    );
}

export default Navbar;
