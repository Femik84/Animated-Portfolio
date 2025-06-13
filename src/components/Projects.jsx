import React from "react";

const projects = [
  {
    id: "projectVideo1",
    title: "Animated",
    highlight: "Gaming",
    description:
      "An interactive animated gaming website featuring smooth transitions, dynamic visuals, and immersive user experience—designed to engage, entertain, and showcase modern frontend creativity.",
    video: "/videos/project1.mp4",
    hasHover: true,
  },
  {
    id: "projectVideo2",
    title: "Modern",
    highlight: "Portfolio",
    description:
      "A sleek, modern portfolio website showcasing my skills, projects, and contact info with responsive design, animations, and seamless user experience.",
    video: "/videos/project2.mp4",
    hasHover: false,
  },
  {
    id: "projectVideo3",
    title: "Movie",
    highlight: "Landing",
    description:
      "A sleek Movie Landing Website showcasing latest films with trailers, ratings, and responsive design for an engaging, cinematic user experience.",
    video: "/videos/project3.mp4",
    hasHover: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-project">
      <h1 className="section-title autoDisplay">My Projects</h1>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-vidbox autoBlur">
            <video
              loop
              muted
              playsInline
              autoPlay
              id={project.id}
              src={project.video}
            ></video>
            {project.hasHover && <div className="hover-sign"></div>}
          </div>

          <div className="project-info fadein-left">
            <h1>
              {project.title}{" "}
              <span className="gradient">{project.highlight}</span> Website
            </h1>
            <p>{project.description}</p>
            <button>
              <i className="bx bx-link-external"></i> Website
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
