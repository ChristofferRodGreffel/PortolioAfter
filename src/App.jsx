import Header from "./components/Header";
import Frontpage from "./components/Frontpage";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Frontpage />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
