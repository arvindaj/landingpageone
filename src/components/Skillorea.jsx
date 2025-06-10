import React from "react";
import screenone from "../assets/img/screen1.png";
import screentwo from "../assets/img/screen2.png";
import screenthree from "../assets/img/screen3.png";
import screenfour from "../assets/img/screen4.png";

// Unique card data
const cardData = [
  {
    title: "AI Analytics Dashboard",
    description: "Advanced data visualization with machine learning insights and real-time analytics.",
    image: screenone,
    badge: "New",
    category: "Analytics",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with automated deployment and monitoring capabilities.",
    image: screentwo,
    badge: "Popular",
    category: "Cloud",
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps with native performance and modern UI/UX design.",
    image: screenthree,
    badge: "Trending",
    category: "Mobile",
  },
  {
    title: "Security Solutions",
    description: "Enterprise-grade security with advanced threat detection and prevention systems.",
    image: screenfour,
    badge: "Featured",
    category: "Security",
  },
  {
    title: "Blockchain Platform",
    description: "Decentralized applications with smart contract integration and DeFi capabilities.",
    image: screenone,
    badge: "Hot",
    category: "Blockchain",
  },
  {
    title: "IoT Integration",
    description: "Internet of Things solutions with edge computing and real-time data processing.",
    image: screentwo,
    badge: "New",
    category: "IoT",
  }, 
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps with native performance and modern UI/UX design.",
    image: screenthree,
    badge: "Trending",
    category: "Mobile",
  },
  {
    title: "Security Solutions",
    description: "Enterprise-grade security with advanced threat detection and prevention systems.",
    image: screenfour,
    badge: "Featured",
    category: "Security",
  },
];

// Helper to group cards based on screen size
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const CardSlider = () => {
  // Dynamically adjust cards per slide based on screen width
  const getCardsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 576) return 1; // 1 card on mobile
      if (window.innerWidth <= 768) return 2; // 2 cards on tablet
      return 4; // 4 cards on desktop
    }
    return 4; // Default fallback
  };

  const [cardsPerSlide, setCardsPerSlide] = React.useState(getCardsPerSlide());
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Update cards per slide on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = chunkArray(cardData, cardsPerSlide);

  const getBadgeColor = (badge) => {
    const colors = {
      New: "bg-success",
      Popular: "bg-primary",
      Trending: "bg-warning",
      Featured: "bg-danger",
      Hot: "bg-info",
    };
    return colors[badge] || "bg-secondary";
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="container-fluid py-5" style={{ overflow: "hidden" }}>
      
      {/* download now  */}
      <div className="container">

      </div>
      {/* slider  */}
      <div className="container">
        <div className="position-relative">
          <div className="carousel-container" style={{ overflow: "hidden" }}>
            <div 
              className="carousel-slides d-flex transition-transform"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.5s ease-in-out",
                width: `${slides.length * 100}%`
              }}
            >
              {slides.map((slide, index) => (
                <div
                  className="carousel-slide"
                  key={index}
                  style={{ width: `${100 / slides.length}%`, flexShrink: 0 }}
                >
                  <div className="row g-4 justify-content-center">
                    {slide.map((card, i) => (
                      <div
                        className={`${
                          cardsPerSlide === 1 
                            ? "col-12" 
                            : cardsPerSlide === 2 
                            ? "col-6" 
                            : "col-12 col-sm-6 col-md-6 col-lg-3"
                        }`}
                        key={i}
                      >
                        <div
                          className="card h-100 border-0 card-hover"
                          style={{
                            backgroundColor: "transparent",
                            transition: "all 0.3s ease",
                            transform: "translateY(0)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                          }}
                        >
                          <div
                            className="position-relative overflow-hidden"
                            style={{
                              borderRadius: "20px 20px 0 0",
                            }}
                          >
                            <img
                              src={card.image}
                              className="card-img-top"
                              alt={card.title}
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "contain",
                                transition: "transform 0.3s ease",
                              }}
                            />
                            <span
                              className={`badge ${getBadgeColor(
                                card.badge
                              )} position-absolute top-0 start-0 m-2`}
                            >
                              {card.badge}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="carousel-control carousel-control-prev"
            type="button"
            onClick={prevSlide}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
              border: "none",
              background: "none"
            }}
          >
            <div className="bg-dark rounded-circle p-2 shadow">
              <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control carousel-control-next"
            type="button"
            onClick={nextSlide}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
              border: "none",
              background: "none"
            }}
          >
            <div className="bg-dark rounded-circle p-2 shadow">
              <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
            <span className="visually-hidden">Next</span>
          </button>

          {/* Slide Indicators */}
          <div className="carousel-indicators d-flex justify-content-center mt-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "none",
                  margin: "0 5px",
                  backgroundColor: index === currentSlide ? "#007bff" : "#ccc",
                  transition: "background-color 0.3s ease"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Oval Shapes */}
      <div className="position-relative overflow-hidden">
        <div
          className="position-absolute"
          style={{
            bottom: "-170px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "230%",
            height: "340px",
            background:
              "linear-gradient(135deg, rgba(2, 24, 47, 0.1) 0%, rgba(5, 22, 42, 0.05) 100%)",
            borderRadius: "50%",
            backdropFilter: "blur(50px)",
            border: "1px solid rgba(1, 6, 11, 0.1)",
          }}
        />
        <div
          className="position-absolute floating-shape-1"
          style={{
            bottom: "-100px",
            left: "20%",
            width: "60%",
            height: "200px",
            background:
              "linear-gradient(45deg, rgba(0,123,255,0.2) 0%, rgba(108,117,125,0.2) 100%)",
            borderRadius: "50%",
            backdropFilter: "blur(15px)",
          }}
        />
        <div
          className="position-absolute floating-shape-2"
          style={{
            bottom: "-50px",
            right: "15%",
            width: "40%",
            height: "120px",
            background:
              "linear-gradient(135deg, rgba(0,123,255,0.15) 0%, rgba(0,123,255,0.1) 100%)",
            borderRadius: "50%",
            backdropFilter: "blur(10px)",
          }}
        />
        <div
          className="position-absolute pulsing-shape-1"
          style={{
            bottom: "20px",
            left: "10%",
            width: "80px",
            height: "40px",
            background: "rgba(0,123,255,0.2)",
            borderRadius: "50%",
            backdropFilter: "blur(5px)",
          }}
        />
        <div
          className="position-absolute pulsing-shape-2"
          style={{
            bottom: "40px",
            right: "25%",
            width: "60px",
            height: "30px",
            background: "rgba(0,123,255,0.3)",
            borderRadius: "50%",
            backdropFilter: "blur(8px)",
          }}
        />
        <div style={{ height: "150px" }} />
      </div>

      <style>
        {`
          .floating-shape-1 {
            animation: float 6s ease-in-out infinite;
          }
          
          .floating-shape-2 {
            animation: float 4s ease-in-out infinite reverse;
          }
          
          .pulsing-shape-1 {
            animation: pulse 3s ease-in-out infinite;
          }
          
          .pulsing-shape-2 {
            animation: pulse 2s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }

          .card-hover:hover {
            transform: translateY(-10px) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
          }

          .card-hover:hover .card-img-top {
            transform: scale(1.05);
          }

          .carousel-control:hover .bg-dark {
            background-color: #495057 !important;
          }

          /* Mobile Optimizations */
          @media (max-width: 576px) {
            .carousel-control {
              display: block !important;
            }
            
            .card {
              margin: 0 auto;
              max-width: 95%;
            }
            
            .card-img-top {
              height: 200px !important;
            }
            
            .carousel-control .bg-dark {
              padding: 8px !important;
            }
            
            .carousel-control svg {
              width: 16px !important;
              height: 16px !important;
            }
          }

          /* Tablet Optimizations */
          @media (min-width: 577px) and (max-width: 768px) {
            .card-img-top {
              height: 220px !important;
            }
          }

          /* Desktop Optimizations */
          @media (min-width: 769px) {
            .card-img-top {
              height: 250px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CardSlider;