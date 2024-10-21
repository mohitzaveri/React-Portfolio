import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCalendarAlt,
  faMapMarkerAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./experiance.css";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Binghamton University, State University of New York, USA",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Savitribai Phule Pune University (SPPU)",
  },
];

const workExperienceData = [
  {
    title: "Full-Stack Developer",
    company: "Global Cloud Solution",
    location: "Binghamton, NY",
    period: "June 2023 - Present",
    highlights: [
      "Developed highly scalable web application for affordable housing assistance",
      "Designed multi-platform Website for live Concert",
      "Built ERP portal using Node.js, Express.js and MongoDB",
    ],
  },
  {
    title: "Software Engineer",
    company: "Infosys",
    location: "Remote",
    period: "March 2021 - July 2022",
    highlights: [
      "Designed React UI elements for Order Management System (OMS)",
      "Reengineered existing code with asynchronous programming and lazy loading",
      "Contributed to Test-Driven Development",
    ],
  },
  {
    title: "Software Engineer",
    company: "Ravikiran Engineering",
    location: "Remote",
    period: "May 2020 - March 2021",
    highlights: [
      "Developed project management tool using React, Redux, and Material-UI",
      "Engineered real-time data visualization dashboard using React and Socket.IO",
    ],
  },
];

export default function Experience() {
  return (
    <section id="Experience" className="experience">
      <h2 className="experience-title">Experience & Education</h2>
      <div className="experience-container">
        <div className="education-section">
          <h3 className="section-title">
            <FontAwesomeIcon icon={faGraduationCap} className="section-icon" />
            Education
          </h3>
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <h4 className="degree">{edu.degree}</h4>
              <p className="institution">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
        <div className="work-experience-section">
          <h3 className="section-title">
            <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
            Work Experience
          </h3>
          {workExperienceData.map((exp, index) => (
            <div key={index} className="work-experience-item">
              <h4 className="job-title">{exp.title}</h4>
              <p className="company-info">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                {exp.company} | {exp.location}
              </p>
              <p className="period">
                <FontAwesomeIcon icon={faCalendarAlt} className="info-icon" />
                {exp.period}
              </p>
              <ul className="highlights">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="highlight-icon"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
