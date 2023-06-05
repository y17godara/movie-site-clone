import { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/api/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

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


    // Slider Buttons
    const windowWidth = window.innerWidth;
    const elementRef = useRef<HTMLDivElement>(null);

    const slideLeft = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft += windowWidth-110;
        }
    };

    const slideRight = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft -= windowWidth-110;
        }
    };


    return (
        <>
            <HiChevronLeft 
            onClick={() => slideRight(elementRef.current)}
            className="hidden  md:block cursor-pointer text-white text-[30px] absolute mx-8 mt-[150px] " />
            <HiChevronRight 
            onClick={() => slideLeft(elementRef.current)}
            className="hidden  md:block right-0 cursor-pointer text-white text-[30px] absolute mx-8 mt-[150px] " />
            
            <div 
            ref={elementRef}
            className="flex w-full overflow-x-auto px-6 md:px-16  py-4 scroll-smooth scrollbar-none">
                {trendingMovies.map((movie, index) => (

                    <img key={index} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md md:hover:border-[2px] border-zinc-600 translate-all duration-75 ease-in-out"
                        alt={movie.title} />

                ))}
            </div >
        </>
    )
}

export default Slider