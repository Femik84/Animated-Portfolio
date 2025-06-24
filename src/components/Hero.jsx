import React, { useState, useEffect } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  function smoothScrollTo(target) {
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const startY = window.scrollY;
    const duration = 500; // ms
    let startTime = null;

    function scroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(
        timeElapsed,
        startY,
        targetY - startY,
        duration
      );
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(scroll);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      return t < 1 ? (c / 2) * t * t + b : (-c / 2) * (--t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scroll);
  }

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 700);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? (
    // -------- MOBILE VERSION (Below 700px) --------
    <>
      <video
        className="skills-video2 autoBlur "
        autoPlay
        loop
        muted
        playsInline
        src="/videos/hero.mp4"
      ></video>

      <div
        className="hero-info2 autoBlur"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="hero-info-title rounded-title">
          <i className="bx bxl-sketch"></i> FullStack Developer
        </div>

        <h1 data-aos="fade-right" data-aos-duration="3000">
          Designing <span className="gradient">Ideas</span> <br />
          Developing <span className="gradient"> Impact</span>
        </h1>

        <p>
          I'm a Full-stack developer crafting intuitive web experiences with
          modern technologies like React, Next.js, Tailwind CSS, Django, and
          PostgreSQL.
        </p>

        <div className="handler">
          <button
            onClick={() => {
              setTimeout(() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }, 100); // delay ensures DOM is ready
            }}
          >
            <i className="bx bx-send"></i> Contact Me
          </button>
        </div>
      </div>
    </>
  ) : (
    // -------- DESKTOP VERSION (700px and above) --------
    <section className="hero">
      <div
        className="hero-info autoBlur"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="hero-info-title rounded-title">
          <i className="bx bxl-sketch"></i> FullStack Developer
        </div>

        <h1 data-aos="fade-right" data-aos-duration="3000">
          Designing <span className="gradient">Ideas</span> Developing{" "}
          <span className="gradient">Impact</span>
        </h1>

        <p>
          I'm Femi, a Full-stack developer crafting intuitive web experiences with
          modern technologies — React, Next.js, Tailwind CSS, Django, and
          PostgreSQL.
        </p>

        <button
          onClick={() => {
            setTimeout(() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }, 100); // delay ensures DOM is ready
          }}
        >
          <i className="bx bx-send"></i> Contact Me
        </button>
      </div>
      <div className="skills-video-box">
        <video
          className="skills-video autoBlur"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/hero.mp4"
        ></video>
      </div>
      <div
        className="scroll-down2"
        onClick={() => {
          const target = document.getElementById("about");
          if (target) smoothScrollTo(target); // use your custom scroll
        }}
      ></div>{" "}
    </section>
  );
}
