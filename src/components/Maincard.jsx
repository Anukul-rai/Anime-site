import React, { useEffect, useState } from 'react';
import { fetchAnime } from './Api/Fetchanime';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Maincard() {
    const list = ['Action', 'Romance', 'Comedy', 'Adventure', 'Fantasy'];
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        const fetch = async () => {
        const aniData = await fetchAnime();
        setDisplay(aniData);
        };
        fetch();
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 2,   // Adjust for screen size
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024, // for tablets
            settings: {
            slidesToShow: 2,
            },
        },
        {
            breakpoint: 640, // for mobile
            settings: {
            slidesToShow: 1,
            },
        },
        ],
    };

    return (
        <div className="flex flex-row items-start justify-between bg-black gap-1 px-4 py-6">
        {/* Anime Card Slider */}
        <div className="w-[75%]">
            <Slider {...sliderSettings}>
            {display.map((item, i) => (
                <div key={i} className="px-2">
                <div className="bg-cyan-300 rounded-t-xl overflow-hidden">
                    <img
                    src={item.trailer?.images?.small_image_url}
                    alt={item.title}
                    className=" object-cover"
                    />
                </div>
                <div className="bg-fuchsia-800 p-4 rounded-b-xl">
                    <h1 className="text-black text-lg font-bold">
                    {item.title_english || item.title}
                    </h1>
                    <p className="text-xs text-white">Episodes: {item.episodes || 'N/A'}</p>
                    <button className="bg-black text-white px-3 py-2 mt-2 rounded-full text-sm">
                    Watch now
                    </button>
                </div>
                </div>
            ))}
            </Slider>
        </div>

        {/* Filter Section */}
        <div className="bg-[#1b1b1b] rounded-xl mt-2 h-fit flex flex-col w-[25%] p-4">
            <h2 className="text-lg font-bold my-4 text-center">🎯 Quick Filter</h2>
            <div className="flex flex-col gap-2">
            {list.map((genre) => (
                <button
                key={genre}
                className="bg-fuchsia-700 hover:bg-pink-700 text-white text-sm py-2 rounded-full transition"
                >
                {genre}
                </button>
            ))}
            </div>
            <div className="flex justify-center mt-4">
            <input
                type="text"
                placeholder="Search..."
                className="border rounded-3xl p-2 w-full text-xs"
            />
            </div>
        </div>
        </div>
    );
}

export default Maincard;
