import React, { useRef, useEffect, useState } from "react";

export default function Header() {
  const sidebarRef = useRef(null);
  const headerRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const openSidebar = () => {
    sidebarRef.current.classList.remove("close-sidebar");
    sidebarRef.current.classList.add("open-sidebar");
  };

  const closeSidebar = () => {
    sidebarRef.current.classList.remove("open-sidebar");
    sidebarRef.current.classList.add("close-sidebar");
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (headerRef.current) {
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        headerRef.current.classList.add("header-hide");
      } else {
        headerRef.current.classList.remove("header-hide");
      }
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        ref={headerRef}
        className="header"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="left">
  <h2 
    style={{
      fontFamily: `'Brush Script MT', 'Lucida Handwriting', cursive`,
      fontSize: "2.4rem",
      fontWeight: "normal",
      color: "white",
      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
      margin: 0,
      letterSpacing: "1px",
    }}
  >Femi
    <span className= "gradient" style={{ color: "#72a1dea2", fontWeight: "bold" }}>Script</span>
  </h2>
</div>


        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>



        <div className="box-icons">
          <a
            href="https://github.com/Femik84"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <p>
              <i className="bx bxl-github"></i>
            </p>
          </a>
          <a
            href="https://wa.me/2347051342759"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <i className="bx bxl-whatsapp"></i>
            </p>
          </a>
          <a
            href="https://twitter.com/Mr_Fe_mi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <i className="bx bxl-twitter"></i>
            </p>
          </a>
        </div>

        <div className="menu-icon" onClick={openSidebar}>
          <i className="bx bx-menu"></i>
        </div>
      </header>

      <div ref={sidebarRef} className="sidebar close-sidebar">
        <div className="close-icon" onClick={closeSidebar}>
          <i className="bx bx-x"></i>
        </div>

        <ul>
          <li>
            <a href="#" onClick={closeSidebar}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeSidebar}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeSidebar}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeSidebar}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeSidebar}>
              Contact
            </a>
          </li>
        </ul>





        <div className="social-sidebar">
          <a
            href="https://github.com/Femik84"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://wa.me/2347051342759"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://twitter.com/Mr_Fe_mi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
}
