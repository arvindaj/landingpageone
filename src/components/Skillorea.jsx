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
    if (window.innerWidth <= 576) return 1; // 1 card on mobile
    if (window.innerWidth <= 768) return 2; // 2 cards on tablet
    return 4; // 4 cards on desktop
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

  return (
    <div className="container-fluid py-5" style={{ overflow: "hidden" }}>
      
      {/* download now  */}
      <div className="container">

      </div>
      {/* slider  */}
      <div className="container">
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
                <div className="row g-4 justify-content-center">
                  {slide.map((card, i) => (
                    <div
                      className={`col-12 col-sm-6 col-md-${cardsPerSlide === 1 ? 12 : 6
                        } col-lg-${cardsPerSlide === 4 ? 3 : cardsPerSlide === 2 ? 6 : 12}`}
                      key={i}
                    >
                      <div
                        className="card h-100 border-0 "
                        style={{
                          backgroundColor: "transparent",
                          transition: "all 0.3s ease",
                          transform: "translateY(0)",

                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-10px)";
                          e.currentTarget.style.boxShadow =
                            "0 20px 40px rgba(0,0,0,0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow =
                            "0 10px 30px rgba(0,0,0,0.1)";
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
                              height: "100%",
                              objectFit: "contain", // Changed to contain to show full image
                              transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = "scale(1)";
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
          {/* Navigation Arrows */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#cardCarousel"
            data-bs-slide="prev"
          >
            <div className="bg-dark rounded-circle p-2 shadow">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </div>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#cardCarousel"
            data-bs-slide="next"
          >
            <div className="bg-dark rounded-circle p-2 shadow">
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </div>
            <span className="visually-hidden">Next</span>
          </button>
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
          className="position-absolute"
          style={{
            bottom: "-100px",
            left: "20%",
            width: "60%",
            height: "200px",
            background:
              "linear-gradient(45deg, rgba(0,123,255,0.2) 0%, rgba(108,117,125,0.2) 100%)",
            borderRadius: "50%",
            backdropFilter: "blur(15px)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "-50px",
            right: "15%",
            width: "40%",
            height: "120px",
            background:
              "linear-gradient(135deg, rgba(0,123,255,0.15) 0%, rgba(0,123,255,0.1) 100%)",
            borderRadius: "50%",
            backdropFilter: "blur(10px)",
            animation: "float 4s ease-in-out infinite reverse",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "20px",
            left: "10%",
            width: "80px",
            height: "40px",
            background: "rgba(0,123,255,0.2)",
            borderRadius: "50%",
            backdropFilter: "blur(5px)",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "40px",
            right: "25%",
            width: "60px",
            height: "30px",
            background: "rgba(0,123,255,0.3)",
            borderRadius: "50%",
            backdropFilter: "blur(8px)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <div style={{ height: "150px" }} />
      </div>

      <style>
        {`
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
            z-index: 1; /* Ensure arrows are above other elements */
          }

          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            width: 20px;
            height: 20px;
          }

          @media (max-width: 576px) {
            .carousel-control-prev,
            .carousel-control-next {
              width: 10%;
            }
            .carousel-control-prev-icon,
            .carousel-control-next-icon {
              width: 15px;
              height: 15px;
            }
            .card-img-top {
              max-height: 200px; /* Flexible height for mobile */
              object-fit: contain !important; /* Ensure full image is visible */
            }
            .card {
              margin: 0 auto; /* Center card on mobile */
              max-width: 90%; /* Prevent overflow */
            }
          }

          @media (min-width: 577px) and (max-width: 768px) {
            .card-img-top {
              max-height: 250px; /* Slightly larger for tablets */
            }
          }
        `}
      </style>
    </div>
  );
};

export default CardSlider;