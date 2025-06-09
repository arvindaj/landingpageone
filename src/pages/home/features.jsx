import React from 'react';
import mobilhill from './assets/mobilhill.png'; // Adjust path as needed
import doublearrow from './assets/doublearrow.png'; // Adjust path as needed

const FeaturesSection = ({ isVisible, features }) => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5 mt-3">
            <div className={`animate-in ${isVisible.features ? 'visible' : ''}`}>
              <h2
                className="display-5 fw-bold mb-4"
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
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
                className="img-fluid"
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
                className={`feature-item ${isVisible.features ? 'visible' : ''}`}
                style={{
                  padding: window.innerWidth <= 768 ? '15px' : '20px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={e => {
                  if (window.innerWidth > 768) {
                    // Add desktop hover effects if needed
                  }
                }}
                onMouseLeave={e => {
                  if (window.innerWidth > 768) {
                    // Add desktop hover effects if needed
                  }
                }}
              >
                {/* Header Row - Responsive Layout */}
                <div
                  className="d-flex align-items-center justify-content-between mb-3"
                  style={{
                    flexDirection: window.innerWidth <= 576 ? 'column' : 'row',
                    gap: window.innerWidth <= 576 ? '15px' : '0'
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      className="feature-icon me-3"
                      style={{
                        fontSize: window.innerWidth <= 576 ? '2rem' : '2.5rem',
                        background: 'linear-gradient(135deg, #1D5434 0%, #11118C 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                      }}
                    >
                      <img src={doublearrow} alt="" style={{ height: "30px" }} />
                    </div>
                    <h5
                      className="fw-bold text-green mb-0 mt-2"
                      style={{
                        fontSize: window.innerWidth <= 576 ? '1.1rem' :
                          window.innerWidth <= 768 ? '1.2rem' : '1.5rem',
                        textAlign: window.innerWidth <= 576 ? 'center' : 'left'
                      }}
                    >
                      {feature.title}
                    </h5>
                  </div>
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

        .feature-item,
        .feature-icon,
        h5,
        p,
        li {
          transition: all 0.3s ease;
        }

        @media (hover: none) and (pointer: coarse) {
          .feature-item:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;