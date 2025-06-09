import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import cartoonone from "../assets/img/leader5.png";
import leader6 from "../assets/img/leader6.png";
import leader7 from "../assets/img/leader7.png";
import leader8 from "../assets/img/leader8.png";

const images = [
  { id: 5, src: cartoonone, alt: 'Leader 5' },
  { id: 6, src: leader6, alt: 'Leader 6' },
  { id: 7, src: leader7, alt: 'Leader 7' },
  { id: 8, src: leader8, alt: 'Leader 8' },
  { id: 5, src: cartoonone, alt: 'Leader 5' },
  { id: 6, src: leader6, alt: 'Leader 6' },
  { id: 7, src: leader7, alt: 'Leader 7' },
  { id: 8, src: leader8, alt: 'Leader 8' },
];

const Cartoon = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="container-fluid ">
      <Swiper
        modules={[ Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: false,
        }}
        loop={true}
        speed={600}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          576: { slidesPerView: 2, spaceBetween: 15 },
          992: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid rounded cartoon-image"
                style={{ maxHeight: '250px', objectFit: 'cover', width: '100%' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
     
        .swiper-slide {
          display: flex;
          align-items: center;
        }
        .cartoon-image {
          transition: transform 0.3s ease;
        }
        .cartoon-image:hover {
          transform: scale(1.5);
        }
      
      `}</style>
    </div>
  );
};

export default Cartoon;