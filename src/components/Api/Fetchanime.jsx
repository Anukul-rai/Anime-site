export const fetchAnime = async () => {
    try {
        const res = await fetch("https://api.jikan.moe/v4/top/anime?type=ona")
        if (!res.ok) {
        throw new Error(`API error: ${res.status}`)
        }
        const data = await res.json()
        return data.data;
    } catch (error) {
        console.error("Failed to fetch anime:", error)
        return [];
    }
};
