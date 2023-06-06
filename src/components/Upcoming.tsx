import { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/api/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface Upcoming {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

function Upcoming() {
  // State
  const [upcoming, setUpcoming] = useState<Upcoming[]>([]);

  // Upcoming API
  useEffect(() => {
    let isMounted = true;
    const getUpcoming = async () => {
      try {
        const response = await GlobalApi.getUpcoming();
        if (isMounted) {
          // Get Data and Slice it
          const data = response.data.results;
          console.log(data);
          setUpcoming(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    // Fetch Upcoming API
    getUpcoming();
    return () => {
      isMounted = false;
    };

  }, []);


  // Slider Buttons
  const windowWidth = window.innerWidth;
  const elementRef = useRef<HTMLDivElement>(null);

  const slideLeft = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft += windowWidth - 150;
    }
  };
  const slideRight = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft -= windowWidth - 150;
    }
  };

  return (
    <>
      {/* Slider */}
      <div className="">
        <HiChevronLeft
          onClick={() => slideRight(elementRef.current)}
          className="hidden z-50  md:block cursor-pointer text-white text-[30px] absolute md:mx-[16rem] xl:mx-[18rem] mt-[125px]" />
        <HiChevronRight
          onClick={() => slideLeft(elementRef.current)}
          className="hidden z-50  md:block right-0 cursor-pointer text-white text-[30px] absolute md:mx-[2rem] xl:mx-16 mt-[125px]" />
        

        {/* Desktop */}
        <div className="flex px-2 gap-2 md:gap-4 flex-row md:pl-16 md:pr-4 xl:h-[250px]">
          <div className="flex items-center justify-center text-center md:p-4 font-bold text-xl">
            <h2 className="border border-zinc-500">
              Upcoming Movies
            </h2>
          </div>
          {/* Slider */}
          <div ref={elementRef} className="flex w-full overflow-x-auto gap-5 md:px-16 py-4 scroll-smooth scrollbar-none">
            {upcoming.map((data, index) => (
              <div
                key={index}
                className="rounded-md  max-h-[250px] min-h-[250px] min-w-[200px] relative overflow-hidden flex justify-center text-center items-center md:hover:border-[2px] border-zinc-600 translate-all duration-75 ease-in-out"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="text-transparent hover:text-white text-xl font-bold w-full h-full bg-opacity-0 hover:bg-opacity-75 hover:backdrop-filter hover:backdrop-blur transition duration-300 flex items-center justify-center">
                  {data.title}
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  )
}

export default Upcoming;