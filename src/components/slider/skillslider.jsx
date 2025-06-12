import React from "react";
import tempbanner from "../../assets/img/flatmobile.png";
import worshop from "../../assets/img/worshop.png";
import quizzer from "../../assets/img/quizzer.png";
import entainment from "../../assets/img/entainment.png";
import infography from "../../assets/img/infography.png";
import point from "../../assets/img/point.png";


const cardData = [
  { title: "Workshop", image: worshop, category: "workshop" },
  { title: "Quizzer", image: quizzer, category: "quizzer" },
  { title: "Entertainment", image: entainment, category: "entertainment" },
  { title: "Infography", image: infography, category: "infography" },
  { title: "Point", image: point, category: "point" },
  { title: "Workshop", image: worshop, category: "workshop" },
  { title: "Quizzer", image: quizzer, category: "quizzer" },
  { title: "Entertainment", image: entainment, category: "entertainment" },
  { title: "Infography", image: infography, category: "infography" },
  { title: "Point", image: point, category: "point" },
  { title: "Workshop", image: worshop, category: "workshop" },
  { title: "Quizzer", image: quizzer, category: "quizzer" },
  { title: "Entertainment", image: entainment, category: "entertainment" },
  { title: "Infography", image: infography, category: "infography" },
  { title: "Point", image: point, category: "point" },

];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Skillsliders = () => {
  const getCardsPerSlide = () => {
    if (window.innerWidth <= 320) return 1;
    if (window.innerWidth <= 576) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 992) return 3;
    return 5;
  };

  const [cardsPerSlide, setCardsPerSlide] = React.useState(getCardsPerSlide());

  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const carouselElement = document.getElementById("cardCarousel");
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 4000,
        ride: "carousel",
        pause: "hover",
        touch: true,
      });
    }
  }, []);

  const slides = chunkArray(cardData, cardsPerSlide);

  const getColumnClass = () => {
    if (cardsPerSlide === 5) return "desktop-5-col";
    switch (cardsPerSlide) {
      case 1:
        return "col-12";
      case 2:
        return "col-12 col-sm-6";
      case 3:
        return "col-12 col-sm-6 col-md-4";
      default:
        return "col-12 col-sm-6 col-md-3";
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <p className="fs-6 fs-md-5 text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>

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
                <div
                  className={`row ${cardsPerSlide === 5 ? "five-card-row" : "mobile-row"
                    } justify-content-center align-items-stretch`}
                >
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
                              height: "350px", // 👈 NEW
                              minHeight: "190px", // 👈 NEW
                              objectFit: "contain",
                              transition: "transform 0.3s ease",
                            }}
                          />
                        </div>
                        <div className="card-title-container d-flex justify-content-center ">
                          <h5
                            className="card-title text-white px-3 p-1 rounded fw-bold mb-0"
                            style={{
                              backgroundColor: "#1e3a8a",
                              fontSize: "12px",
                              textTransform: "capitalize",
                              display: "inline-block",
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

      

    </div>
  );
};

export default Skillsliders;