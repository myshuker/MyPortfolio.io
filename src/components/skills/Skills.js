import React from "react";
import "./Skills.css";
import html from "../../assets/images/html.png";
import reactjs from "../../assets/images/reactjs.png";
import nodejs from "../../assets/images/nodejs.png";
import mysql from "../../assets/images/mysql.png";
import nextjs from "../../assets/images/nextjs.png";

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">Skills</span>
      <div className="skillCards">
        <div className="skillCard">
          <img src={html} alt="html_img" className="skillCardImg" />
          <div className="skillCardText">
            <h2>HTML, CSS & JAVASCRIPT</h2>
          </div>
        </div>
        <div className="skillCard">
          <img src={reactjs} alt="reactjs_img" className="skillCardImg" />
          <div className="skillCardText">
            <h2>REACT.JS</h2>
          </div>
        </div>
        <div className="skillCard">
          <img src={nodejs} alt="nodejs_img" className="skillCardImg" />
          <div className="skillCardText">
            <h2> NODE.JS</h2>
          </div>
        </div>

        <div className="skillCard">
          <img src={mysql} alt="mysql_img" className="skillCardImg" />
          <div className="skillCardText">
            <h2>MYSQL</h2>
          </div>
        </div>

        <div className="skillCard">
          <img src={nextjs} alt="mysql_img" className="skillCardImg" />
          <div className="skillCardText">
            <h2>NEXT.JS</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
