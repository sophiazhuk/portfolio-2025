import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const rotateY = ((clientX - centerX) / centerX) * -20;
      const rotateX = ((clientY - centerY) / centerY) * 20; 

      setTransform({ rotateX, rotateY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="navbar-container">
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <a href="/">SOPHIA ZHUK</a>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <a href="/about">About</a>
          </li>
          <li className={location.pathname === "/projects" ? "active" : ""}>
            <a href="/projects">Projects</a>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div 
            className="image-block-outer-wrapper"
            style={{
              transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="fluid-image-animation-wrapper">
              <div className="fluid-image-container">
                <div className="content-fit">
                  <img
                    src="/images/polaroid.jpg"
                    alt="Hero Section"
                    className="hero-image"
                  />
                  <div className="fluidImageOverlay"></div>
                </div>
              </div>
            </div>
          </div>        
        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 1021 12.79z"></path>
            </svg>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
