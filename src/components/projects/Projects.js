import React from "react";
import "./Projects.css";
import ArabiFood from "../../assets/images/ArabiFood.png";
import TreasureHuntGame from "../../assets/images/TreasureHuntGame.png";
import TooDo from "../../assets/images/TooDo.png";
import Weather from "../../assets/images/Weather-App.png";
import PicturesSlider from "../../assets/images/PicturesSlider.png";
import ChristmasGame from "../../assets/images/ChristmasGame.png";

function Projects() {
  const seeMoreProjectsHandler = () => {
    console.log("See More Projects");
  };

  return (
    <section id="projects">
      <h2 className="projectsTitle"> My Projects</h2>
      {/*       <span className="projectDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        itaque ex illo magni voluptatum dolorem commodi. Atque possimus tenetur
        nobis pariatur impedit exercitationem a, et iure. Nam animi voluptas
        explicabo!
      </span>
       */}
      <div className="projectsImags">
        <div>
          <img src={ArabiFood} className="projectImg" alt="ArabiFood" />
          <h3> Arabi Food Restaurant</h3>
        </div>{" "}
        <div>
          <img src={TreasureHuntGame} className="projectImg" alt="TreasureHunt" />
          <h3> Treasure Hunt Game for children</h3>
        </div>
 
        <div>
          <img src={TooDo} className="projectImg" alt="ToDo" />
          <h3> ToDo List</h3>
        </div>{" "}

        <div>
          <img src={Weather} className="projectImg" alt="WeatherApp" />
          <h3> A Weather app</h3>
        </div>{" "}

        <div>
          <img src={PicturesSlider} className="projectImg" alt="PicturesSlider" />
          <h3> Pictures Slider </h3>
        </div>

        <div>
          <img src={ChristmasGame} className="projectImg" alt="ChristmasGame" />
          <h3>Christmas Game</h3>
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
      <button className="projectsBtn" onClick={seeMoreProjectsHandler}>
        See More
      </button>
    </section>
  );
}
export default Projects;
