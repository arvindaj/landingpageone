import React from 'react';
import bluebg from '../../assets/img/bluebg.png'; // Replace with actual path to background image
import skillorea from '../../assets/img/skillorealogowhite.png'; // Replace with actual path to logo image

const Footer = () => {
  return (
    <div
      className="position-relative text-white pt-5 mt-5 mb-0 footerbgimg"
      style={{
        overflow: 'hidden',
        backgroundImage: `url(${bluebg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '360px',
        maxHeight: '500px',
      }}
    >
      <div className="container position-relative mt-lg-5 pt-4 mb-lg-3" style={{ zIndex: 1 }}>
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
            <a href="#about" className="text-decoration-none text-light small">
              About Us
            </a>
            <a href="#wellness" className="text-decoration-none text-light small">
              Wellness
            </a>
            <a href="#shop" className="text-decoration-none text-light small">
              Shop
            </a>
            <a href="#contact" className="text-decoration-none text-light small">
              Contact Us
            </a>
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
  );
};

export default Footer;