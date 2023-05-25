import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const Slider = ({ children }) => {


  return (
    <div className="w-full flex">
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full h-fit p-2"
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {children}
      </Swiper>

    </div>
  )
}