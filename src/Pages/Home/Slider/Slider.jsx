import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import slide_image1 from "../../../assets/corporateMeeting.jpg";
import slide_image2 from "../../../assets/conferenceAndSeminer.jpg";
import  slide_image3 from "../../../assets/awardCeremony.jpg";
import slide_image4 from "../../../assets/productlaunch.jpg";
import slide_image5 from "../../../assets/tradeShowandexpo.jpg";
import slide_image6 from "../../../assets/teamBuildingWorkshop.jpg";


const Slider = () => {
  return (
    <div className="container">
   
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
          <img src={slide_image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slide_image2} alt="" />
          <h1 className="absolute text-red-700 bg-green-950 top-[50%] left-[20%]">Meeting</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image6} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slide_image2} alt="" />
          <h1 className="absolute text-red-700 bg-green-950 top-[50%] left-[20%]">Meeting</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image6} alt="" />
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
