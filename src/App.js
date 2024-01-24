import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="bg-white body-font text-gray-900">
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
