export default function Contact() {
  return (
    <div className="section" id="contact-component">
      <form id="contact-form">
        <p>Lyst til at arbejde sammen med mig? Skriv til mig før din nabo gør det!</p>
        <input type="hidden" name="contact_number" required />
        <label>Navn</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Besked</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send Besked" id="form-submit" />
      </form>
      <div id="contact-other">
        <h3>Psst... Jeg kan også kontakes her:</h3>
        <div id="contact-item-container">
          <a href="https://www.linkedin.com/in/christoffer-rod-greffel" target="_blank" rel="noopener noreferrer" className="contact-item">
            <i className="fa-brands fa-linkedin"></i>
            <p>Christoffer-Rod-Greffel</p>
          </a>
          <a href="tel:+4529805516" rel="noopener noreferrer" className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <p>29 80 55 16</p>
          </a>
          <a href="mailto:chrisrgweb@outlook.com" target="_blank" rel="noopener noreferrer" className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <p>chrisrgweb@outlook.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}
