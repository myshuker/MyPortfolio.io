import Navbar from "./components/navBar/Navbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
