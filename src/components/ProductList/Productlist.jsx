import React from "react";
import "./productlist.css";
import Product from "../Product/Product";
import Portfolio from "../../images/Home.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A React-driven digital showcase that unveils my story through engaging sections, from the captivating 'Intro' to the narrative-rich 'About' and skillful 'Skills' display.",
    features: [
      "React-based",
      "Responsive Design",
      "Project Gallery",
      "Contact Section",
    ],
    image: Portfolio,
    repo: "https://github.com/mohitzaveri/React-Portfolio",
  },
];

export default function ProductList() {
  return (
    <section id="Projects" className="pl">
      <h2 className="pl-title">Project Gallery</h2>
      <p className="pl-desc">
        Embark on a journey through my project gallery as we explore and
        discover the diverse range of creations that showcase my skills and
        passion—let's walk through projects together.
      </p>
      <div className="pl-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`pl-item ${
              index % 2 === 0 ? "pl-item-left" : "pl-item-right"
            }`}
          >
            <div className="pl-item-content">
              <h3 className="pl-item-title">{project.title}</h3>
              <p className="pl-item-desc">{project.description}</p>
              <ul className="pl-item-features">
                {project.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-item-link"
              >
                View on GitHub
              </a>
            </div>
            <div className="pl-item-image">
              <Product image={project.image} GithubRepo={project.repo} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
