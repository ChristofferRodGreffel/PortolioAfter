import AboutText from "./AboutText";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function About() {
  return (
    <div className="section" id="about">
      <div id="a-left">
        <p>“Jeg er så imødekommenede at jeg siger 'hej' til min kaffemaskine om morgenen”</p>
      </div>
      <div id="a-right">
        <div id="a-right-container">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <h1>Grafisk gøgler & kodeguru</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <AboutText />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
