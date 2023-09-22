import spslogo from "../../assets/projects/spslogo.svg";
import spspresent from "../../assets/projects/spspresent.png";
import splidejs from "../../assets/splidejs.png";
import ReturnButton from "../ReturnButton";

export default function Sps() {
  return (
    <>
      <div className="c-window" style={{ backgroundColor: "#fdf7f0" }}>
        <ReturnButton />
        <img src={spslogo} alt="project logo" className="project-logo" />
        <img src={spspresent} alt="project presentation" className="project-present" />
      </div>
      <div className="c-desc">
        <div>
          <h2>Kort om projektet</h2>
          <p>
            Dette eksamensprojekt på 2. semester er en komplet rebranding af Sportsrideklubben Silkeborg. <br />
            <br />
            Der er brugt meget tid på at designe en ny visuel identitet og samtidig er der brugt{" "}
            <a href="https://splidejs.com/" target="_blank" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
              SplideJS
            </a>{" "}
            til at opsætte eventkortene på forsiden.
          </p>
        </div>
        <div>
          <div className="c-logos">
            <i className="fa-brands fa-html5" content="HTML"></i>
            <i className="fa-brands fa-css3-alt" content="CSS"></i>
            <i className="fa-brands fa-square-js" content="JS"></i>
          </div>
          <div className="c-live">
            <a href="https://chrisrg.dk/sps/" target="_blank">
              Live Site
            </a>
            <a href="https://github.com/ChristofferRodGreffel/SPS.git" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
