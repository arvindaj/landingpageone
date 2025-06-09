import React from "react";
import tempbanner from "../../assets/img/flatmobile.png";
import worshop from "../../assets/img/worshop.png"
import quizzer from "../../assets/img/quizzer.png"
import entainment from "../../assets/img/entainment.png"
import infography from "../../assets/img/infography.png"
import point from "../../assets/img/point.png"

// Unique card data
const cardData = [
  {
    title: "AI Analytics Dashboard",
    description: "Advanced data visualization with machine learning insights and real-time analytics.",
    image: worshop,
    badge: "New",
    category: "Analytics",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with automated deployment and monitoring capabilities.",
    image: quizzer,
    badge: "Popular",
    category: "Cloud",
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps with native performance and modern UI/UX design.",
    image: entainment,
    badge: "Trending",
    category: "Mobile",
  },
  {
    title: "Security Solutions",
    description: "Enterprise-grade security with advanced threat detection and prevention systems.",
    image: infography,
    badge: "Featured",
    category: "Security",
  },
  {
    title: "Blockchain Platform",
    description: "Decentralized applications with smart contract integration and DeFi capabilities.",
    image: point,
    badge: "Hot",
    category: "Blockchain",
  },
  {
    title: "AI Analytics Dashboard",
    description: "Advanced data visualization with machine learning insights and real-time analytics.",
    image: worshop,
    badge: "New",
    category: "Analytics",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with automated deployment and monitoring capabilities.",
    image: quizzer,
    badge: "Popular",
    category: "Cloud",
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps with native performance and modern UI/UX design.",
    image: entainment,
    badge: "Trending",
    category: "Mobile",
  },
  {
    title: "Security Solutions",
    description: "Enterprise-grade security with advanced threat detection and prevention systems.",
    image: infography,
    badge: "Featured",
    category: "Security",
  },
  {
    title: "Blockchain Platform",
    description: "Decentralized applications with smart contract integration and DeFi capabilities.",
    image: point,
    badge: "Hot",
    category: "Blockchain",
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

const Skillsliders = () => {
  // Dynamically adjust cards per slide based on screen width
  const getCardsPerSlide = () => {
    if (window.innerWidth <= 320) return 1; // 1 card on very small mobile (320px)
    if (window.innerWidth <= 576) return 1; // 1 card on mobile (xs)
    if (window.innerWidth <= 768) return 3; // 2 cards on small tablet
    if (window.innerWidth <= 992) return 3; // 3 cards on medium screens
    return 5; // 5 cards on desktop (lg and above)
  };

  const [cardsPerSlide, setCardsPerSlide] = React.useState(getCardsPerSlide());

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

  // Get column classes based on cards per slide
  const getColumnClass = () => {
    if (cardsPerSlide === 5) {
      return "desktop-5-col"; // Custom class for 5 cards
    }
    switch (cardsPerSlide) {
      case 1: return "col-12"; // Full width on mobile
      case 2: return "col-12 col-sm-6";
      case 3: return "col-12 col-sm-6 col-md-4";
      default: return "col-12 col-sm-6 col-md-3";
    }
  };

  return (
    <div className="container-fluid skillslider " style={{ overflow: "hidden" }}>

      <div className="container my-5">
        <div className="row justify-content-center text-center text-md-start">
          <div className="col-12 col-md-10 col-lg-8">
            <h1 className="fw-bold  fs-md-2 fs-lg-1 mb-3 display-4">
              SUPER-FUN & INTERACTIVE LEARNING ACTIVITIES
            </h1>
            <p className="fs-6 fs-md-5 text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
              <p className="fs-6 fs-md-5 text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="container mobile-container">
        <div
          id="cardCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className={`row ${cardsPerSlide === 5 ? 'five-card-row' : 'mobile-row'} justify-content-center align-items-stretch`}>
                  {slide.map((card, i) => (
                    <div
                      className={getColumnClass()}
                      key={i}
                      style={{
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <div
                        className="card h-100 border-0 mobile-card"
                        style={{
                          backgroundColor: "transparent",
                          transition: "all 0.5s ease",
                          transform: "translateY(0)",
                          flex: 1
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-10px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <div
                          className="position-relative overflow-hidden card-image-container"
                          style={{
                            borderRadius: "20px 20px 0 0"
                          }}
                        >
                          <img
                            src={card.image}
                            className="card-img-top"
                            alt={card.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              transition: "transform 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = "scale(1)";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* Bottom Banner Image - Responsive */}
      <div className="row">
        <div className="col-12">
          <img
            src={tempbanner}
            alt="Banner"
            className="mt-5 banner-image"
            loading="lazy"
            style={{
              width: '80%',
              height: 'auto',
              maxWidth: '100%',
              borderRadius: window.innerWidth <= 576 ? '8px' : '12px',
              margin: window.innerWidth <= 576 ? '20px auto 0' : '40px auto 0',
              display: 'block',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      </div>

      <style>
        {`
          /* Mobile-first responsive design */
          
          /* Extra small mobile styles (320px and below) */
          @media (max-width: 320px) {
            .mobile-container {
              width: 98% !important;
              padding: 0 5px !important;
            }
            
            .mobile-row {
              margin: 0 !important;
              padding: 0 5px !important;
            }
            
            .mobile-card {
              margin: 0 auto 15px auto !important;
              max-width: 100% !important;
              width: 100% !important;
              padding: 0 !important;
            }
            
            .card-image-container {
              height: 180px !important;
              min-height: 180px !important;
            }
            
            .card-img-top {
              max-height: 180px !important;
              height: 180px !important;
              object-fit: contain !important;
            }
            
            .carousel-control-prev,
            .carousel-control-next {
              width: 20% !important;
              opacity: 0.9;
            }
            
            .carousel-control-prev-icon,
            .carousel-control-next-icon {
              width: 18px !important;
              height: 18px !important;
            }
            
            .banner-image {
              margin: 25px auto 0 !important;
              border-radius: 6px !important;
            }
            
            /* Ensure single card layout */
            .col-12 {
              flex: 0 0 100% !important;
              max-width: 100% !important;
              padding: 0 5px !important;
            }
              
          }
          
          /* Mobile styles (321px to 576px) */
          @media (min-width: 321px) and (max-width: 576px) {
            .mobile-container {
              width: 95% !important;
              padding: 0 10px;
            }
            
            .mobile-row {
              margin: 0 !important;
              padding: 0 !important;
            }
            
            .mobile-card {
              margin: 0 auto 20px auto !important;
              max-width: 100% !important;
              width: 100% !important;
            }
            
            .card-image-container {
              height: 200px !important;
              min-height: 200px !important;
            }
            
            .card-img-top {
              max-height: 200px !important;
              height: 200px !important;
              object-fit: contain !important;
            }
            
            .carousel-control-prev,
            .carousel-control-next {
              width: 15% !important;
              opacity: 0.8;
            }
            
            .carousel-control-prev-icon,
            .carousel-control-next-icon {
              width: 20px !important;
              height: 20px !important;
            }
            
            .banner-image {
              margin: 30px auto 0 !important;
              border-radius: 8px !important;
            }
            
            /* Ensure single card layout */
            .col-12 {
              flex: 0 0 100% !important;
              max-width: 100% !important;
            }
          }

          /* Small tablets (sm - 577px to 768px) */
          @media (min-width: 577px) and (max-width: 768px) {
            .mobile-container {
              width: 90% !important;
            }
            
            .card-image-container {
              height: 220px !important;
            }
            
            .card-img-top {
              max-height: 220px !important;
              height: 220px !important;
            }
          }

          /* Medium screens (md - 769px to 991px) */
          @media (min-width: 769px) and (max-width: 991px) {
            .card-image-container {
              height: 200px !important;
            }
            
            .card-img-top {
              max-height: 200px !important;
              height: 200px !important;
            }
          }

          /* Desktop styles (lg - 992px and above) */
          @media (min-width: 992px) {
            .mobile-container {
              width: 70% !important;
            }
            
            .five-card-row {
              display: flex !important;
              flex-wrap: nowrap !important;
              gap: 15px;
            }
            
            .desktop-5-col {
              flex: 1 1 calc(20% - 12px) !important;
              max-width: calc(20% - 12px) !important;
              min-width: 0;
            }
            
            .card-img-top {
              max-height: 150px !important;
              height: 150px !important;
              object-fit: contain !important;
            }
          }

          /* General animations and effects */
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }

          .card:hover .card-img-top {
            transform: scale(1.05);
          }

          .carousel-control-prev,
          .carousel-control-next {
            width: 5%;
            z-index: 1;
          }

          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            width: 20px;
            height: 20px;
          }

          /* Ensure single card display on very small and mobile screens */
          @media (max-width: 320px) {
            .col-12 {
              flex: 0 0 100% !important;
              max-width: 100% !important;
              padding: 0 5px !important;
            }
          }
          
          @media (min-width: 321px) and (max-width: 576px) {
            .col-12 {
              flex: 0 0 100% !important;
              max-width: 100% !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Skillsliders;