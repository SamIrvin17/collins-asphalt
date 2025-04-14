import React from "react";
import { Link, NavLink } from "react-router-dom";
import truckLogo from '../images/truck-logo.jpeg';
import redPhone from '../images/red-phone.png';
import redLocation from '../images/red-location.png';
import realLogo from '../images/FOOBAR.png';

import "./header.css"; // Ensure the correct CSS file is imported

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={realLogo} alt="Collins Asphalt Logo" />
      </div>
      <div className="header-top">
        <div className="location">
          <img src={redLocation} alt="Red location Icon" />
          <p>Virginia Beach, Va</p>
        </div>
        <div className="phone-number">
          <img src={redPhone} alt="Red Phone Icon" />
          <p><a href="tel:+7575458540">+1 (757) 545-8540</a></p>
        </div>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
