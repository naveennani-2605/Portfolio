import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
          <Main />
          <About />
          <Skills />
          <Gallery />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App
