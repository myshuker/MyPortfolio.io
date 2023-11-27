import React, { useState } from "react";
import "./Navbar.css";
import burgerMenu from "../../assets/images/burger_menu_icon.svg";
import resume from "../../assets/images/resume.png";
import { Link } from "react-scroll";
import myResume from "../../assets/resume/resume.pdf";

function Navbar() {
  let [showMenu, setShowMenu] = useState(false);

  let showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navMenuList">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smoth={true}
          offset={-100}
          duration={500}
          className="navMenuListList"
        >
          {" "}
          Home{" "}
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smoth={true}
          offset={-50}
          duration={500}
          className="navMenuListList"
        >
          {" "}
          Projects{" "}
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smoth={true}
          offset={0}
          duration={500}
          className="navMenuListList"
        >
          {" "}
          Skills
        </Link>
        <Link
          activeClass="active"
          to="contactPage"
          spy={true}
          smoth={true}
          duration={500}
          className="navMenuListList"
        >
          {" "}
          Contact Me{" "}
        </Link>{" "}
        <a href={myResume} target="_blank" rel="noreferrer"  className="navMenuListList">
          Resume
        </a>
      </div>

      {/*
      <button className="navResumeBtn">
        <img src={resume} className="navResumeImg" alt="Resume_img" />
        <a href={myResume} target="_blank">
          {" "}
          Download Resume
        </a>
      </button>
*/}

      {/*     ------ Mobile Responsive Mode ------     */}

      <div className="burgerIcon">
        <img
          src={burgerMenu}
          className="burgerMenu"
          alt="burgerMenu"
          onClick={showMenuHandler}
        />
        <div
          className="burgerNavMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smoth={true}
            offset={-50}
            duration={500}
            className="ListItem"
            onClick={showMenuHandler}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smoth={true}
            offset={-50}
            duration={500}
            className="ListItem"
            onClick={showMenuHandler}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smoth={true}
            offset={0}
            duration={500}
            className="ListItem"
            onClick={showMenuHandler}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smoth={true}
            offset={-50}
            duration={500}
            className="ListItem"
            onClick={showMenuHandler}
          >
            Contact
          </Link>
          <a href={myResume} target="_blank" rel="noreferrer"  className="ListItem">
          Resume
        </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
