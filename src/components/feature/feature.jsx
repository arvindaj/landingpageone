import { useState, useEffect, useRef } from 'react';
import mobilhill from '../../assets/img/mobilhill.png'; // Replace with actual path
import doublearrow from '../../assets/img/doublearrow.png'; // Replace with actual path

// Sample features data
const features = [
  {
    title: 'Interactive Learning',
    description: 'Engage with hands-on activities.',
    points: ['Live quizzes', 'Real-time feedback', 'Gamified lessons'],
  },
  {
    title: 'Expert Instructors',
    description: 'Learn from industry professionals.',
    points: ['Certified experts', 'Personalized guidance', 'Regular Q&A sessions'],
  },
];

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState({ features: false });
  const sectionRef = useRef(null);

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, features: true }));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-0 mt-3">
            <div className={`animate-in ${isVisible.features ? 'visible' : ''}`}>
              <h2
                className="display-5 fw-bold mb-0"
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  lineHeight: '1.2',
                }}
              >
                AN INNOVATIVE COURSE<br />
                <span className="fs-2 fw-bold" style={{ color: '#e64004' }}>
                  FOR STUDENTS
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-6 order-lg-1 order-2">
            <div className={`animate-in ${isVisible.features ? 'visible' : ''}`}>
              <img
                src={mobilhill}
                alt="Illustration of course features for students"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Features Column */}
          <div className="col-lg-6 order-lg-2 order-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`animate-in ${isVisible.features ? 'visible' : ''}`}
                style={{
                  padding: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                tabIndex={0}
                onMouseEnter={(e) => {
                  if (window.innerWidth > 768) {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth > 768) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {/* Header Row */}
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center">
                    <div
                      className="feature-icon me-3 mt-2 mt-lg-0"
                      style={{
                        background: 'linear-gradient(135deg, #1D5434 0%, #11118C 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                      }}
                    >
                      <img src={doublearrow} alt="" style={{ height: '30px' }} loading="lazy" />
                    </div>
                    <h5 className="fw-bold text-green mb-0 mt-lg-2">
                      {feature.title}
                    </h5>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-3" style={{ color: '#64748b', lineHeight: '1.4' }}>
                  {feature.description}
                </p>

                {/* Feature Points */}
                <ul className="feature-points" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {feature.points.map((point, idx) => (
                    <li
                      key={idx}
                      style={{
                        position: 'relative',
                        paddingLeft: '2rem',
                        marginBottom: '0.75rem',
                        color: '#475569',
                        lineHeight: '1.5',
                        display: 'flex',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          left: '0',
                          top: '2px',
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #1D5434 0%, #11118C 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <i className="fas fa-check" style={{ color: '#ffffff', fontSize: '0.7rem' }}></i>
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

      <style jsx>{`
        /* Animation styles */
        .animate-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive typography and spacing */
        h5 {
          font-size: 1.5rem;
        }
        p {
          font-size: 1rem;
        }
        li {
          font-size: 0.95rem;
        }
        .feature-icon {
          font-size: 2.5rem;
        }

        @media (max-width: 1200px) {
          .feature-item {
            margin-bottom: 1.5rem !important;
          }
        }

        @media (max-width: 992px) {
          #features {
            padding: 30px 0 !important;
          }
          h5 {
            font-size: 1.2rem;
          }
          p {
            font-size: 1rem;
          }
          li {
            font-size: 0.95rem;
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
            padding: 15px !important;
          }
          h5 {
            font-size: 1.2rem;
            text-align: center;
          }
          p {
            font-size: 0.95rem;
            text-align: center;
          }
          li {
            padding-left: 1.5rem;
            font-size: 0.9rem;
          }
          .feature-icon {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          #features {
            padding: 20px 0 !important;
          }
          .container {
            padding: 0 15px;
          }
          h5 {
            font-size: 1.1rem;
          }
          p {
            font-size: 0.9rem;
          }
          .row.g-5 {
            gap: 2rem !important;
          }
          li {
            font-size: 0.85rem;
          }
          .d-flex.align-items-center {
            flex-direction: column;
            gap: 15px;
            justify-content: center;
          }
          h5 {
            text-align: center;
          }
          .feature-icon {
            margin: 0 auto;
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

        /* Smooth transitions */
        .feature-item,
        .feature-icon,
        h5,
        p,
        li {
          transition: all 0.3s ease;
        }

        /* Touch-friendly interactions */
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