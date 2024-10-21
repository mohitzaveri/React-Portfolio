import React, { useState } from "react";
import "../Navbar/navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="navbar" id="navbar">
      <div className="navbar-brand" onClick={reloadPage}>
        Mohit.dev
      </div>
      <div className={`nav-list ${isNavOpen ? "show" : ""}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="navbar-close"
          onClick={toggleNav}
        />
        <Link
          className="item"
          to="About"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={toggleNav}
        >
          About
        </Link>
        <Link
          className="item"
          to="Experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={toggleNav}
        >
          Experience
        </Link>
        <Link
          className="item"
          to="Skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={toggleNav}
        >
          Skills
        </Link>
        <Link
          className="item"
          to="Projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={toggleNav}
        >
          Project Gallery
        </Link>
        <Link
          className="item"
          to="Contact"
          spy={true}
          smooth={true}
          offset={40}
          duration={500}
          onClick={toggleNav}
        >
          Contact
        </Link>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="navbar-toggle"
        onClick={toggleNav}
      />
    </div>
  );
}
