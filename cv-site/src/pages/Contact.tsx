import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-links">
        <a href="https://github.com/CyayC8" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
       
        </a>
        <a href="https://linkedin.com/in/https://www.linkedin.com/in/cedric-swalens-9758a4b2/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="mailto:wp.cedric94@gmail.com">
          <FaEnvelope size={40} />
    
        </a>
      </div>
    </section>
  );
}
