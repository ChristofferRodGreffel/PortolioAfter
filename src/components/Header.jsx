import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <a href="#projects">Projekter</a>
        <a href="#about">Om mig</a>
        <a href="#contact" id="contactBtn">
          Kontakt
        </a>
      </nav>
    </header>
  );
}
