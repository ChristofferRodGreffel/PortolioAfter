import signature from "../../assets/projects/signature.svg";
import annarodpresent from "../../assets/projects/annarodpresent.png";

export default function AnnaRod() {
  return (
    <>
      <div className="c-window" style={{ backgroundColor: "#F2F1E5" }}>
        <img src={signature} alt="project logo" className="project-logo" />
        <img src={annarodpresent} alt="project presentation" className="project-present" />
      </div>
      <div className="c-desc">
        <div>
          <h2>Om projektet</h2>
          <p>
            I dette projekt, som er et kunstgalleri, har jeg tilegnet mig stor viden omkring brugen af JavaScript. <br />
            <br /> Samtidig har der været en større opgave i at designe galleriet og opsætningen deraf.
          </p>
        </div>
        <div>
          <div className="c-logos">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-square-js"></i>
          </div>
          <div className="c-live">
            <button>Live Site</button>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </>
  );
}
