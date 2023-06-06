import axios from 'axios';
// Global API Config
import { API_URL, API_KEY } from './config.json';
const APP_API_URL = API_URL;
const APP_API_KEY = API_KEY;

//Fetch Trending API
const getTrending = () => {
    const response = axios.get(`${APP_API_URL}/trending/all/day?api_key=${APP_API_KEY}&language=en-US`);
    return response;
};

// Fetch Trending Movies API
const getTrendingMovies = async () => {
    const response = await axios.get(`${APP_API_URL}/trending/movie/day?api_key=${APP_API_KEY}&language=en-US`);
    return response;
};

// Fetch Trending TV Shows API
const getTrendingTVShows = async () => {
    const response = await axios.get(`${APP_API_URL}/trending/tv/day?api_key=${APP_API_KEY}&language=en-US`);
    return response;
};

export default {
    getTrending,
    getTrendingMovies,
    getTrendingTVShows,
};