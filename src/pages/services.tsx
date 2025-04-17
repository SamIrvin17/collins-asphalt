import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./services.css";
import asphaltImage from '../images/asphalt-hero-image.avif';
import sealcoatingImage from '../images/spraying.jpg';
import stripingImage from '../images/striping.avif';

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="service">
        <div className="service-title">Asphalt</div>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <img src={asphaltImage} alt="Asphalt Paving1" className="service-image" />
          <img src={asphaltImage} alt="Asphalt Paving2" className="service-image" />
          <img src={asphaltImage} alt="Asphalt Paving3" className="service-image" />
        </Carousel>
        <div className="service-description">
          <p>
            Our asphalt paving services provide durable, high-quality surfaces for driveways, parking lots, and roads.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="service-title">Sealcoating</div>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
        <img src={sealcoatingImage} alt="Sealcoating Service1" className="service-image" />
        <img src={sealcoatingImage} alt="Sealcoating Service2" className="service-image" />
        <img src={sealcoatingImage} alt="Sealcoating Service3" className="service-image" />
        </Carousel>
        <div className="service-description">
          <p>
            Protect and extend the life of your asphalt with our professional sealcoating services, designed to prevent cracks and damage.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="service-title">Striping</div>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
        <img src={stripingImage} alt="Parking Lot Striping1" className="service-image" />
        <img src={stripingImage} alt="Parking Lot Striping2" className="service-image" />
        <img src={stripingImage} alt="Parking Lot Striping3" className="service-image" />
        </Carousel>
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
