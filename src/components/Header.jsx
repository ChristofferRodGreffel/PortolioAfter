import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <a href="#">Projekter</a>
        <a href="#">Om mig</a>
        <a href="#" id="contact">
          Kontakt
        </a>
      </nav>
    </header>
  );
}
