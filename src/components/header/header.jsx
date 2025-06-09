import brlogo from "../../assets/img/bnrlp-logo.png"
import earcth from "../../assets/img/earcth.png"
import { Container, Row, Col, Button, Card, Nav, Navbar, Form, Badge } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="text-white">
      {/* header  */}
     <Navbar bg="white" expand="lg" className="shadow-sm py-3 mt-5 fixed-top">
                <div className="container-fluid px-lg-5">
                    <div className="row align-items-center w-100 ">
                        {/* Left side image */}
                        <div className="col-6">
                            <img
                                src={brlogo}
                                alt="Logo"
                                className="img-fluid rounded mx-lg-5 px-lg-4" 
                                style={{ width: '180px', height: 'auto', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Right side content - 3 rows */}
                        <div className="col-6 h-100">
                            <div className="container-fluid h-100">
                                {/* Row 1 - "You can ask" text */}
                                <div className="row mb-0">
                                    <div className="col-12">
                                        <p className="small mb-0 text-black text-center" style={{ opacity: '0.9' }}>
                                            You can ask
                                        </p>
                                    </div>
                                </div>

                                {/* Row 2 - "Worthwhile Question" heading */}
                                <div className="row mb-2">
                                    <div className="col-12">
                                        <h5 className="h5 fw-bold mb-0 text-black text-center">
                                            Worthwhile Question
                                        </h5>
                                    </div>
                                </div>

                                {/* Row 3 - Icon and email */}
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img
                                                src={earcth}
                                                alt="Contact icon"
                                                className="img-fluid rounded me-3"
                                                style={{ width: '20px', height: '20px', objectFit: 'cover' }}
                                            />
                                            <h6 className="h6 mb-0 text-black">
                                                info@cogniitec.com
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
    </header>
  );
};

export default Header;