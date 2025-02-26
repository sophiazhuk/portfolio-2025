import React, { useState, useEffect } from "react";

const randomChars = ["@", "#", "%", "*", "!", "$", "A", "X", "9", "Z", "O", "M", "&", "Q", "W", "^", "7"];

const Hero = () => {
  const [trails, setTrails] = useState([]);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const randomChar = randomChars[Math.floor(Math.random() * randomChars.length)];

    const distance = Math.sqrt(
      Math.pow(clientX - lastMousePosition.x, 2) + Math.pow(clientY - lastMousePosition.y, 2)
    );

    if (distance > 20) {
      setTrails((prevTrails) => [
        ...prevTrails,
        {
          id: Date.now(),
          char: randomChar,
          x: clientX,
          y: clientY,
        },
      ]);

      setLastMousePosition({ x: clientX, y: clientY });

      setTimeout(() => {
        setTrails((prevTrails) => prevTrails.filter((trail) => trail.id !== Date.now()));
      }, 1200);
    }
  };

  return (
    <section id="hero" className="hero" onMouseMove={handleMouseMove}>
      <div className="text-block">
        <h2>Sophia A. Zhuk</h2>
        <p>Web Developer and C.S. Student @ WWU</p>
        <blockquote>Building creative & accessible digital experiences.</blockquote>
      </div>

      {trails.map((trail) => (
        <span
          key={trail.id}
          className="cursor-trail"
          style={{
            top: trail.y + "px",
            left: trail.x + "px",
            transform: "translate(-50%, -50%)",
          }}
        >
          {trail.char}
        </span>
      ))}
    </section>
  );
};

export default Hero;
