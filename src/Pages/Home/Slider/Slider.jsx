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
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Slider = () => {
  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  },[])
  return (
    <div className="container">
    
      <div data-aos="fade-right">
      
        </div> 
   
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
        <img data-aos="fade-up" className="relative" src={slide_image1} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Corporate Meeting</a>
        </SwiperSlide>
        <SwiperSlide>
          <img data-aos="fade-up" className="relative" src={slide_image2} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Conference and Seminer</a>
        </SwiperSlide>
        <SwiperSlide>
        <img data-aos="fade-up" className="relative" src={slide_image3} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Award Cremony</a>
        </SwiperSlide>
        <SwiperSlide>
        <img data-aos="fade-up" className="relative" src={slide_image4} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Product Launch</a>
        </SwiperSlide>
        <SwiperSlide>
        <img data-aos="fade-up" className="relative" src={slide_image5} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Trade and Expo</a>
        </SwiperSlide>
        <SwiperSlide>
        <img data-aos="fade-up" className="relative" src={slide_image6} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Team Building</a>
        </SwiperSlide>

        <SwiperSlide>
        <img data-aos="fade-up" className="relative" src={slide_image1} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Corporate Meeting</a>
        </SwiperSlide>
        <SwiperSlide>
        <img data-aos="fade-up" className="relative" src={slide_image2} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Conference and Seminer</a>
        </SwiperSlide>
        <SwiperSlide>
        <img data-aos="fade-up" className="relative" src={slide_image3} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Award Cremony</a>
        </SwiperSlide>
        <SwiperSlide>
        <img data-aos="fade-up" className="relative" src={slide_image4} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Product Launch</a>
        </SwiperSlide>
        <SwiperSlide>
        <img data-aos="fade-up" className="relative" src={slide_image5} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Trade and Expo</a>
        </SwiperSlide>
        <SwiperSlide>
        <img data-aos="fade-up" className="relative" src={slide_image6} alt="" />
          <a data-aos="fade-up"   className="btn bg-[gray] absolute text-white  top-[80%] left-[30%]">Team Building</a>
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
