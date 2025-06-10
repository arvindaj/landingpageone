import React from "react";
import tempbanner from "../../assets/img/flatmobile.png";
import worshop from "../../assets/img/worshop.png";
import quizzer from "../../assets/img/quizzer.png";
import entainment from "../../assets/img/entainment.png";
import infography from "../../assets/img/infography.png";
import point from "../../assets/img/point.png";

// Unique card data (removed duplicates, added placeholder for "add me")
const cardData = [
  {
    title: "worshop",
    image: worshop,
    category: "worshop",
  },
  {
    title: "quizzer",
    image: quizzer,
    category: "quizzer",
  },
  {
    title: "entainment",
    image: entainment,
    category: "entainment",
  },
  {
    title: "infography",
    image: infography,
    category: "infography",
  },
  {
    title: "point",
    image: point,
    category: "point",
  },
  {
    title: "worshop",
    image: worshop,
    category: "worshop",
  },
  {
    title: "quizzer",
    image: quizzer,
    category: "quizzer",
  },
  {
    title: "entainment",
    image: entainment,
    category: "entainment",
  },
  {
    title: "infography",
    image: infography,
    category: "infography",
  },
  {
    title: "point",
    image: point,
    category: "point",
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
    if (window.innerWidth <= 320) return 1; // 1 card on very small mobile
    if (window.innerWidth <= 576) return 1; // 1 card on mobile
    if (window.innerWidth <= 768) return 2; // 2 cards on small tablet
    if (window.innerWidth <= 992) return 3; // 3 cards on medium screens
    return 5; // 5 cards on desktop
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

  // Get column classes based on cards per slide
  const getColumnClass = () => {
    if (cardsPerSlide === 5) return "desktop-5-col";
    switch (cardsPerSlide) {
      case 1: return "col-12";
      case 2: return "col-12 col-sm-6";
      case 3: return "col-12 col-sm-6 col-md-4";
      default: return "col-12 col-sm-6 col-md-3";
    }
  };

  return (
    <div className="container-fluid skillslider" style={{ overflow: "hidden" }}>
      <div className="container my-5">
        <div className="row justify-content-center text-center text-md-start">
          <div className="col-12 col-md-10 col-lg-8">
            <h1 className="fw-bold fs-md-2 fs-lg-1 mb-3 display-4">
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
                <div className={`row ${cardsPerSlide === 5 ? "five-card-row" : "mobile-row"} justify-content-center align-items-stretch`}>
                  {slide.map((card, i) => (
                    <div
                      className={getColumnClass()}
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        className="card h-100 border-0 mobile-card text-center"
                        style={{
                          backgroundColor: "transparent",
                          transition: "all 0.5s ease",
                          transform: "translateY(0)",
                          flex: 1,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-10px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        {/* Image Container */}
                        <div
                          className="position-relative overflow-hidden card-image-container"
                          style={{
                            borderRadius: "20px",
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
                              transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = "scale(1)";
                            }}
                          />
                        </div>
                        
                        {/* Title Below Image - Centered */}
                        <div className="card-title-container d-flex justify-content-center mt-3">
                          <h5
                            className="card-title text-white px-3 py-2 rounded fw-bold mb-0"
                            style={{ 
                              backgroundColor: '#1e3a8a',
                              fontSize: '14px',
                              textTransform: 'capitalize',
                              display: 'inline-block'
                            }}
                          >
                            {card.title}
                          </h5>
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

      {/* Bottom Banner Image */}
      <div className="row">
        <div className="col-12">
          <img
            src={tempbanner}
            alt="Banner"
            className="mt-5 banner-image"
            loading="lazy"
            style={{
              width: "80%",
              height: "auto",
              maxWidth: "100%",
              borderRadius: window.innerWidth <= 576 ? "8px" : "12px",
              margin: window.innerWidth <= 576 ? "20px auto 0" : "40px auto 0",
              display: "block",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>

      <style>
        {`
          /* Mobile-first responsive design */
          @media (max-width: 320px) {
            .mobile-container {
              width: 98% !important;
              padding: 0 5px !important;
              margin: 0 auto !important;
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
            .card-title-container {
              margin-top: 10px !important;
            }
            .card-title {
              font-size: 12px !important;
              padding: 6px 12px !important;
            }
            .carousel-control-prev-icon,
            .carousel-control-next-icon {
              width: 18px !important;
              height: 18px !important;
              background-size: contain !important;
            }
            .banner-image {
              margin: 25px auto 0 !important;
              border-radius: 6px !important;
            }
            .col-12 {
              flex: 0 0 100% !important;
              max-width: 100% !important;
              padding: 0 5px !important;
            }
          }

          @media (min-width: 321px) and (max-width: 576px) {
            .mobile-container {
              width: 95% !important;
              padding: 0 10px !important;
              margin: 0 auto !important;
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
            .card-title-container {
              margin-top: 12px !important;
            }
            .card-title {
              font-size: 13px !important;
              padding: 8px 16px !important;
            }
            .col-12 {
              flex: 0 0 100% !important;
              max-width: 100% !important;
            }
          }

          @media (min-width: 577px) and (max-width: 768px) {
            .mobile-container {
              width: 90% !important;
              margin: 0 auto !important;
            }
            .card-image-container {
              height: 220px !important;
            }
            .card-img-top {
              max-height: 220px !important;
              height: 220px !important;
            }
            .card-title-container {
              margin-top: 15px !important;
            }
            .card-title {
              font-size: 14px !important;
              padding: 8px 16px !important;
            }
          }

          @media (min-width: 769px) and (max-width: 991px) {
            .mobile-container {
              width: 85% !important;
            }
            .card-image-container {
              height: 200px !important;
            }
            .card-img-top {
              max-height: 200px !important;
              height: 200px !important;
            }
            .card-title-container {
              margin-top: 15px !important;
            }
            .card-title {
              font-size: 14px !important;
              padding: 8px 16px !important;
            }
          }

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
            .card-title-container {
              margin-top: 15px !important;
            }
            .card-title {
              font-size: 14px !important;
              padding: 8px 16px !important;
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

          .card-title-container {
            transition: all 0.3s ease;
          }

          .card:hover .card-title {
            background-color: #1e40af !important;
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Skillsliders;