import Header from "./components/Header";
import Frontpage from "./components/Frontpage";
import Projects from "./components/Projects";
import About from "./components/About";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Frontpage />
      <Projects />
      <About />
    </div>
  );
}
