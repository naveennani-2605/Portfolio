import { useEffect, useRef, useState } from "react";
import "./Home.css";

function Home() {
  const canvasRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHoveringHome, setIsHoveringHome] = useState(false);

  useEffect(() => {
    // 1. Mouse Tracking for Center Dot
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Canvas setup
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let targetMouse = { x: width / 2, y: height / 2 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 2. Neural Node / Spiderweb Network
    const particles = [];
    const numParticles = 90; // Density of the web

    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 2 + 1
        });
    }

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < numParticles; i++) {
        let p1 = particles[i];
        
        // Drifting physics
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce off walls smoothly to keep them inside view
        if (p1.x <= 0 || p1.x >= width) p1.vx *= -1;
        if (p1.y <= 0 || p1.y >= height) p1.vy *= -1;

        // Draw particle dot itself
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(17, 17, 17, 0.4)";
        ctx.fill();

        // Connect to other particles to form the web
        for (let j = i + 1; j < numParticles; j++) {
            let p2 = particles[j];
            let dx = p1.x - p2.x;
            let dy = p1.y - p2.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            // Connect if close enough
            if (dist < 130) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(17, 17, 17, ${0.15 * (1 - dist / 130)})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }
        }

        // Mouse Interaction
        let mdx = targetMouse.x - p1.x;
        let mdy = targetMouse.y - p1.y;
        let mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        // Connect line to mouse
        if (mDist < 200) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(targetMouse.x, targetMouse.y);
            ctx.strokeStyle = `rgba(17, 17, 17, ${0.25 * (1 - mDist / 200)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Repel logic! If mouse gets too close, gently push nodes away
            if (mDist < 100) {
                p1.x -= (mdx / mDist) * 1.5;
                p1.y -= (mdy / mDist) * 1.5;
            }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="home" 
      id="home"
      onMouseEnter={() => setIsHoveringHome(true)}
      onMouseLeave={() => setIsHoveringHome(false)}
    >
      
      {/* Background Particle Canvas */}
      <canvas ref={canvasRef} className={`home-canvas ${isHoveringHome ? 'visible' : ''}`}></canvas>

      {/* Center Tracker Dot */}
      <div 
        ref={cursorDotRef} 
        className={`custom-cursor-dot ${isHoveringHome ? 'visible' : ''}`}
      ></div>

      <div className="home-content-wrapper">
        <h1 className="home-title">
          Hi, I'm <span>Naveen</span> 👋 <br />
          MERN Stack Developer
        </h1>

        <p className="home-text">
          I design and develop modern, responsive, and high-performance web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). Passionate about building scalable backends and clean, user-friendly interfaces.
        </p>

        <div className="home-buttons">
          <div className="projects-btn"><a href="#projects">View Projects</a></div>
          <div className="explore-btn"><a href="#about">Explore More</a></div>
        </div>
      </div>

    </div>
  );
}

export default Home;