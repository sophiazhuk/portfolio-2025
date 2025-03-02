import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CaseStudy from "./components/CaseStudy";
import BellinghamBuzz from "./components/case-studies/BellinghamBuzz";
import VirtualRealtyNW from "./components/case-studies/VirtualRealtyNW";
import Mitra from "./components/case-studies/Mitra";
import Showcase from "./components/case-studies/Showcase";



import "./styles/styles.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/case-study/:projectId" element={<CaseStudy />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study/:projectId" element={<CaseStudy />} />
        <Route path="/case-study/bellingham-buzz" element={<BellinghamBuzz />} />
        <Route path="/case-study/virtual-realty-nw" element={<VirtualRealtyNW />} />
        <Route path="/case-study/showcase" element={<Showcase />} />
        <Route path="/case-study/mitra" element={<Mitra />} />


      </Routes>
    </Router>
  );
};

export default App;
