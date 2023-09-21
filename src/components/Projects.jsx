import { useEffect, useState } from "react";
import AnnaRod from "./projects/AnnaRod";
import WeekDish from "./projects/WeekDish";
import Sps from "./projects/Sps";
import Weather from "./projects/Weather";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const checkMobile = () => {
  if (window.innerWidth > 930) {
    return "project1";
  } else {
    return "";
  }
};

const setMargin = () => {
  const menuHeight = document.querySelector("#c-left").clientHeight;
  const projectHeight = document.querySelector("#c-right").clientHeight;
  const content = document.querySelector("#content");

  if (projectHeight > menuHeight) {
    const correctMargin = projectHeight - menuHeight + 50;
    content.style.marginBottom = `${correctMargin}px`;
  }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(checkMobile());

  let contentToDisplay = null;

  switch (selectedProject) {
    case "project1":
      contentToDisplay = <AnnaRod />;
      break;
    case "project2":
      contentToDisplay = <WeekDish />;
      break;
    case "project3":
      contentToDisplay = <Sps />;
      break;
    case "project4":
      contentToDisplay = <Weather />;
      break;
    default:
      contentToDisplay = <h1>This project is coming soon. Hang in tight!</h1>;
  }

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);

    const viewportWidth = window.innerWidth;
    const menu = document.querySelector("#c-left");
    const project = document.querySelector("#c-right");
    const content = document.querySelector("#content");

    if (viewportWidth < 930) {
      menu.style.transform = "translateX(-100%)";
      project.style.transform = "translateX(0)";
      content.style.overflow = "visible";
    }

    setMargin();
  };

  useEffect(() => {
    setMargin();
  });

  return (
    <div className="section" id="content">
      <div id="c-left">
        <div id="c-left-container">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <div onClick={() => handleProjectClick("project1")} className="project-name">
              <h2>Kunstgalleri</h2>
              <div className="c-left-below">
                <div className="color-rect one"></div>
                <p>Hjemmeside til kunster Anna Rod</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <div onClick={() => handleProjectClick("project2")} className="project-name">
              <h2>WeekDish</h2>
              <div className="c-left-below">
                <div className="color-rect two"></div>
                <p>Nem planlægning af mad</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <div onClick={() => handleProjectClick("project3")} className="project-name">
              <h2>Rideklubben</h2>
              <div className="c-left-below">
                <div className="color-rect three"></div>
                <p>Sportsrideklubben Silkeborg</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <div onClick={() => handleProjectClick("project4")} className="project-name">
              <h2>WeahterApp</h2>
              <div className="c-left-below">
                <div className="color-rect four"></div>
                <p>Oplevelseshjemmeside</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div id="c-right">{contentToDisplay}</div>
    </div>
  );
}
