import wave2 from "../assets/wave.png";
import portrait from "../assets/portrait.jpg";
import fpvideo from "../assets/fpvideo.mp4";
import HandUp from "./HandUp";

export default function Frontpage() {
  return (
    <>
      <HandUp />
      <div className="section" id="frontpage">
        <div id="video-container">
          <video src={fpvideo} autoPlay muted loop playsInline></video>
        </div>
        <div id="fp-content">
          <div>
            <h1>Dav</h1>
            <img src={wave2} alt="vinkende hånd" />
          </div>
          <p>Mit navn er Christoffer. Jeg brænder for at designe og udvikle moderne løsninger der forener æstetik og funktionalitet. Jeg håber at vi kan skabe noget sammen.</p>
          <div id="logos">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-square-js"></i>
            <i className="fa-brands fa-react"></i>
          </div>
        </div>
        <img src={portrait} id="portrait" alt="billede af Christoffer" />
      </div>
      <div id="scrollDown">
        <p>Scroll videre</p>
        <i className="fa-solid fa-angles-down"></i>
      </div>
    </>
  );
}
