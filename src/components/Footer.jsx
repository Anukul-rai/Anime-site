import React from 'react'

function Footer() {
    return (
        <div className='flex items-center  bg-slate-900 '>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Left side - Logo and copyright */}
                <div className="mb-6 md:mb-0 ml-3">
                    <div className="flex items-center mb-4">
                        <img src="/logo.png" alt="" className='h-15 mt-3' />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">Copyright © 9anime. All Rights Reserved</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            {/* Help section */}
            <div className=' flex flex-col ml-80 mt-2 p-3'>
                <h4 className="text-lg font-semibold mb-3">Help</h4>
                <ul className="space-y-2 text-sm">
                    <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        Contact
                    </a>
                    </li>
                    <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        FAQ
                    </a>
                    </li>
                    <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        9anime App
                    </a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Footer
