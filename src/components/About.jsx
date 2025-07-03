import React from 'react'

function About() {
    return (
        <div className='flex flex-col bg-black px-35 mt-[-70px] text-gray-400'>
        <div className="bg-black flex flex-col gap-3 text-md">
            <p>9anime is a free anime website where millions visit to watch anime online.</p>
            <p className='mb-4 '>9anime provides users with various genres including Action, Comedy, Demons, Drama, Historical, Romance, Samurai, School, Shoujo Ai, Shounen Supernatural, etc. This is the perfect place to expand the imagination of children under 12 years old as well as spread beautiful images of friendship, family, teammates, magic, etc. 9anime is committed to keeping you updated with the latest releases and providing excellent streaming capabilities for the best experience possible.</p>
        </div>
        <div className='bg-black flex flex-col gap-2 text-md'>
            <h2 className='text-2xl font-semibold text-white'>Watch Anime Online Free</h2>
            <p className='mb-4'>It all started in 2016 when we officially launched the system of file sharing. We boast HD quality as well as fast download speed. To provide our users with multiple choices, we use links from third party sources like mp4upload, vidstream, streamtape, mycloud. Your Favorite Anime is available for live streaming and can reach a huge number of audiences around the world. The demand for Japanese anime has steadily been on the rise recently all over the world. When 9anime was shut down for the first time, multiple fake copies that are prone to viruses and malware came into existence. For your utmost safety, visit our official 9anime website only.</p>
        </div>
        <div className='bg-black flex flex-col gap-2 text-md'>
            <h2 className='text-2xl font-semibold text-white'>Is KissAnime better than 9anime?</h2>
            <p className='mb-4'>The fact that 9anime is new doesn't make it less competitive. The 9anime team has learnt from KissAnime's mistakes to create a site with better quality content library and much more outstanding updates than KissAnime. Titles you cannot find on 9anime are highly unlikely to be found anywhere else. 9anime is the easiest and fastest place to connect you with your titles of interest.</p>
        </div>
        <div className='bg-black flex flex-col gap-2 text-md'>
            <h2 className='text-2xl font-semibold text-white'>Is 9anime safe?</h2>
            <p className='mb-4'>We haven't received any report regarding the site's security. However, for your utmost safety, you should take precautionary measures such as a VPN to stay anonymous, anti-virus program and AdBlock extension to avoid ads and popups.</p>
        </div>
        <div className='flex justify-center mb-5'>
            <button className="mt-2 bg-fuchsia-800 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-md transition-all">
            Go to home page
        </button>
        </div>
        </div>
    )
}

export default About
