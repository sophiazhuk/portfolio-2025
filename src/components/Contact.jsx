import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa"; // Import copy icon

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "zhuksophia@gmail.com"; // Replace with actual email

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset "Copied!" after 1.5s
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="hr"></div>
      <div className="text-block">
        <p><i>Sophia Zhuk</i></p>

        <h3><a href="https://www.linkedin.com/in/sophiazhuk/">LinkedIn</a></h3>

        <h3 
          className="email-container" 
          onClick={copyToClipboard}
        >
          {email} 
          <span className="copy-icon">
            <FaRegCopy />
          </span>
          {copied && <span className="copied-text">Copied!</span>}
        </h3>

        <h3><a href="#">GitHub</a></h3>
      </div>
    </section>
  );
};

export default Contact;
