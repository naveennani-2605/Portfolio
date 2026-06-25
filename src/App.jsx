import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journey from "./pages/Journey/Journey";
import Stack from "./pages/Stack/Stack";
import Work from "./pages/Work/Work";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8%" }
    );

    document.querySelectorAll("[data-reveal]").forEach((element, index) => {
      element.style.setProperty("--delay", `${(index % 4) * 90}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <div className="portfolio">
      <div className="scroll-progress" />
      <Navbar />
      <main id="top">
        <Home />
        <About />
        <Work />
        <Journey />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
