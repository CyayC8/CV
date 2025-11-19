type Props = {
  toggleDarkMode: () => void;
};

export default function Header({ toggleDarkMode }: Props) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header style={{
      padding: "2rem 5%",
      backgroundColor: "#0e73cc",
      color: "#fff",
      textAlign: "center",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <h1 style={{ marginBottom: "1rem" }}>Cedric Antoni Swalens</h1>

      <nav>
        <ul style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}>
          <li>
            <button onClick={() => scrollToSection("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("experience")}>Experience</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
          </li>
           <li>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
          <li>
            <button onClick={toggleDarkMode} id="dark">Toggle Dark Mode</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
