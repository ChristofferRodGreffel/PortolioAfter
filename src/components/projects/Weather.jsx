import weatherlogo from "../../assets/projects/weatherlogo.svg";
import weatherpresent from "../../assets/projects/weatherpresent.png";
import ReturnButton from "../ReturnButton";

export default function WeekDish() {
  return (
    <>
      <div className="c-window" style={{ backgroundColor: "#ffffff" }}>
        <ReturnButton />
        <img src={weatherlogo} alt="project logo" className="project-logo" />
        <img src={weatherpresent} alt="project presentation" className="project-present" />
      </div>
      <div className="c-desc">
        <div>
          <h2>Kort om projektet</h2>
          <p>
            Dette fritidsprojekt har jeg lavet, som mit første <b>React</b> projekt. Formålet er at teste min viden i praksis. Samtidig er projektet med til at udvikle min evner til at arbejde med
            API'er.
            <br />
            Alt data bliver hentet fra{" "}
            <a href="https://openweathermap.org/api" target="_blank" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
              OpenWeatherApi
            </a>
            {"."} <br />
            <br /> (Projektet er fortsat under udvikling)
          </p>
        </div>
        <div>
          <div className="c-logos">
            <i className="fa-brands fa-html5" content="HTML"></i>
            <i className="fa-brands fa-css3-alt" content="CSS"></i>
            <i className="fa-brands fa-square-js" content="JS"></i>
            <i className="fa-brands fa-react" content="REACT"></i>
          </div>
          <div className="c-live">
            <a href="https://chrisrg.dk/weather/" target="_blank">
              Live Site
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
