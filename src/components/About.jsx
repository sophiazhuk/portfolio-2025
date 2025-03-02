import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
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
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="hr"></div>
      <div className="about-text">
        <p>
          My name is Sophia, and I am a Computer Science student at Western Washington University, originally from Tacoma, WA. Alongside my Computer Science degree, I am pursuing a Web Programming Certificate and studying Psychology. As a part of NEAT Lab at WWU, I use the intersection of Psychology and Computer Science to enhance my understanding of Human-Computer Interaction.
          <br /><br />I began working as a Video Editor before transitioning into web development. Since October 2023, I have worked as a Web Developer at Western Washington University, where I assist instructors in creating learning resources and interactive web-based projects. My role has involved modernizing older web publications, building sites with ReactJS, and ensuring accessibility best practices are followed.
          <br /><br />Currently, I am expanding my expertise in full-stack development and refining my skills in building scalable, user-friendly web applications. My long-term goal is to contribute to the development of systems that look good, improve usability, accessibility, and the overall user experience in digital environments.        
        </p>
        <p><a className="external" href="#" target="_blank" rel="noopener noreferrer">Resume<FaExternalLinkAlt className="external-icon" /></a></p>
      </div>
    </section>
  );
};

export default About;
