import { useState, useEffect } from 'react';
import mobilhill from "../../assets/img/mobilhill.png";
import skillorea from "../../assets/img/imagebanner.png";
import cartoonone from "../../assets/img/leader5.png";
import leader6 from "../../assets/img/leader6.png";
import leader7 from "../../assets/img/leader7.png";
import leader8 from "../../assets/img/leader8.png";
import doublearrow from "../../assets/img/doublearrow.png";
import bluebg from "../../assets/img/bluebg.png";
import worshop from "../../assets/img/worshop.png"
import quizzer from "../../assets/img/quizzer.png"
import entainment from "../../assets/img/entainment.png"
import infography from "../../assets/img/infography.png"
import point from "../../assets/img/point.png"
import HeroSection from '../../components/hero/hero';
import Skillslider from '../../components/slider/skillslider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "swiper/css/autoplay";
import "./landingpage.css";
import Swipercoverflow from '../../components/slider/swipercoverflow';


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

            <HeroSection />

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
               
            </section>

            <Skillslider />

            <Swipercoverflow />

            {/* Footer Content */}
            <div
                className="position-relative text-white pt-5 mt-5 mb-0 footerbgimg"
                style={{
                    overflow: 'hidden',
                    backgroundImage: `url(${bluebg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '360px',
                    maxHeight: '500px' // Add this
                }}
            >
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
            </div>





        </>
    );
};

export default LandingPage;