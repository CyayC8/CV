import React, { useState } from 'react';
import './app.css';
import Header from './components/Header';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main className="main-container">
        <About />
        <Experience />
        <Projects />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
