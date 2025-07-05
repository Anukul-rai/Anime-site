import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";


function Searchbar() {
    const[input,setInput]=useState('')
    return (
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
    )
}

export default Searchbar
