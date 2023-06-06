import { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/api/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface Trending {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
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
                className="hidden  md:block cursor-pointer text-white text-[30px] absolute mx-8 md:mt-[150px] xl:mt-[275px]" />
            <HiChevronRight
                onClick={() => slideLeft(elementRef.current)}
                className="hidden  md:block right-0 cursor-pointer text-white text-[30px] absolute mx-8 md:mt-[150px] xl:mt-[275px]" />

            {/* Slider */}
            <div
                ref={elementRef}
                className="flex w-full overflow-x-auto px-2 md:px-16  py-4 scroll-smooth scrollbar-none">
                {trending.map((data, index) => (

                    <img key={index} src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                        className="min-w-full md:h-[310px] xl:h-[550px] object-cover object-left-top mr-5 rounded-md md:hover:border-[2px] border-zinc-600 translate-all duration-75 ease-in-out"
                        alt={data.title} />

                ))}
            </div >
        </>
    )
}

export default Slider