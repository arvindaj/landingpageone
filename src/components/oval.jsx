import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Oval3D = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-350">

      <div style={{
        minWidth: '90vh',
        maxWidth:'120vh', // Fixed width for consistent oval shape
        height: '220px',
         borderRadius: '50%',
        border: '4px solid rgb(5, 16, 138)',
        transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg)',
        
      }}>
        <br></br>
        <div
          style={{
            minWidth: '90vh', // Fixed width for consistent oval shape
            height: '190px',
            maxWidth:'120vh',
            borderRadius: '50%',
            backgroundColor: '#150cb4', // Your specified blue
            border: '4px solid rgb(5, 16, 138)', // Enhanced white border for clear "line"
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.4), -5px -15px 10px rgba(255, 255, 255, 0.2)', // 3D depth
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)', // 3D tilt
            transition: 'transform 0.3s ease', // Smooth transition (hover not supported inline)
          }}
        >

        </div>
      </div>
    </div>
  );
};

export default Oval3D;