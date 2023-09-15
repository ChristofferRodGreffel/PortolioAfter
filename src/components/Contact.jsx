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
        <div>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-solid fa-phone"></i>
          <i className="fa-solid fa-envelope"></i>
        </div>
      </div>
    </div>
  );
}
