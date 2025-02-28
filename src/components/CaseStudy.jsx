import React from "react";
import { useParams } from "react-router-dom";

const caseStudies = {
  "bellingham-buzz": {
    title: "Bellingham Buzz",
    focus: ["Local Events", "Community Engagement", "Entertainment", "Social Connections"],
    challenge: "How can we make finding fun events in Bellingham easier for locals and visitors?",
    approach: "Created an interactive website where users can take a quiz to discover places that match their mood or browse using filters.",
    results: ["Improved event discoverability", "User-friendly filtering system"],
    cta: "Encouraging users to explore new places in Bellingham with ease."
  },
  "virtual-realty-nw": {
    title: "Virtual Realty NW",
    focus: ["Real Estate", "Photography", "Web Design", "Business Solutions"],
    challenge: "How can a real estate photography company showcase their work more effectively online?",
    approach: "Developed a modern, visually-driven website featuring high-quality real estate photography portfolios.",
    results: ["Enhanced online presence", "Better lead conversion for photography services"],
    cta: "Driving more bookings for high-end real estate photography services."
  }
};

const CaseStudy = () => {
  const { projectId } = useParams();
  const project = caseStudies[projectId];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <section className="case-study">
      <h1>{project.title}</h1>
      <div className="hr"></div>

      <div id="project-focus">
        <h2>Project Focus</h2>
        <ul>
          {project.focus.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>

      <div id="challenge">
        <h2>Challenge</h2>
        <p>{project.challenge}</p>
      </div>

      <div id="approach">
        <h2>Approach</h2>
        <p>{project.approach}</p>
      </div>

      <div id="results">
        <h2>Results</h2>
        <ul>
          {project.results.map((result, index) => <li key={index}>{result}</li>)}
        </ul>
      </div>

      <div id="cta">
        <h2>A Call to Action</h2>
        <p>{project.cta}</p>
      </div>
    </section>
  );
};

export default CaseStudy;
