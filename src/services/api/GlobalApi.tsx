import axios from 'axios';

// Global API Config
import { API_URL, API_KEY } from './config.json';
const APP_API_URL = API_URL;
const APP_API_KEY = API_KEY;


// Fetch Trending Movies API
const getTrendingMovies = axios.get(`${APP_API_URL}/trending/movie/day?api_key=${APP_API_KEY}&language=en-US`);

export default {
    getTrendingMovies
}
