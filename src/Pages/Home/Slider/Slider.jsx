import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import slide_image from "../../../assets/pressTalk.jpg";

const Slider = () => {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slide_image} alt="" />
          <h1 className="absolute text-red-700 bg-green-950 top-[50%] left-[20%]">Meeting</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
