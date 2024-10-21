import React from "react";
import "./about.css";
import about from "../../images/about.png";

export default function About() {
  return (
    <section id="About" className="a">
      <div className="a-container">
        <div className="a-left">
          <div className="a-image-container">
            <img src={about} alt="Mohit Zaveri" className="a-img" />
          </div>
        </div>

        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            Seasoned Software Engineer | Full-Stack Developer
          </p>
          <div className="a-desc">
            <p>
              Hello! I'm Mohit Zaveri, a passionate software engineer with a
              knack for solving complex problems and creating impactful
              solutions. Currently, I'm working as a Software Engineer at{" "}
              <strong>Global Cloud Solution</strong>, where I lead the
              development of cutting-edge web applications.
            </p>
            <p>
              With a strong foundation in back-end development and growing
              expertise in full-stack technologies, I thrive in dynamic
              environments that challenge me to continuously learn and innovate.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee while brainstorming my next big idea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
