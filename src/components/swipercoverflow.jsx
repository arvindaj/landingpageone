import React, { useState, useEffect, useRef } from 'react';
import screenone from "../assets/img/screen1.png";
import screentwo from "../assets/img/screen2.png";
import screenthree from "../assets/img/screen3.png";
import screenfive from "../assets/img/screen4.png";
import appstore from "../assets/img/appstore.png";
import playstore from "../assets/img/playstore.png";
import gotolive from "../assets/img/gotolive.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import './slider/swiper.css';

const images = [
  { id: 1, src: screenone, alt: "Mountain View" },
  { id: 2, src: screentwo, alt: "Forest Path" },
  { id: 3, src: screenthree, alt: "Ocean Sunset" },
  { id: 4, src: screenfive, alt: "Desert Landscape" },
  { id: 1, src: screenone, alt: "Mountain View" },
  { id: 2, src: screentwo, alt: "Forest Path" },
  { id: 3, src: screenthree, alt: "Ocean Sunset" },
  { id: 4, src: screenfive, alt: "Desert Landscape" },
];

const ImageSlider = () => {
  return (
    <div className="skillorea-slider-container py-5 px-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="skillorea-title">Download now</h2>
          <h1 className="skillorea-subtitle display-5 mb-4">Skillorea Available on</h1>
          <div className="skillorea-buttons">
            <a href="#" className="skillorea-button mx-2">
              <img
                src={appstore}
                alt="App Store"
                className="img-fluid skillorea-store-img"
                style={{ maxHeight: '50px', minHeight: '30px', minWidth:'60px'}}
              />
            </a>
            <a href="#" className="skillorea-button mx-2">
              <img
                src={playstore}
                alt="Play Store"
                className="img-fluid skillorea-store-img"
                style={{ maxHeight: '50px', minHeight: '30px',minWidth:'60px' }}
              />
            </a>
            <a href="#" className="skillorea-button mx-2">
              <img
                src={gotolive}
                alt="Go to Live"
                className="img-fluid skillorea-store-img"
                style={{ maxHeight: '50px', minHeight: '30px' ,minWidth:'60px'}}
              />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-10 col-lg-8 p-lg-5 p-5 position-relative">
          <Swiper
            modules={[ Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 2,
              scale: 1.2,
              slideShadows: true,
            }}
            
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              576: {
                slidesPerView: 2,
                coverflowEffect: {
                  rotate: 40,
                  depth: 150,
                  modifier: 1,
                  scale: 1.15,
                  slideShadows: true,
                },
              },
              768: {
                slidesPerView: 4,
                coverflowEffect: {
                  rotate: 10,
                  depth: 120,
                  modifier: 1,
                  scale: 0.9,
                  slideShadows: true,
                },
              },
              992: {
                slidesPerView: 4,
                coverflowEffect: {
                  rotate: 15,
                  depth: 140,
                  modifier: 1,
                  scale: 0.82,
                  slideShadows: true,
                },
              },
              1440: {
                slidesPerView: 4,
                coverflowEffect: {
                  rotate: 10,
                  depth: 140,
                  modifier: 1,
                  scale: 0.83,

                },
              },
            }}
            className="skillorea-swiper"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div
                  className="skillorea-slide-content"
                  style={{
                    backgroundColor: 'transparent', // Fully transparent background
                    padding: '0', // No padding
                    margin: '0', // No margin
                    display: 'flex', // Flexbox for centering
                    justifyContent: 'center', // Center horizontally
                    alignItems: 'center', // Center vertically
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid skillorea-slide-img  g-3"
                    style={{ maxHeight: '680px', objectFit: 'cover', width: '100%',  boxShadow: 'none',}}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="skillorea-oval-bg">
            <div className="skillorea-oval-inner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;