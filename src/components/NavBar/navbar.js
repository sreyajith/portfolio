import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assests/logo.png';
import contact from '../../assests/contact.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <img src={logo} alt="logo" className="logo" />

      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="intro"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link desktopMenuListItem"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link desktopMenuListItem"
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link desktopMenuListItem"
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="works"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link desktopMenuListItem"
            >
              Portfolio
            </Link>
          </li>
          
        </ul>
      </div>

      <button className="btn desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contact} alt="contact" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;