import { Routes, Route } from "react-router-dom";
import "./App.css";

// eslint-disable-next-line no-unused-vars
// import FileManager from "./components/FIleManager";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Home from "./components/Home";

// import About from "./components/About";
// import Projects from "./components/Projects";
// import "https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap";

// import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="relative">
      <h1 className="hidden">
        Joel J George Software engineer software architect job sde Software
        developer MACE full stack developer front end developer linkedin github
        Desktop apps backend{" "}
      </h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/connect" element={<Connect />}></Route>
      </Routes>
    </div>
  );
}

export default App;
