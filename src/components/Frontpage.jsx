import wave from "../assets/wave.svg";
import portrait from "../assets/portrait.jpg";
import fpvideo from "../assets/fpvideo.mp4";

export default function Frontpage() {
  return (
    <>
      <div className="section" id="frontpage">
        <div id="video-container">
          <video src={fpvideo} autoPlay muted loop></video>
        </div>
        <div id="fp-content">
          <div>
            <h1>Dav</h1>
            <img src={wave} alt="vinkende hånd" />
          </div>
          <p>Mit navn er Christoffer. Jeg brænder for at designe og kode moderne og visuelt æstetiske løsninger. Jeg håber, at jeg må kode for dig.</p>
          <div id="logos">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-square-js"></i>
            <i className="fa-brands fa-react"></i>
          </div>
        </div>
        <img src={portrait} id="portrait" alt="billede af Christoffer" />
      </div>
    </>
  );
}
