import { useState } from "react";
import AnnaRod from "./projects/AnnaRod";
import WeekDish from "./projects/WeekDish";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState("project1");

  let contentToDisplay = null;

  switch (selectedProject) {
    case "project1":
      contentToDisplay = <AnnaRod />;
      break;
    case "project2":
      contentToDisplay = <WeekDish />;
      break;
    default:
      contentToDisplay = <p>Select a project to view its details.</p>;
  }

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };
  return (
    <div className="section" id="content">
      <div id="c-left">
        <div id="c-left-container">
          <div onClick={() => handleProjectClick("project1")} className="project-name">
            <h2>Kunstgalleri</h2>
            <div className="c-left-below">
              <div className="color-rect one"></div>
              <p>Hjemmeside til kunster Anna Rod</p>
            </div>
          </div>
          <div onClick={() => handleProjectClick("project2")} className="project-name">
            <h2>WeekDish</h2>
            <div className="c-left-below">
              <div className="color-rect two"></div>
              <p>Nem planlægning af mad</p>
            </div>
          </div>
          <div onClick={() => handleProjectClick("project3")} className="project-name">
            <h2>WeatherApp</h2>
            <div className="c-left-below">
              <div className="color-rect three"></div>
              <p>Vejret i din by</p>
            </div>
          </div>
          <div onClick={() => handleProjectClick("project4")} className="project-name">
            <h2>Tuborg Squash</h2>
            <div className="c-left-below">
              <div className="color-rect four"></div>
              <p>Oplevelseshjemmeside</p>
            </div>
          </div>
        </div>
      </div>
      <div id="c-right">{contentToDisplay}</div>
    </div>
  );
}
