import React from "react";
import "./Intro.css";
import bg from "../../assets/images/portfolioImg1.png";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName"> Mohammad </span> <br /> Website
          Devloper{" "}
        </span>
        <p className="introPara">
          {" "}
          I am a Junior Front-End Devloper based in Copenhagen.
          <br /> I am passionate towards building beautiful , responsive
          websites
          <br />
          and eager to adapt myself to new technologies.
        </p>
        <Link>
          {" "}
          <button
            className="btn"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hire Me{" "}
          </button>{" "}
        </Link>
      </div>
      <img src={bg} className="bg" alt="Portfolio_img" />
    </section>
  );
}

export default Intro;
