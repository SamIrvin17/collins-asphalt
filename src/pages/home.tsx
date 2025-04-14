// Example: Home.tsx
import React from "react";
import heroImage from '../images/asphalt-hero-image.avif';
import Services from './services';
import "./home.css";
//    <p>Reliable, Professional, and Built to Last</p>

const Home: React.FC = () => {
  return (
  <div>
  <section className="hero">
  <img src={heroImage} alt="Collins Asphalt Hero Image" className="hero-image" />
  <div className="hero-text">
    <h1>Collins Asphalt and Sealcoating</h1>
    <p>Quality Asphalt Paving & Maintenance</p>
  </div>
</section>
<Services />
<div>
      {/* Your existing Services section here */}
      
      {/* New section for Surrounding Areas */}
      <section className="surrounding-areas">
        <h2>We serve the surrounding areas!</h2>
        <div className="areas-list">
          <div className="area">
            <span className="bullet">&#8226;</span>
            <span>Virginia Beach, Va</span>
          </div>
          <div className="area">
            <span className="bullet">&#8226;</span>
            <span>Norfolk, Va</span>
          </div>
          <div className="area">
            <span className="bullet">&#8226;</span>
            <span>Chesapeake, Va</span>
          </div>
          <div className="area">
            <span className="bullet">&#8226;</span>
            <span>Richmond, Va</span>
          </div>
          <div className="area">
            <span className="bullet">&#8226;</span>
            <span>Hampton, Va</span>
          </div>
          <div className="area">
            <span className="bullet">&#8226;</span>
            <span>Suffolk, Va</span>
          </div>
        </div>
      </section>
    </div>
<h1>Welcome to Collins Asphalt!</h1>
</div>
  );
};

export default Home;
