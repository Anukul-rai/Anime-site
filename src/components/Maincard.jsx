import React, { useEffect, useState } from 'react';
import { fetchAnime } from './Api/Fetchanime';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

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
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            },
        },
        ],
    };

    return (
        <div className="bg-black px-4 py-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 max-w-screen-xl mx-auto">
            {/* Anime Card Slider */}
            <div className="w-full lg:w-[75%] px-1">
            <Slider {...sliderSettings}>
                {display.map((item, i) => (
                <div key={i} className="px-2">
                    <div className="bg-none rounded-t-xl overflow-hidden">
                    <img
                        src={item.trailer?.images?.small_image_url}
                        alt={item.title}
                        className="w-full h-60 object-cover rounded-t-xl"
                    />
                    </div>
                    <div className="bg-fuchsia-800 p-4 rounded-b-xl flex flex-row justify-between items-center">
                    <div>
                        <h1 className="text-black text-md font-bold">
                        {item.title_english || item.title}
                        </h1>
                        <p className="text-xs text-white">Episodes: {item.episodes || 'N/A'}</p>
                    </div>
                    <Link to={item.url}>
                        <button className="bg-black text-white px-3 py-2 rounded-full text-sm">
                        Watch now
                        </button>
                    </Link>
                    </div>
                </div>
                ))}
            </Slider>
            </div>

            {/* Filter Section */}
            <div className="w-full lg:w-[25%] bg-[#1b1b1b] rounded-xl p-4 h-fit">
            <h2 className="text-lg font-bold my-4 text-center text-white">🎯 Quick Filter</h2>
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
            <div className="mt-4">
                <input
                type="text"
                placeholder="Search..."
                className="border rounded-3xl px-4 py-2 w-full text-xs bg-black text-white placeholder-gray-400"
                />
            </div>
            </div>
        </div>
        </div>
    );
}

export default Maincard;
