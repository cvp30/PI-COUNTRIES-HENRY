import { Swiper } from "swiper/react";
import { useRef } from 'react';
import { Left, Right } from "../icons";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const Slider = ({ children }) => {

  const prev = useRef(null);
  const next = useRef(null);

  console.log(prev.current)
  return (
    <div className="w-full h-fit">
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full h-fit p-2 border"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {children}
      </Swiper>

      {/* <button ref={prev} className=" h-full w-10 flex justify-center">
        <Left strokeWidth={3} className="h-10 w-10 rounded-full transition-all duration-200 ease-in-out" />
      </button>


      <Swiper
        loop={true}
        slidesPerView={1}
        navigation={
          {
            nextEl: next.current,
            prevEl: prev.current,
          }
        }
        modules={[Navigation, A11y]}
        className="mySwiper py-2 box-border"
      >
        {children}
      </Swiper >

      <button ref={next}>
        <Right className="h-10 w-10 text-dark hover:text-white hover:bg-red border border-dark hover:border-red rounded-full p-1 transition-all duration-200 ease-in-out" />
      </button> */}

    </div>
  )
}