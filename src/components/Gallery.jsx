function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <h1>My Gallery</h1>
      <div className="gallery-container">
        <div className="gallery-item"><img src="/1.jpeg" alt="Gallery 1" /></div>
        <div className="gallery-item"><img src="/2.jpeg" alt="Gallery 2" /></div>
        <div className="gallery-item"><img src="/4.jpeg" alt="Gallery 3" /></div>
        <div className="gallery-item"><img src="/5.jpeg" alt="Gallery 4" /></div>
      </div>
    </section>
  );
}

export default Gallery;
