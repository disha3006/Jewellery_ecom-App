import React from 'react';
import './Banner.css';
import bannerImage from '../images/coverpage.jpeg';

const Banner = () => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    ></div>
  );
};

export default Banner;
