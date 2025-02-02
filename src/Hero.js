import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <h3 className="m-0">My Portfolio</h3>
          </div>
          <nav>
            <ul className="list-unstyled d-flex gap-4 m-0">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white text-decoration-none">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="hero-gradient text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-4">Welcome to My Portfolio</h1>
          <p className="lead mb-5">
            Building innovative software solutions and scalable applications.
          </p>
          <a href="#projects" className="btn btn-light btn-lg px-5 py-3">
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
