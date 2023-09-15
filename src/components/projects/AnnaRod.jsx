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
          <h2>Kort om projektet</h2>
          <p>
            I dette projekt, som er et kunstgalleri, har jeg tilegnet mig stor viden omkring brugen af JavaScript. <br />
            <br /> Jeg har eksempelvis lært at opsætte et galleri og samtidig lavet en filtreringsfuktion i galleriet. Jeg har også tilegnet med erfaring med fotografering, da alle billeder er taget
            af mig.
          </p>
        </div>
        <div>
          <div className="c-logos">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-square-js"></i>
          </div>
          <div className="c-live">
            <a href="https://annarod.dk/index.html" target="_blank">
              Live Site
            </a>
            <a href="https://github.com/ChristofferRodGreffel/AnnaRod.git" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
