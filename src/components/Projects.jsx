import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="hr"></div>

      <div className="project-grid">

      <a href={`/case-study/bellingham-buzz`} className="project-card">
      <div className="project-image" style={{ backgroundImage: "url('/images/bellingham-buzz/mobile-home-mock4.png')" }}></div>
          <div className="project-content">
            <h3>Bellingham Buzz</h3>
            <p>A nightlife guide for discovering local bars and entertainment.</p>
          </div>
        </a>

        <a href={`/case-study/mitra`} className="project-card">
        <div className="project-image" style={{ backgroundImage: "url('/images/mitra.png')" }}></div>
          <div className="project-content">
            <h3>Mitra: NEAT LAB</h3>
            <p>A social platform for neurodiverse college students to connect.</p>
          </div>
        </a>

        <a href={`/case-study/showcase`} className="project-card">
        <div className="project-image" style={{ backgroundImage: "url('/images/showcase.png')" }}></div>
          <div className="project-content">
            <h3>Innovative Showcase, CII</h3>
            <p>A modernization of ancient university web publications.</p>
          </div>
        </a>

        <a href={`/case-study/virtual-realty-nw`} className="project-card">
        <div className="project-image" style={{ backgroundImage: "url('/images/vrnw/home-mock.png')" }}></div>
          <div className="project-content">
            <h3>Virtual Realty NW</h3>
            <p>A real estate photography website for showcasing services.</p>
          </div>
        </a>

        <a href={`/case-study/project5`} className="project-card">
        <div className="project-image" style={{ backgroundImage: "url('/path-to-image3.jpg')" }}></div>
          <div className="project-content">
            <h3>More...</h3>
            <p></p>
          </div>
        </a>

      </div>
    </section>
  );
};

export default Projects;
