import { useEffect, useState, useRef } from "react";
import GlobalApi from "../../services/api/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface CommonSliderProps {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
}


function CommonSlider() {

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
                          Recommeded For You
                      </h2>
                  </div>
                  {/* Slider */}
                  <div ref={elementRef} className="flex w-full overflow-x-auto gap-5 md:px-16 py-4 scroll-smooth scrollbar-none">
                      <div
                          
                          className="rounded-md  max-h-[250px] min-h-[250px] min-w-[200px] relative overflow-hidden flex justify-center text-center items-center md:hover:border-[2px] border-zinc-600 translate-all duration-75 ease-in-out"
                          style={{
                              backgroundImage: `url(https://image.tmdb.org/t/p/original//1IM8i8HiomFC4y6NRyBuDrHJWg3.jpg)`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                          }}
                      >
                          <div className="flex-col text-transparent hover:text-white text-xl font-bold w-full h-full bg-opacity-0 hover:bg-opacity-75 hover:backdrop-filter hover:backdrop-blur transition duration-300 flex items-center justify-center">
                              {`Example Title`}
                              <span>{`Example Date`}</span>
                              <span>Rating: {`Example Rating`}</span>
                          </div>
                      </div>

                        {/* Slider Item */}
                      {/* {upcoming.map((data, index) => (
                          <div
                              key={index}
                              className="rounded-md  max-h-[250px] min-h-[250px] min-w-[200px] relative overflow-hidden flex justify-center text-center items-center md:hover:border-[2px] border-zinc-600 translate-all duration-75 ease-in-out"
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
                          </div>
                      ))} */}
                  </div>


              </div>
          </div>
    </>
  )
}

export default CommonSlider;