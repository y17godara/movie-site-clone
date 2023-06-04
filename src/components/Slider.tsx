import { useEffect, useState } from "react";
import GlobalApi from "../services/api/GlobalApi";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
}


function Slider() {
    // State
    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

    // Fetch Trending Movies API
    useEffect(() => {
        let isMounted = true;
        const getTrendingMovies = async () => {
            try {
                const response = await GlobalApi.getTrendingMovies;
                if (isMounted) {
                    // Get Data and Slice it
                    const data = response.data.results;
                    const slicedData = data.slice(0, 10);
                    // log data
                    console.log(slicedData);
                    // State
                    setTrendingMovies(slicedData);
                }
            } catch (error) {
                console.error(error);
            }
        };
        // Fetch Trending Movies API
        getTrendingMovies();
        return () => {
            isMounted = false;
        };

    }, [])


    return (
        <>
            <div className="flex w-full overflow-x-auto px-16 py-4 scrollbar-none">
                {trendingMovies.map((movie, index) => (

                    <img key={index} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        className="min-w-full h-[300px] md:h-[460px] object-cover object-left-top md:object-top  mr-5 rounded-md"
                        alt={movie.title} />

                ))}
            </div >
        </>
    )
}

export default Slider