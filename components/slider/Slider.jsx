import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./styles.scss";

import { EffectFade } from "swiper";

export default function Slider({ isBreakdown, data = [], isFade }) {

  return (
    <>
      <Swiper
        // pagination={pagination}
        effect={isFade ? "fade" : false}
        speed={400}
        breakpoints={
          isBreakdown
            ? {
                640: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
              }
            : false
        }
        modules={[EffectFade]}
        className="mySwiper"
      >
        {data.length ? (
          data.map((item, _) => (
            <SwiperSlide key={_}>
              <div className="slide_wrapper">
                {item.icon && <div className="icon">
                  {item.icon}
                </div>}
                <h1>{item.heading}</h1>
                <p>{item.para}</p>
                {item.btn && (
                  <button>
                    <a href={item.btnLink}>{item.btn}</a>
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
          </>
        )}
      </Swiper>
    </>
  );
}
