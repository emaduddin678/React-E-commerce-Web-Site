import React from "react";
import "./Banner.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner-bg">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="product-detail">
            <h1>
              Shop{" "}
              <span>
                Computer <br />& experience
              </span>
            </h1>
            <p>
              You cannot inspect quality into the product; it is already there.{" "}
              <br /> I am not a product of my circumstances. I am a product of
              my decisions.
            </p>
            <button className="btn">View More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-detail">
            <h1>
              Shop{" "}
              <span>
                Computer <br />& experience
              </span>
            </h1>
            <p>
              You cannot inspect quality into the product; it is already there.{" "}
              <br /> I am not a product of my circumstances. I am a product of
              my decisions.
            </p>
            <button className="btn">View More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-detail">
            <h1>
              Shop{" "}
              <span>
                Computer <br />& experience
              </span>
            </h1>
            <p>
              You cannot inspect quality into the product; it is already there.{" "}
              <br /> I am not a product of my circumstances. I am a product of
              my decisions.
            </p>
            <button className="btn">View More</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
