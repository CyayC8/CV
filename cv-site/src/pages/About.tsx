import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>Programmer, game enthusiast, building sleek CV websites.</p>
      <a href="/path-to-CV.pdf" download>
        Download CV
      </a>
    </section>
  );
};

export default About;
