import React from "react";
import { testimonialsData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";
import { Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        const { image, message, name, web } = slide;
        return (
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] border border-accent-primary lg:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] lg:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl"
          >
            {/* avatar image */}
            <img src={image} alt="" />
            {/* text */}
            <div>
              <div className="text-lg text-primary font-bold">{name}</div>
              <div className="mb-4 font-semibold text-accent-primary">
                {web}
              </div>
              <div className="max-w-[340px]">{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
