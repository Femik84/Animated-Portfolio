import React from "react";

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <h1 className="section-title autoDisplay">My Skills</h1>

      <div className="skills-box autoDisplay">
        <img
          className="skills-image"
          src="/images/digital brain (2).png"
          alt="Digital Brain"
        />

        <div className="Designer">
          <h1 className="gradient">
            Designer <i className="bx bx-laptop"></i>
          </h1>
          <p>
            I specialize in building elegant, responsive interfaces using HTML,
            CSS, React, and Next.js. Leveraging Tailwind, Bootstrap, and
            animation tools, I ensure polished, user-friendly designs that
            elevate digital experiences.
          </p>
        </div>

        <div className="coder">
          <h1 className="gradient">
            Coder <i className="bx bx-code-block"></i>
          </h1>
          <p>
            I build robust, scalable backends using Python and Django, with
            PostgreSQL for efficient data management. My solutions ensure
            security, performance, and seamless integration to support powerful
            web applications.
          </p>
        </div>

        <div
          className="slider"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": 9,
          }}
        >
          <div className="list">
            {[...Array(10)].map((_, index) => (
              <div
                className="item"
                key={index}
                style={{ "--position": index + 1 }}
              >
                <img
                  src={`/images/${index + 1}.png`}
                  alt={`Skill ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>





    </section>
  );
}





//  <div className="skills-box autoDisplay">
//         <div
//           className="slider"
//           style={{
//             "--width": "100px",
//             "--height": "100px",
//             "--quantity": 9,
//           }}
//         >
//           <div className="list">
//             {[...Array(10)].map((_, index) => (
//               <div
//                 className="item"
//                 key={index}
//                 style={{ "--position": index + 1 }}
//               >
//                 <img
//                   src={`/images/${index + 1}.png`}
//                   alt={`Skill ${index + 1}`}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>