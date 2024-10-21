import React from "react";
import "./skills.css";
import {
  faCode,
  faDatabase,
  faGlobe,
  faScrewdriverWrench,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skillCategories = [
  {
    icon: faGlobe,
    title: "Web Technologies",
    skills: [
      "ReactJS",
      "Express.js",
      "Node.js",
      "Redux",
      "Tailwind CSS",
      "Sass",
      "Flask",
    ],
  },
  {
    icon: faCode,
    title: "Programming Languages",
    skills: ["Javascript", "Java", "Python", "SQL"],
  },
  {
    icon: faDatabase,
    title: "Database Systems",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    icon: faVial,
    title: "Testing Tools",
    skills: ["Junit", "Mockito", "AssertJ", "Selenium"],
  },
  {
    icon: faScrewdriverWrench,
    title: "Development Tools",
    skills: [
      "NPM",
      "Yarn",
      "Ajax",
      "Jira",
      "Scrum",
      "Maven",
      "Docker",
      "GitHub",
      "IntelliJ",
    ],
  },
];

export default function Skills() {
  return (
    <section id="Skills" className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <FontAwesomeIcon icon={category.icon} className="skill-icon" />
            <h3 className="skill-title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
