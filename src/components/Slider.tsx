import { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/api/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface Trending {
    id: number;
    title: string;
    name: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
}

function Slider() {
    // State
    const [trending, setTrending] = useState<Trending[]>([]);

    // Trending API
    useEffect(() => {
        let isMounted = true;
        const getTrending = async () => {
            try {
                const response = await GlobalApi.getTrending();
                if (isMounted) {
                    // Get Data and Slice it
                    const data = response.data.results;
                    const slicedData = data.slice(0, 10);
                    // console.log(slicedData);
                    setTrending(slicedData);
                }
            } catch (error) {
                console.error(error);
            }
        };
        // Fetch Trending API
        getTrending();
        return () => {
            isMounted = false;
        };

    }, []);


    // Slider Buttons
    const windowWidth = window.innerWidth;
    const elementRef = useRef<HTMLDivElement>(null);

    const slideLeft = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft += windowWidth - 110;
        }
    };
    const slideRight = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft -= windowWidth - 110;
        }
    };

    return (
        <>
            <HiChevronLeft
                onClick={() => slideRight(elementRef.current)}
                className="hidden md:block cursor-pointer text-white text-[30px] absolute mx-8 md:mt-[150px] xl:mt-[275px] z-50" />
            <HiChevronRight
                onClick={() => slideLeft(elementRef.current)}
                className="hidden md:block right-0 cursor-pointer text-white text-[30px] absolute mx-8 md:mt-[150px] xl:mt-[275px] z-50" />

            {/* Slider */}
            <div
                ref={elementRef}
                className="flex w-full overflow-x-auto px-2 md:px-16 py-4 scroll-smooth scrollbar-none">
                {trending.map((data, index) => (

                    <div
                        key={index}
                        className="rounded-md min-h-[300px]  md:h-[310px] xl:h-[550px] min-w-full relative overflow-hidden flex justify-center text-center items-center md:hover:border-[2px] border-zinc-600 translate-all duration-75 ease-in-out"
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="flex flex-col text-transparent hover:text-white text-xl font-bold w-full h-full bg-opacity-0 hover:bg-opacity-95 hover:backdrop-filter hover:backdrop-blur transition duration-300 items-center justify-center">
                            {data.title ? data.title : data.name}
                            <span>Rating: {data.vote_average}</span>
                        </div>
                    </div>
                    // <div key={index}>
                    //     <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                    //         className="min-w-full md:h-[310px] xl:h-[550px] object-cover object-left-top mr-5 rounded-md md:hover:border-[2px] border-zinc-600 translate-all duration-75 ease-in-out"
                    //         alt={data.title} />
                    // </div>
                ))}
            </div >
        </>
    )
}

export default Slider