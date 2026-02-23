import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Loader from './components/Loader/Loader';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Together from './pages/Together/Together';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Together />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App
