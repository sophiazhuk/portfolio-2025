import React, { useState, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";

const asciiFrames = [
  `
      |\\      _,,,---,,_
zZZzz /, \`.-' \`'    -.  ;-;;,_
     |,4-  ) )-,_. ,\\ (  \`'-'
    '---''(_/--'  \`-'\\_)
  `,
  `
      |\\      _,,,---,,_
zzZZz /, \`.-' \`'    -.  ;-;;,_
     |,4-  ) )-,_. ,\\ (  \`'-'
    '---''(_/--'  \`-'\\_)
  `,
  `
      |\\      _,,,---,,_
ZzzzZ /, \`.-' \`'    -.  ;-;;,_
     |,4-  ) )-,_. ,\\ (  \`'-'
    '---''(_/--'  \`-'\\_)
  `
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [frame, setFrame] = useState(0);
  const email = "zhuksophia@gmail.com"; 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame + 1) % asciiFrames.length);
    }, 500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="hr"></div>
      <div className="contact-container">
        <div className="text-block">
          <h3><a href="https://www.linkedin.com/in/sophiazhuk/">LinkedIn</a></h3>
          <h3 
            className="email-container" 
            onClick={copyToClipboard}
          >
            {email} 
            <span className="copy-icon">
              <FaRegCopy />
            </span>
          </h3>          
          {copied && <span className="copied-text">Copied!</span>}

          <h3><a href="#">GitHub</a></h3>
        </div>

        <pre className="ascii-cat">{asciiFrames[frame]}</pre>

      </div>
    </section>
  );
};

export default Contact;
