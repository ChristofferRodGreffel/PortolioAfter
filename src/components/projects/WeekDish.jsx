import weekdishlogo from "../../assets/projects/weekdishlogo.svg";
import weekdishpresent from "../../assets/projects/weekdishpresent.png";
import ReturnButton from "../ReturnButton";

export default function WeekDish() {
  return (
    <>
      <div className="c-window" style={{ backgroundColor: "#E3E6D1" }}>
        <ReturnButton />
        <img src={weekdishlogo} alt="project logo" className="project-logo" />
        <img src={weekdishpresent} alt="project presentation" className="project-present" />
      </div>
      <div className="c-desc">
        <div>
          <h2>Kort om projektet</h2>
          <p>
            Dette projekt udsprang af manglen på kreativitet når man skal sammensætte en madplan på ugebasis.
            <br />
            <br />
            Projektet har været med til at udfordre min JavaScript viden og har givet mig stor viden indenfor en række JavaScript grundsten som: arrays, objects, functions, og meget mere.
          </p>
        </div>
        <div>
          <div className="c-logos">
            <i className="fa-brands fa-html5" content="HTML"></i>
            <i className="fa-brands fa-css3-alt" content="CSS"></i>
            <i className="fa-brands fa-square-js" content="JS"></i>
          </div>
          <div className="c-live">
            <a href="https://chrisrg.dk/weekdish/" target="_blank">
              Live Site
            </a>
            <a href="https://github.com/ChristofferRodGreffel/WeekDish.git" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
