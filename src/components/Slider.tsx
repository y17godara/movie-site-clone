import GlobalApi from "../services/api/GlobalApi";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

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
                    console.log(slicedData);
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


    return (
        <>
            {/* Slider */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                className=""
            >
                {trending.map((data, index) => (
                    <SwiperSlide
                        key={index}
                        className="rounded-md min-h-[300px] md:h-[310px] xl:h-[550px] min-w-full relative overflow-hidden flex justify-center text-center items-center md:hover:border-[2px] border-zinc-600 translate-all duration-75 ease-in-out"
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="flex flex-col text-transparent hover:text-white text-xl font-bold w-full h-full bg-opacity-0 hover:bg-opacity-95 hover:backdrop-filter hover:backdrop-blur transition duration-300 items-center justify-center">
                            {data.title ? data.title : data.name}
                            <span>Rating: {data.vote_average}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            
        </>
    )
}

export default Slider