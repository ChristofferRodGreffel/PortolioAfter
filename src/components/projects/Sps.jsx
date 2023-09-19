import spslogo from "../../assets/projects/spslogo.svg";
import spspresent from "../../assets/projects/spspresent.png";
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
            Dette projekt udsprang af manglen på kreativitet når man skal sammensætte en ugeplan for aftensmad. <br />
            <br />
            Det er en SPA, som er lavet til at udfordre mine JavaScript evner. Retter og ingredienser er genereret af ChatGPT.
          </p>
        </div>
        <div>
          <div className="c-logos">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-square-js"></i>
          </div>
          <div className="c-live">
            <a href="https://chrisrg.dk/weekdish/" target="_blank">
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
