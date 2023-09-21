import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function ProjectLink(props) {
  return (
    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
      <div onClick={() => props.handleProjectClick(props.projectId)} className="project-name">
        <h2>{props.title}</h2>
        <div className="c-left-below">
          <div className={props.color}></div>
          <p>{props.description}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
}
