import React from 'react';
import './Bestseller.css';

// Import images
import image1 from '../images/b1.jpg';
import image2 from '../images/b3.jpg';
import image3 from '../images/n1.jpg';
import image4 from '../images/e1.jpg';

const Bestseller = () => {
  return (
    <div className="bestseller-container">
      <h2>OUR BESTSELLERS</h2>
      <div className="bestseller-items">
        <div className="bestseller-item">
          <img src={image1} alt="Bestseller 1" />
        </div>
        <div className="bestseller-item">
          <img src={image2} alt="Bestseller 2" />
        </div>
        <div className="bestseller-item">
          <img src={image3} alt="Bestseller 3" />
        </div>
        <div className="bestseller-item">
          <img src={image4} alt="Bestseller 4" />
        </div>
      </div>
      
    </div>
  );
};

export default Bestseller;
