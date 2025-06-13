import React from "react";

export default function InfoSection() {
  return (
    <section id="about" className="info-section">
      <h1 className="section-title autoDisplay">Hello there!</h1>

      <div className="info-cards">
        {/* Card 1 */}
        <div className="card">
          <h1>Hi there, I'm Femi</h1>
          <p>
            With 2 years of experience, I have honed my skills in both frontend
            and backend development, creating dynamic and responsive websites.
          </p>
          <img src="/images/grid1.png" alt="Developer Illustration" />
        </div>

        {/* Card 2 */}
        <div className="card">
          <h1>Tech Stack</h1>
          <p>
            I specialize in a variety of languages, frameworks, and tools that
            allow me to build robust and scalable applications.
          </p>
          <img src="/images/grid2.png" alt="Tech Stack" />
        </div>

        {/* Card 3 */}
        <div className="card">
          <h1>I’m very flexible with time zone communications & locations</h1>
          <p>I'm based in Lagos, Nigeria and open to remote work worldwide.</p>
          <video
            src="/videos/glob.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="info-video"
          />

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

        {/* Card 4 */}
        <div className="card">
          <h1>My Passion for Coding</h1>
          <p>
            I love solving problems and building things through code.
            Programming isn't just my profession, it's my passion. I enjoy
            exploring new technologies and enhancing my skills.
          </p>
          <img src="/images/grid4.png" alt="Coding Passion" />
        </div>
      </div>
    </section>
  );
}
