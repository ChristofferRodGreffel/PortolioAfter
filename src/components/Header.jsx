import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <a href="#content">Projekter</a>
        <a href="#about">Om mig</a>
        <a href="#contact-component" id="contact">
          Kontakt
        </a>
      </nav>
    </header>
  );
}
