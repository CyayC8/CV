import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

type Props = {
  toggleDarkMode: () => void;
};

export default function Header({ toggleDarkMode }: Props) {
  const [dark, setDark] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleToggle = () => {
    setDark(!dark);
    toggleDarkMode();
  };

  return (
    <header style={{
      padding: "1.5rem 5%",
      backgroundColor: "#0e73cc",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      {/* Name + dark toggle */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
      }}>
        <h1 style={{ margin: 0, fontSize: "2rem" }}>Cedric Antoni Swalens</h1>
        <button
          onClick={handleToggle}
          style={{
            padding: "0.3rem 0.6rem",
            fontSize: "1.2rem",
            background: "none",
            border: "2px solid white",
            borderRadius: "100%",
            cursor: "pointer",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s",
          }}
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Navigation */}
      <nav>
        <ul style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}>
          <li><button onClick={() => scrollToSection("about")}>About</button></li>
          <li><button onClick={() => scrollToSection("experience")}>Experience</button></li>
          <li><button onClick={() => scrollToSection("projects")}>Projects</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}
