import { useRef } from "react";
import emailjs from "@emailjs/browser";
import spinner from "../assets/spinner.gif";
import coffee from "../assets/coffee.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const spinner = document.getElementById("spinner");
    spinner.style.display = "flex";

    const successMessage = document.getElementById("success");

    emailjs.sendForm("contact_service", "contact_form", form.current, "4715MOxle-wL5kQlH").then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        spinner.style.display = "none";
        successMessage.style.display = "flex";
        setTimeout(() => {
          successMessage.style.display = "none";
        }, "3000");
      },
      (error) => {
        console.log(error.text);
        spinner.style.display = "none";
      }
    );
  };

  return (
    <div className="section" id="contact-component">
      <div id="form-container">
        <h1>
          Skal vi tage en kop? <img src={coffee} alt="kaffekop" />
        </h1>
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" required />
          <label>Navn</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Besked</label>
          <textarea name="message"></textarea>
          <input type="submit" value="Send Besked" id="form-submit" />
          <img src={spinner} alt="spinner" id="spinner" />
          <p id="success">
            Din besked er sendt <i className="fa-solid fa-check"></i>
          </p>
        </form>
      </div>
      <div id="contact-other">
        <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
          <h3>Psst... Jeg kan også kontakes her:</h3>
        </ScrollAnimation>
        <div id="contact-item-container">
          <ScrollAnimation animateIn="fadeInDown" animateOnce={true} offset={100}>
            <a href="https://www.linkedin.com/in/christoffer-rod-greffel" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fa-brands fa-linkedin"></i>
              <p>Christoffer-Rod-Greffel</p>
            </a>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInDown" animateOnce={true} offset={100}>
            <a href="tel:+4529805516" rel="noopener noreferrer" className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <p>29 80 55 16</p>
            </a>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInDown" animateOnce={true} offset={100}>
            <a href="mailto:chrisrgweb@outlook.com" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <p>chrisrgweb@outlook.com</p>
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
