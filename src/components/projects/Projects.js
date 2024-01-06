import React from "react";
import "./Projects.css";
import ArabiFood from "../../assets/images/ArabiFood.png";
import TreasureHuntGame from "../../assets/images/TreasureHuntGame.png";
import TooDo from "../../assets/images/TooDo.png";
import Weather from "../../assets/images/Weather-App.png";
import PicturesSlider from "../../assets/images/PicturesSlider.png";
import ChristmasGame from "../../assets/images/ChristmasGame.png";
import TicTacToe from "../../assets/images/TicTacToe-Game.png";

function Projects() {
  const seeMoreProjectsHandler = () => {
    console.log("See More Projects");
  };

  return (
    <section id="projects">
      <h2 className="projectsTitle"> My Projects</h2>

      <div className="projectsImags">
        <div className="projectCard">
          <img src={ChristmasGame} className="projectImg" alt="ChristmasGame" />
          <div className="projectDesc">
            <a
              href="https://github.com/myshuker/Christmas-Calendar-game"
              target="_blank"
              rel="noreferrer"
            >
              Code{" "}
            </a>{" "}
            <h3>Christmas Game</h3>
            <a
              href="https://myshuker.github.io/Christmas-Calendar-game"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </div>
        <div className="projectCard">
          <img src={TicTacToe} className="projectImg" alt="TicTacToe-Game" />
          <div className="projectDesc">
            <a
              href="https://github.com/myshuker/TicTacToe-Game"
              target="_blank"
              rel="noreferrer"
            >
              Code{" "}
            </a>{" "}
            <h3>TicTacToe-Game</h3>
            <a
              href="https://myshuker.github.io/TicTacToe-Game"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </div>
        <div className="projectCard">
          <img src={TooDo} className="projectImg" alt="ToDo" />

          <div className="projectDesc">
            <a
              href="https://github.com/myshuker/ToDoList2"
              target="_blank"
              rel="noreferrer"
            >
              Code{" "}
            </a>{" "}
            <h3> ToDo List</h3>
            <a
              href="https://myshuker.github.io/ToDoList2/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </div>{" "}
        <div className="projectCard">
          <img
            src={PicturesSlider}
            className="projectImg"
            alt="PicturesSlider"
          />
          <div className="projectDesc">
            <a
              href="https://github.com/myshuker/PicturesSlider"
              target="_blank"
              rel="noreferrer"
            >
              Code{" "}
            </a>{" "}
            <h3> Pictures Slider </h3>
            <a
              href="https://myshuker.github.io/PicturesSlider/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </div>
        <div className="projectCard">
          <img src={Weather} className="projectImg" alt="WeatherApp" />

          <div className="projectDesc">
            <a
              href="https://github.com/myshuker/Weather-App"
              target="_blank"
              rel="noreferrer"
            >
              Code{" "}
            </a>{" "}
            <h3> A Weather app</h3>
            <a
              href="https://myshuker.github.io/Weather-App/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </div>{" "}
        <div className="projectCard">
          <img src={ArabiFood} className="projectImg" alt="ArabiFood" />
          <div className="projectDesc">
            <a
              href="https://github.com/myshuker/ArabiFoodTapas"
              target="_blank"
              rel="noreferrer"
            >
              Code{" "}
            </a>

            <h3> Arabi Food Restaurant</h3>

            <a href="#" target="_blank" rel="noreferrer">
              Live
            </a>
          </div>
        </div>
        <div className="projectCard">
          <img
            src={TreasureHuntGame}
            className="projectImg"
            alt="TreasureHunt"
          />

          <div className="projectDesc">
            <a
              href="https://github.com/myshuker/Treasure-Hent-Game"
              target="_blank"
              rel="noreferrer"
            >
              Code{" "}
            </a>{" "}
            <h3> Treasure Hunt</h3>
            <a
              href="https://www.feats.co/project/treasure-hunt-game"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </div>
        {/* 

       <div>
          <img src={ProjectImg3} className="projectImg" alt="ProjectImg" />
          <h3> Cat-Cart </h3>
        </div>{" "}
        <div>
          <img src={ProjectImg6} className="projectImg" alt="ProjectImg" />
          <h3> Meal Sharing Project</h3>
        </div>
        <div>
          <img src={ProjectImg5} className="projectImg" alt="ProjectImg" />
          <h3> Github users search</h3>
        </div>{" "}
        <div>
          <img src={ProjectImg6} className="projectImg" alt="ProjectImg" />
          <h3> Giphy api</h3>
        </div>{" "}
        <div>
          <img src={ProjectImg6} className="projectImg" alt="ProjectImg" />
          <h3> Shopping cart</h3>
        </div>{" "}
        <div>
          <img src={ProjectImg6} className="projectImg" alt="ProjectImg" />
          <h3> The fastest presser</h3>
        </div>

        <div>
          <img src={ProjectImg6} className="projectImg" alt="ProjectImg" />
          <h3> shopping website</h3>
        </div>
         */}
      </div>
      {/*    <button className="projectsBtn" onClick={seeMoreProjectsHandler}>
        See More
        </button>   */}
    </section>
  );
}
export default Projects;
