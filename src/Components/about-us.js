import React from 'react';
import './about-us.css';
import mainImage from '../images/main-bg.jpg'; // Replace with actual path
import pearlsImage from '../images/b3.jpg'; // Replace with actual path
import womanImage from '../images/n2.jpg'; // Replace with actual path
import earringImage from '../images/b4.jpg'; // Replace with actual path
import ringSketch from '../images/e3.jpg'; // Replace with actual path

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>SHE-DOES-ART</h1>
        <div className="header-image">
          <img src={mainImage} alt="Jewelry" />
          <div className="header-text">We aim to globalize the beauty of our antique pieces. From Victorian to Art Deco, our exquisite pieces inspire imaginations.</div>
        </div>
      </header>

      <section className="our-mission">
        <h2>OUR MISSION</h2>
        <p>At The Satice Jewelers we live and breathe our mantra that choosing antique jewelry is making a decision to be kind to Mother Earth, while preserving both the past and the future.</p>
        <p>While many purveyors of vintage jewelry carry both authentic and reproduced pieces, The Satice Jewelers consistently maintains a steadfast loyalty to jewelry that is exclusively vintage and antique.</p>
        <div className="mission-images">
          <img src={pearlsImage} alt="Pearls" />
          <img src={womanImage} alt="Woman with Jewelry" />
        </div>
        <div className="mission-sketch">
          <img src={ringSketch} alt="Ring Sketch" />
        </div>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>It all started back in 1965 when our owner Christian London started to collect antique jewelry and antiques from around the world, eventually founding what is now known as The Satice Jewelers.</p>
        <p>The Satice Jewelers was amalgamated with Maidstone Ltd in the 1990s creating a vast and comprehensive collection.</p>
        <p>We discover hidden treasures and rare finds; first and foremost the antique jewelry collection on our website has been carefully selected for the discerning collector.</p>
        <p>Our antique jewelry selection is difficult to source and is steeped in English history.</p>
      </section>

      <section className="additional-content">
        <div className="additional-text">
          <p>By browsing through the artisan rings or our extensive collection of European jewelry you will get a small sense of the history behind each item.</p>
          <p>Our website will lead you to find truly unique pieces of exquisitely crafted diamond solitaires, deep blue Sapphires, Rubies, Emeralds and semi-precious stones.</p>
        </div>
        <div className="additional-images">
          <img src={earringImage} alt="Earring" />
          <img src={ringSketch} alt="Ring" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
