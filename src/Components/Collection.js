import React from 'react';
import './Collection.css';
import image1 from '../images/jewelery1.jpeg'; // replace with actual path
import image2 from '../images/jewelery1.jpeg'; // replace with actual path

const Collection = () => {
  return (
    <section className="collection">
      <div className="collection-item">
        <img src={image1} alt="Jewelry 1" className="collection-image"/>
        <div className="collection-text">
          <h2>Summer Collection</h2>
          <p>"Embrace the sunshine within and wear your strength proudly. Our summer jewelry collection is designed to inspire, uplift, and remind you of the beauty in every moment. Let each piece be a symbol of your journey towards inner peace and self-love."</p>
        </div>
      </div>
      <div className="collection-item2">
        <div className="collection-text2">
        <h2>Summer Collection</h2>
        <p>"Embrace the sunshine within and wear your strength proudly. Our summer jewelry collection is designed to inspire, uplift, and remind you of the beauty in every moment. Let each piece be a symbol of your journey towards inner peace and self-love."</p>

        </div>

        <img src={image2} alt="Jewelry 2" className="collection-image1"/>
      </div>
    </section>
  );
};

export default Collection;
