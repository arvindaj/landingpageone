import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import skillorea from '../../assets/img/skillorealogowhite.png';
import one from '../../assets/img/one.png';
import appstore from '../../assets/img/appstore.png';
import playstore from '../../assets/img/playstore.png';
import gotolive from '../../assets/img/gotolive.png';
import 'swiper/css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cartoon from '../slider/cartoon';


const slideData = [
  { title: 'Track Your Progress', text: 'Monitor your learning journey with ease.' },
  { title: 'Stay Connected', text: 'Join a community of learners.' },
  { title: 'Learn Anywhere', text: 'Access courses anytime, anywhere.' },
];

const HeroSection = () => {
  // Create a reference to the Swiper instance
  const swiperRef = useRef(null);

  // Function to go to the previous slide
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Function to go to the next slide
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section id="home" className="hero-section d-flex align-items-center position-relative text-white">
      <div className="container mb-4">
        {/* Logo and Login Button */}
        <div className="row align-items-center p-lg-5">
          <div className="col-12 py-3 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <a
              href="#"
              className="navbar-brand d-flex align-items-center justify-content-center justify-content-md-start"
            >
              <img
                src={skillorea}
                alt="Skillorea Logo"
                className="img-fluids mx-5 py-3"
                style={{ maxWidth: '200px', height: 'auto' }}
              />
            </a>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <a
              href="#"
              className="btn text-white py-2"
              style={{
                borderRadius: '25px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
              }}
            >
              Login
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="row mb-5 mt-5 mt-lg-5 text-center text-lg-start align-items-end min-vh-750 position-relative">
          <div className="col-12 col-lg-12 mx-auto mt-lg-5">
            {/* Left Side: Vertical "Prev" with Arrows */}
            <div
              className="position-absolute top-50 start-0 translate-middle-y d-flex flex-column align-items-center"
              style={{ zIndex: 10, left: '5px', cursor: 'pointer' }}
              onClick={handlePrev}
            >
              <i
                className="bi bi-caret-down-fill fs-6 mb-1"
                style={{ transform: 'rotate(180deg)', color: '#383b90ed' }}
              ></i>
              <span
                className="fs-6 fw-light"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  whiteSpace: 'nowrap',
                  color: '#dedddd',
                }}
              >
                Prev
              </span>
              <i
                className="bi bi-caret-down-fill fs-6 mb-1"
                style={{ transform: 'rotate(0deg)', color: '#383b90ed' }}
              ></i>
            </div>

            {/* Right Side: Vertical "Next" with Arrows */}
            <div
              className="position-absolute top-50 end-0 translate-middle-y d-flex flex-column align-items-center"
              style={{ zIndex: 10, right: '5px', cursor: 'pointer' }}
              onClick={handleNext}
            >
              <i
                className="bi bi-caret-down-fill fs-6 mb-1"
                style={{ transform: 'rotate(180deg)', color: '#383b90ed' }}
              ></i>
              <span
                className="fs-6 fw-light"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  whiteSpace: 'nowrap',
                  color: '#dedddd',
                }}
              >
                Next
              </span>
              <i
                className="bi bi-caret-down-fill fs-6 mb-1"
                style={{ transform: 'rotate(0deg)', color: '#383b90ed' }}
              ></i>
            </div>

            {/* Logo and Text */}
            <div className="row align-items-center mx-2 mx-sm-3 mx-md-5 px-1 px-sm-3 px-md-5">
              <div className="col-1 col-sm-2 col-md-1 text-center px-0">
                <img
                  src={one}
                  alt="Logo"
                  className="img-fluid logo-img"
                  style={{ maxWidth: '100px', height: 'auto', minWidth: '40px' }}
                />
              </div>
              <div className="col-9 col-sm-10 col-md-11 px-0 text-start vertically">
                <div className="d-flex flex-column align-items-start header-text">
                  <h5 className="mb-0 mx-3 mx-sm-0 mx-md-5" style={{ color: '#04b507', fontSize: '24px' }}>
                    ALL IN
                  </h5>
                  <h1 className="text-white mb-0 mx-1 mx-sm-4 mx-md-5" style={{ color: '#04b507', fontSize: '60px' }}>
                    APP
                  </h1>
                </div>
              </div>
            </div>


            {/* Swiper Slider */}
            <div className="container-fluid px-4 px-lg-5 py-md-4">
              <Swiper
                direction="vertical"
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: true }} // Disable autoplay on interaction
                loop={true}
                allowTouchMove={false}
                slidesPerView={1}
                className="trackyour"
                style={{ height: '100px', overflow: 'hidden' }}
                ref={swiperRef} // Attach ref to Swiper
              >
                {slideData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="d-flex flex-column justify-content-start align-items-start">
                      <h2 className="text-white text-start mx-md-4">{item.title}</h2>
                      <p className="text-white text-start mb-0 mx-md-4">{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* App Section */}
        <div className="container-fluid app-section">
          <div className="row align-items-end mt-5">
            {/* Social Media Icons */}
            <div
              className="d-flex flex-column align-items-center mt-5 "
              style={{
                position: 'fixed',
                top: '50%',
                left: '0',
                transform: 'translateY(-50%)',
                zIndex: 1000,
                backgroundColor: '#3d2e68',
                width: '40px',
                padding: '10px 0',
                borderRadius: '0 5px 5px 0',
              }}
            >
              <div className="d-flex flex-column gap-3">
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="bi bi-whatsapp fs-4" style={{ color: '#25D366' }}></i>
                </a>
                <a
                  href="https://instagram.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="bi bi-instagram fs-4" style={{ color: '#E4405F' }}></i>
                </a>
                <a
                  href="https://facebook.com/your-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="bi bi-facebook fs-4" style={{ color: '#1877F2' }}></i>
                </a>
                <a
                  href="https://youtube.com/your-channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="bi bi-youtube fs-4" style={{ color: '#FF0000' }}></i>
                </a>
              </div>
            </div>

            {/* Image Slider */}
            <div className="col-4 col-lg-4 d-flex flex-column flex-sm-row justify-content-start justify-content-sm-start ms-3 ms-lg-0">
              <Cartoon />
            </div>

            {/* Description + Buttons */}
            <div className="col-12 col-md-6 col-lg-4 description-section mt-3">
              <p className="mb-2 text-white text-center text-md-start mx-4 mx-lg-0 mx-md-0">
                Download our app now and stay connected. Call us for more information or support!
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-2">
                <div className="col-12 col-md-7 d-flex justify-content-center justify-content-md-start gap-2">
                  <button className="download-btn">Download</button>
                  <button className="call-btn">Call 24x7</button>
                </div>
                <div className="col-7 col-md-6 text-center text-md-center mt-2 mt-md-0">
                  <a
                    href="tel:+919940506090"
                    className="text-white text-decoration-none d-flex align-items-center justify-content-center justify-content-md-center text-center"
                  >
                    +91 9940506090
                  </a>
                </div>
              </div>
            </div>

            {/* Store Images */}
            <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end gap-2 flex-wrap mt-3 store-images">
              <img src={appstore} alt="App Store" className="img-fluids rounded store-img" />
              <img src={playstore} alt="Play Store" className="img-fluids rounded store-img" />
              <img src={gotolive} alt="Go To Live" className="img-fluids rounded store-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;