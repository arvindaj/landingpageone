import { useState, useEffect } from 'react';
import mobilhill from "../../assets/img/mobilhill.png";
import skillorea from "../../assets/img/imagebanner.png";
import cartoonone from "../../assets/img/leader5.png";
import leader6 from "../../assets/img/leader6.png";
import leader7 from "../../assets/img/leader7.png";
import leader8 from "../../assets/img/leader8.png";
import appstore from "../../assets/img/appstore.png";
import playstore from "../../assets/img/playstore.png";
import gotolive from "../../assets/img/gotolive.png";
import doublearrow from "../../assets/img/doublearrow.png";

import one from "../../assets/img/one.png";
import bluebg from "../../assets/img/bluebg.png";
import "./LandingPage.css";
import BootstrapFourCardCarousel from '../../components/cartoon';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import worshop from "../../assets/img/worshop.png"
import quizzer from "../../assets/img/quizzer.png"
import entainment from "../../assets/img/entainment.png"
import infography from "../../assets/img/infography.png"
import point from "../../assets/img/point.png"
import SwiperCoverflow from '../../components/swipercoverflow';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Skillsliders from '../../components/slider/skillslider';



const slideData = [
    {
        title: "Track your child's",
        text: "Progress and See Real Results.",
    },
    {
        title: "Track your child's",
        text: "Progress and See Real Results.",
    },
    {
        title: "Track your child's",
        text: "Progress and See Real Results.",
    },

];


const LandingPage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );
    }, []);



    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('#home, #features, #testimonials, #contact');
        sections.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: <i className="fas fa-book-open"></i>,
            img: doublearrow,
            title: "SMARTSCHOLAR",
            description: "Master Your Studies with Smart Learning for Grades 6-12 Across All Boards!",
            points: [
                "Tailored study plans for grades 6-12. ",
                "Complete syllabus mastery for all boards.",
                "Instant QA support for clarity and confidence.",
                "Mock tests and quizzes for exam success."
            ]
        },
        {
            icon: <i className="fas fa-graduation-cap"></i>,
            title: "SKILLSPHERE",
            description: "Master Your Studies: Smart Learning for Grades 6-12 Across All Boards - Syllabus, QA, and Practice Tests",
            points: [
                "Tailored study plans for grades 6-12.",
                "Comprehensive QA resources.",
                "Complete syllabus mastery for all boards.",
                "Instant QA support for clarity and confidence."
            ]
        },
        {
            icon: <i className="fas fa-trophy"></i>,
            title: "EXAMMASTERY",
            description: "Master Your Studies: Smart Learning for Grades 6-12 Across All Boards - Syllabus, QA, and Practice Tests!",
            points: [
                "Syllabus-based learning for all boards.",
                "Comprehensive QA resources.",
                "Practice tests for exam preparation."
            ]
        }
    ];

    const testimonials = [
        {

            role: "CEO, TechStart",
            avatar: entainment
        },
        {

            role: "Developer",
            avatar: quizzer
        },
        {

            role: "Designer",
            avatar: infography
        },
        {

            role: "Designer",
            avatar: point
        },
        {

            role: "Designer",
            avatar: worshop
        }
    ];

    const images = [
        {
            id: 1,
            src: cartoonone,
            alt: "Mountain View"
        },
        {
            id: 2,
            src: leader6,
            alt: "Forest Path"
        },
        {
            id: 3,
            src: leader7,
            alt: "Ocean Sunset"
        },
        {
            id: 4,
            src: leader8,
            alt: "Desert Landscape"
        }
    ];



    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 1000); // Changes every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
    };





    return (
        <>

            {/* home */}
            <section id="home" className="hero-section d-flex align-items-center position-relative  text-white ">
                <div className="container mb-4 ">

                    <div className="row align-items-center p-lg-5">
                        {/* Logo Image */}
                        <div className="col-12 py-3 col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <a href="#" className="navbar-brand d-flex align-items-center justify-content-center justify-content-md-start">
                                <img
                                    src={skillorea}
                                    alt="Skillorea Logo"
                                    className="img-fluid mx-5 py-3"
                                    style={{ maxWidth: '200px', height: 'auto' }}
                                />
                            </a>
                        </div>

                        {/* Login Button */}
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <a
                                href="#"
                                className="btn text-white   py-2"
                                style={{
                                    borderRadius: '25px',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Login
                            </a>
                        </div>
                    </div>


                    <div className="row mb-5 mt-5 mt-lg-5 text-center text-lg-start align-items-end min-vh-750 position-relative">
                        <div className="col-12 col-lg-12 mx-auto mt-lg-5">
                            <>
                                {/* LEFT SIDE: Vertical "Preview" with left arrow */}
                                <div
                                    className="position-absolute top-50 start-0 translate-middle-y d-flex flex-column align-items-center"
                                    style={{ zIndex: 10, left: '5px' }}
                                >
                                    {/* Arrow Left */}
                                    <i
                                        className="bi bi-caret-down-fill fs-6 mb-1"
                                        style={{ transform: 'rotate(180deg)', color: '#383b90ed' }}
                                    ></i>

                                    {/* Vertical Text: Preview */}
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

                                {/* RIGHT SIDE: Vertical "Next" with right arrow */}
                                <div
                                    className="position-absolute top-50 end-0 translate-middle-y d-flex flex-column align-items-center"
                                    style={{ zIndex: 10, right: '5px' }}
                                >
                                    {/* Arrow Right */}
                                    <i
                                        className="bi bi-caret-down-fill fs-6 mb-1"
                                        style={{ transform: 'rotate(180deg)', color: '#383b90ed' }}
                                    ></i>

                                    {/* Vertical Text: Next */}
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

                             
                            </>



                            <div className="row align-items-center mx-2 mx-sm-3 mx-md-5 px-1 px-sm-3 px-md-5">
                                {/* Left Column: Image */}
                                <div className="col-1 col-sm-2 col-md-1 text-center px-0">
                                    <img
                                        src={one}
                                        alt="Logo"
                                        className="img-fluid logo-img"
                                        style={{ maxWidth: '100px', height: 'auto', minWidth: '40px' }}
                                    />
                                </div>

                                {/* Right Column: H2 and H1 stacked vertically */}
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
                            <style>
                                {`
          .vertically {
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
             @media (max-width: 768px) {
            .vertically {
              flex-direction: column;
              align-items: start;
              text-align: start;
            }
            .vertically h5, .vertically h1 {
              margin-left:50px !important;
              margin-right: 0 !important;
            }
            .logo-img {
              max-width: 80px !important;
            }
            .header-text h5 {
              font-size: 22px !important;
            }
            .header-text h1 {
              font-size: 38px !important;
            }
          }  

          @media (max-width: 576px) {
            .vertically {
              flex-direction: column;
              align-items: start;
              text-align: start;
            }
            .vertically h5, .vertically h1 {
              margin-left: 20px !important;
              margin-right: 0 !important;
            }
            .logo-img {
              max-width: 40px !important;
            }
            .header-text h5 {
              font-size: 10px !important;
            }
            .header-text h1 {
              font-size: 18px !important;
            }
          }
        @media (max-width: 320px) {
            
            .header-text h5 {
              font-size: 10px !important;
            }
            .header-text h1 {
              font-size: 18px !important;
            }
          }
        `}
                            </style>


                            {/* Headline & Paragraph */}
                            <div className="container-fluid px-4 px-lg-5  py-md-4">
                                <Swiper
                                    direction="vertical"
                                    modules={[Autoplay]}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    loop={true}
                                    allowTouchMove={false}
                                    slidesPerView={1}
                                    className="trackyour"
                                    style={{ height: '100px', overflow: 'hidden' }}
                                >
                                    {slideData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="d-flex flex-column justify-content-start align-items-start">
                                                <h2 className="text-white text-start mx-md-4">
                                                    {item.title}
                                                </h2>
                                                <p className="text-white text-start mb-0 mx-md-4">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid app-section">
                        <div className="row align-items-end mt-5">
                            <div
                                className="col-1  position-absolute  start-0 translate-middle-y d-flex flex-column align-items-start"
                                style={{ zIndex: 10, backgroundColor: '#3d2e68', width: '40px' }}
                            >
                                {/* Social Media Icons */}
                                <div className="d-flex flex-column gap-2 mt-3">
                                    {/* WhatsApp */}
                                    <a href="#" className="text-decoration-none">
                                        <i className="bi bi-whatsapp fs-4" style={{ color: "#25D366" }}></i>
                                    </a>

                                    {/* Instagram */}
                                    <a href="#" className="text-decoration-none">
                                        <i className="bi bi-instagram fs-4" style={{ color: "#E4405F" }}></i>
                                    </a>

                                    {/* Facebook */}
                                    <a href="#" className="text-decoration-none">
                                        <i className="bi bi-facebook fs-4" style={{ color: "#1877F2" }}></i>
                                    </a>

                                    {/* YouTube */}
                                    <a href="#" className="text-decoration-none">
                                        <i className="bi bi-youtube fs-4" style={{ color: "#FF0000" }}></i>
                                    </a>
                                </div>
                            </div>

                            {/* Image Slider */}
                            <div className="col-4 col-lg-4 d-flex flex-column flex-sm-row justify-content-start justify-content-sm-start ms-3 ms-lg-0 ">
                                <BootstrapFourCardCarousel />
                            </div>

                            {/* Description + Buttons */}
                            <div className="col-12 col-md-6 col-lg-4  description-section mt-3">
                                <p className="mb-2 text-white text-center text-md-start mx-4 mx-lg-0 mx-md-0">
                                    Download our app now and stay connected. Call us for more information or support!
                                </p>
                                <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-2">
                                    <div className="col-12 col-md-7 d-flex justify-content-center justify-content-md-start gap-2">
                                        <button className="btn download-btn">Download</button>
                                        <button className="btn call-btn">Call 24x7</button>
                                    </div>
                                    <div className="col-7 col-md-6 text-center text-md-start ms-4  mt-2 mt-md-0">
                                        <a
                                            href="tel:+919940506090"
                                            className="text-white text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start"
                                        >
                                            +91 9940506090
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Store Images */}
                            <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end gap-2 flex-wrap mt-3 store-images">
                                <img src={appstore} alt="App Store" className="img-fluid rounded store-img" />
                                <img src={playstore} alt="Play Store" className="img-fluid rounded store-img" />
                                <img src={gotolive} alt="Go To Live" className="img-fluid rounded store-img" />
                            </div>
                        </div>

                    </div>


                </div>
            </section>


            {/* features - Mobile Responsive */}
            <section id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-0 mt-3">
                            <div className={`animate-in ${isVisible.features ? 'visible' : ''}`}>
                                <h2
                                    className="display-5 fw-bold mb-0"
                                    style={{
                                        fontSize: 'clamp(1.8rem, 4vw, 3rem)', // Responsive font size
                                        lineHeight: '1.2'
                                    }}
                                >
                                    AN INNOVATIVE COURSE<br />
                                    <span className="fs-2 fw-bold" style={{ color: '#e64004' }}>FOR STUDENTS</span>
                                </h2>

                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center g-5">
                        {/* Image Column - Responsive Order */}
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className={`animate-in ${isVisible.features ? 'visible' : ''}`}>
                                <img
                                    src={mobilhill}
                                    alt="Feature Illustration"
                                    className="img-fluids"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                    }}
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Features Column */}
                        <div className="col-lg-6 order-lg-2 order-1">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`  ${isVisible.features ? 'visible' : ''}`}
                                    style={{
                                        padding: window.innerWidth <= 768 ? '15px' : '20px', // Responsive padding


                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={e => {
                                        if (window.innerWidth > 768) { // Only on desktop

                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (window.innerWidth > 768) { // Only on desktop


                                        }
                                    }}
                                >

                                    {/* Header Row - Responsive Layout */}
                                    <div
                                        className="d-flex align-items-center justify-content-between mb-2"
                                        style={{
                                            flexDirection: window.innerWidth <= 576 ? 'column' : 'row', // Stack on mobile
                                            gap: window.innerWidth <= 576 ? '15px' : '0'
                                        }}
                                    >
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="feature-icon me-3 mt-2 mt-lg-0 mt-lg-0"
                                                style={{
                                                    fontSize: window.innerWidth <= 576 ? '2rem' : '2.5rem', // Responsive icon size
                                                    background: 'linear-gradient(135deg, #1D5434 0%, #11118C 100%)',
                                                    WebkitBackgroundClip: 'text',

                                                    backgroundClip: 'text',

                                                }}
                                            >

                                                <img src={doublearrow} alt="" style={{ height: "30px" }} />
                                            </div>
                                            <h5
                                                className="fw-bold text-green mb-0 mt-lg-2"
                                                style={{
                                                    fontSize: window.innerWidth <= 576 ? '1.1rem' :
                                                        window.innerWidth <= 768 ? '1.2rem' : '1.5rem', // Responsive title
                                                    textAlign: window.innerWidth <= 576 ? 'center' : 'left'
                                                }}
                                            >
                                                {feature.title}
                                            </h5>
                                        </div>

                                        {/* Arrow Button - Hidden on small mobile */}

                                    </div>

                                    {/* Description */}
                                    <p
                                        className="mb-3"
                                        style={{
                                            color: '#64748b',
                                            lineHeight: '1.4',
                                            fontSize: window.innerWidth <= 576 ? '0.9rem' : '1rem',
                                            textAlign: window.innerWidth <= 576 ? 'left' : 'left'
                                        }}
                                    >
                                        {feature.description}
                                    </p>

                                    {/* Feature Points */}
                                    <ul
                                        className="feature-points"
                                        style={{
                                            listStyle: 'none',
                                            padding: 0,
                                            margin: 0
                                        }}
                                    >
                                        {feature.points.map((point, idx) => (
                                            <li
                                                key={idx}
                                                style={{
                                                    position: 'relative',
                                                    paddingLeft: window.innerWidth <= 576 ? '1.5rem' : '2rem',
                                                    marginBottom: '0.75rem',
                                                    fontSize: window.innerWidth <= 576 ? '0.85rem' : '0.95rem',
                                                    color: '#475569',
                                                    lineHeight: '1.5',
                                                    display: 'flex',
                                                    alignItems: 'flex-start'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '0',
                                                        top: '2px',
                                                        width: window.innerWidth <= 576 ? '16px' : '20px',
                                                        height: window.innerWidth <= 576 ? '16px' : '20px',
                                                        borderRadius: '50%',
                                                        background: 'linear-gradient(135deg, #1D5434 0%, #11118C 100%)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <i
                                                        className="fas fa-check"
                                                        style={{
                                                            color: '#ffffff',
                                                            fontSize: window.innerWidth <= 576 ? '0.6rem' : '0.7rem'
                                                        }}
                                                    ></i>
                                                </div>
                                                <span style={{ wordBreak: 'break-word' }}>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Custom CSS for additional responsive behavior */}
                <style jsx>{`
        @media (max-width: 1200px) {
            .feature-item {
                margin-bottom: 1.5rem !important;
            }
        }

        @media (max-width: 992px) {
            #features {
                padding: 30px 0 !important;
            }
            .feature-item {
                margin-bottom: 2rem !important;
            }
        }

        @media (max-width: 768px) {
            #features {
                padding: 25px 0 !important;
            }
            .container {
                padding: 0 20px;
            }
            .feature-item {
                margin-bottom: 1.5rem !important;
                border-radius: 12px !important;
            }
        }

        @media (max-width: 576px) {
            #features {
                padding: 20px 0 !important;
            }
            .container {
                padding: 0 15px;
            }
            .feature-item {
                margin-bottom: 1.25rem !important;
                border-radius: 10px !important;
            }
            .row.g-5 {
                gap: 2rem !important;
            }
        }

        @media (max-width: 480px) {
            .container {
                padding: 0 10px;
            }
            .feature-item {
                padding: 12px !important;
            }
        }

        /* Smooth transitions for responsive changes */
        .feature-item,
        .feature-icon,
        h5,
        p,
        li {
            transition: all 0.3s ease;
        }

        /* Touch-friendly hover states for mobile */
        @media (hover: none) and (pointer: coarse) {
            .feature-item:active {
                transform: scale(0.98);
                transition: transform 0.1s ease;
            }
        }
                 `}</style>

            </section>

            <Skillsliders />

            <SwiperCoverflow />

            <footer
                className="position-relative text-white pt-5 mt-5 "
                style={{
                    overflow: 'hidden',
                    backgroundImage: `url(${bluebg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '300px',
                    maxHeight: '500px' // Add this
                }}
            >
                {/* Optional overlay for better text visibility */}


                {/* Footer Content */}
                <div className="container position-relative mt-lg-5 pt-4 mb-lg-3 " style={{ zIndex: 1 }}>
                    {/* Row 1: Centered Image */}
                    <div className="row mb-0">
                        <div className="col-12 text-center mt-5 px-4">
                            <img
                                src={skillorea}
                                alt="Logo"
                                loading="lazy"
                                className="img-fluid"
                                style={{
                                    maxWidth: '250px',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    marginBottom: '1rem',
                                }}
                            />
                        </div>
                    </div>

                    {/* Row 2: Navigation Links */}
                    <div className="row mb-3">
                        <div className="col-12 d-flex justify-content-center gap-4 flex-wrap">
                            <a href="#about" className="text-decoration-none text-light small">About Us</a>
                            <a href="#wellness" className="text-decoration-none text-light small">Wellness</a>
                            <a href="#shop" className="text-decoration-none text-light small">Shop</a>
                            <a href="#contact" className="text-decoration-none text-light small">Contact Us</a>
                        </div>
                    </div>

                    {/* Row 3: Copyright */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <small className="text-light">© 2025 All rights reserved.</small>
                        </div>
                    </div>
                </div>
            </footer>





        </>
    );
};

export default LandingPage;