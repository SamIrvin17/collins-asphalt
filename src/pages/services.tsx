import React from "react";
import "./services.css";
import asphaltImage from '../images/asphalt-hero-image.avif';
import sealcoatingImage from '../images/spraying.jpg';
import stripingImage from '../images/striping.avif';

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="service">
        <div className="service-title">Asphalt</div>
        <img src={asphaltImage} alt="Asphalt Paving" className="service-image" />
        <div className="service-description">
          <p>
            Our asphalt paving services provide durable, high-quality surfaces for driveways, parking lots, and roads.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="service-title">Sealcoating</div>
        <img src={sealcoatingImage} alt="Sealcoating Service" className="service-image" />
        <div className="service-description">
          <p>
            Protect and extend the life of your asphalt with our professional sealcoating services, designed to prevent cracks and damage.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="service-title">Striping</div>
        <img src={stripingImage} alt="Parking Lot Striping" className="service-image" />
        <div className="service-description">
          <p>
            Our precise striping services enhance safety and organization for parking lots, roadways, and commercial properties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
