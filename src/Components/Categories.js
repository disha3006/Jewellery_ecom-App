import React from 'react';
import './Categories.css';
import earringsImage from '../images/jewelery1.jpeg';
import necklacesImage from '../images/jewelery1.jpeg';
import braceletsImage from '../images/bracelet.jpg';
import resinImage from '../images/jewelery1.jpeg';

const Categories = () => {
  return (
    <section className="categories">
        <div className="category-item">
          <img src={earringsImage} alt="Earrings" />
          <p>EARINGS</p>
        </div>
        <div className="category-item">
          <img src={necklacesImage} alt="Necklaces" />
          <p>NECKLACES</p>
        </div>
        <div className="category-item">
          <img src={braceletsImage} alt="Bracelets" />
          <p>BRACELETS</p>
        </div>
        <div className="category-item">
          <img src={resinImage} alt="Resin" />
          <p>RESIN</p>
        </div>
        <div className="category-item">
          <img src={resinImage} alt="More" />
          <p>MORE</p>
        </div>
    </section>
  );
};

export default Categories;
