import AboutText from "./AboutText";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function About() {
  return (
    <div className="section" id="about">
      <div id="a-left">
        <p>“Jeg er så imødekommenede at jeg siger 'hej' til min kaffemaskine om morgenen”</p>
      </div>
      <div id="a-right">
        <div id="a-right-container">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <h1>Grafisk gøgler & kodeguru</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <AboutText />
          </ScrollAnimation>
          {/* <p>
            Hej, jeg er Christoffer - en 25-årig Aarhusianer, der er født og opvokset i den lille perle Hasselager. Jeg har en passion for at kombinere det kreative med det tekniske. Mit hjerte banker
            for frontenduvikling og design, og jeg elsker at tage mine vildeste idéer og kode dem til virkelighed. <br />
            <br />
            Som UI-designer er min mission at skabe digitale verdener, der både ser fantastiske ud og fungerer gnidningsfrit. Jeg tror på, at godt design kan ændre måden, vi oplever verden på, og det
            er det, der driver mig hver dag. <br />
            <br />
            Når jeg ikke sidder foran skærmen, kan du finde mig på vejen - bogstaveligt talt! Jeg er en stor fan af motorsport og elsker at tage min motorcykel ud på eventyr. Der er noget magisk ved
            at “føle vinden i håret” og suse afsted på to hjul. <br />
            <br />
            Jeg er også kendt for min imødekommende natur og evne til at samarbejde. Jeg tror på styrken i at arbejde sammen som et hold og er altid klar til at lære noget nyt.{" "}
          </p> */}
        </div>
      </div>
    </div>
  );
}
