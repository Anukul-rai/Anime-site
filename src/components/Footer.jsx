import React from 'react'

function Footer() {
    return (
        <div className='flex items-center  bg-slate-900 '>
            <img src="/logo.png" alt="logo"className='h-10 ' />
            <div className='flex flex-col gap-2'>
                <p>Copyright © 9anime. All Rights Reserved</p>
                <p>Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties</p>
            </div>
        
        </div>
    )
}

export default Footer
