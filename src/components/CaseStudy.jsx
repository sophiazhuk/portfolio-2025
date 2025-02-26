import React from "react";
import { useParams } from "react-router-dom";

const caseStudies = {
  "project1": {
    title: "Project 1: Modern Portfolio Site",
    description: "A case study on building a modern portfolio site with React and SCSS.",
    details: "This project was created to showcase web development skills using React, modern CSS techniques, and accessibility best practices.",
    image: "/images/project1.jpg",
  },
  "project2": {
    title: "Project 2: Custom Blog Platform",
    description: "Developing a blog platform with Firebase and React.",
    details: "This project focused on creating a full-stack blog platform with user authentication and real-time database updates.",
    image: "/images/project2.jpg",
  },
  "project3": {
    title: "Project 3: Web-Based Productivity Tool",
    description: "A productivity tool built for managing tasks efficiently.",
    details: "This tool was designed with a user-friendly interface and features such as task tracking, deadlines, and collaboration.",
    image: "/images/project3.jpg",
  }
};

const CaseStudy = () => {
  const { projectId } = useParams();
  const project = caseStudies[projectId];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="case-study">
      <h1>{project.title}</h1>
      <div className="hr"></div>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <p>{project.details}</p>
    </div>
  );
};

export default CaseStudy;
