import GlobalApi from "../../services/api/GlobalApi";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";

interface MiniSwipperProps {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

function MiniSwipper() {
  // State
  const [movies, setMovies] = useState<MiniSwipperProps[]>([]);

  // Upcoming API
  useEffect(() => {
    let isMounted = true;
    const getMovies = async () => {
      try {
        const response = await GlobalApi.getTrendingMovies();
        if (isMounted) {
          // Get Data and Slice it
          const data = response.data.results;
          // console.log(data);
          setMovies(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    // Fetch Upcoming API
    getMovies();
    return () => {
      isMounted = false;
    };

  }, []);

  return (
    <>

      <div>
        <h2 className="font-bold text-2xl ml-2 p-2">
          Movies
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay]}
          loop={true}
          className="w-full h-[190px] sm:h-[200px] md:h-[200px] xl:h-[230px] px-2"
        >
          {movies.map((data, index) => (
            <SwiperSlide
              key={index}
              className="rounded-md max-h-[250px] min-h-[250px] min-w-[200px] relative overflow-hidden flex justify-center text-center items-center md:hover:border-[2px] border-zinc-600 translate-all duration-75 ease-in-out"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="flex-col text-transparent hover:text-white text-xl font-bold w-full h-full bg-opacity-0 hover:bg-opacity-75 hover:backdrop-filter hover:backdrop-blur transition duration-300 flex items-center justify-center">
                {data.title}
                <span>{data.release_date}</span>
                <span>Rating: {data.vote_average}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </>
  )
}

export default MiniSwipper;