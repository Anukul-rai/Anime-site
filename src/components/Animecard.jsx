import React, { useEffect, useState } from 'react';
import { fetchAnime } from './Api/Fetchanime';
import { Link } from 'react-router-dom';

function Animecard() {
    const [anime, setAnime] = useState([]);

    useEffect(() => {
        const loadAnime = async () => {
        const animeData = await fetchAnime();
        setAnime(animeData);
        };

        loadAnime();
    }, []);

    return (
        <div className="bg-black min-h-screen px-4 py-6">
        <h1 className="text-3xl text-white font-bold mb-6 text-center">Top Anime</h1>

        <div className="flex flex-wrap justify-center gap-1 sm:gap-4 max-w-screen-xl mx-auto">
            {anime.map((item, i) => (
            <div
                key={i}
                className="flex flex-col gap-2 bg-[#1e1e1e] text-white rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 w-[200px] max-w-[300px] sm:max-w-[220px] md:max-w-[250px] "
            >
                <Link to={item.url} rel="noopener noreferrer">
                <img
                    src={item.images.jpg.image_url}
                    alt={item.title_english || item.title}
                    className="w-full h-60 sm:h-64 object-cover"
                />
                </Link>
                <div className="p-3 flex flex-col gap-1">
                <h2 className="text-md font-semibold truncate">{item.title_english || item.title}</h2>
                <p className="text-sm text-gray-400">Episodes: {item.episodes || 'N/A'}</p>
                <p className="text-sm text-gray-400">Status: {item.status}</p>
                <p className="text-sm text-gray-400">Duration: {item.duration}</p>
                <p className="text-sm text-gray-400">Rank: {item.rank}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Animecard;
