
import bluebg from '../../assets/img/bluebg.png'; // Update with actual path
import skillorea from '../../assets/img/skillorea.png'; // Update with actual path


const Footer = () => {
  return (
    <div
      className="relative text-white pt-5 mt-5 mb-0 bg-cover bg-no-repeat bg-center min-h-[514px] max-h-[600px]"
      style={{ backgroundImage: `url(${bluebg})`, overflow: 'hidden' }}
    >
      <div className="container relative mt-12 pt-4 mb-12 z-[1]">
        {/* Row 1: Centered Image */}
        <div className="row mb-0">
          <div className="col-12 text-center mt-5 px-4">
            <img
              src={skillorea}
              alt="Logo"
              loading="lazy"
              className="max-w-[250px] h-auto object-contain mb-4"
            />
          </div>
        </div>

        {/* Row 2: Navigation Links */}
        <div className="row mb-3">
          <div className="col-12 flex justify-center gap-4 flex-wrap">
            <a href="#about" className="text-decoration-none text-white text-sm">About Us</a>
            <a href="#wellness" className="text-decoration-none text-white text-sm">Wellness</a>
            <a href="#shop" className="text-decoration-none text-white text-sm">Shop</a>
            <a href="#contact" className="text-decoration-none text-white text-sm">Contact Us</a>
          </div>
        </div>

        {/* Row 3: Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <small className="text-white">© 2025 All rights reserved.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;