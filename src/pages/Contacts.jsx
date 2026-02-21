import React from "react";
import "../App.css";
import ContactForm from "./ContactForm";

function Contacts() {
  return (
    <section className="section-contact section-menu" id="contact">
      <div className="section-contact__info">
        <h1 className="section-title">
          Contact <span> Us</span>
        </h1>
        <p className="section-desc">
          Kabutare is located in Huye South District, Rwanda. You can reach us
          through the following contacts: 0788840076 or visit our social media pages.
        </p>

        <div className="section-contact__info-items">
          <div className="section-contact__info-item">
            <div className="section-contact__info-item-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <a className="section-contact__info-item-link" href="#map">
             EAV Kabutare Street, Huye South, Rwanda
            </a>
          </div>

          <div className="section-contact__info-item">
            <div className="section-contact__info-item-icon">
              <i className="fa-brands fa-square-instagram"></i>
            </div>
            <a className="section-contact__info-item-link" href="#insta">
              @kabutare_username
            </a>
          </div>

          <div className="section-contact__info-item">
            <div className="section-contact__info-item-icon">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <a className="section-contact__info-item-link" href="#fb">
              Kabutare
            </a>
          </div>
        </div>
      </div>
      {/* Contact Form Section 
      <form className="section-about__form" action="#" onSubmit={(e) => e.preventDefault()}>
        <input type="text" className="text-field" placeholder="Your name" />
        <input type="email" className="text-field" placeholder="Your Email" />
        <input type="tel" className="text-field" placeholder="Your phone" />
        <textarea
          className="text-field text-field--textarea"
          placeholder="your message"
          rows="5"
        ></textarea>
        <button className="section-contact__form-button secondary-button">
          Send message
        </button>
      </form>*/}
      <ContactForm />
      {/* Map Section */}
<div className="section-contact__map">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.7350731631525!2d29.73468577416757!3d-2.511354397471239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19df163836104443%3A0x6b42b93e4303108d!2sEAV%20Kabutare!5e0!3m2!1sen!2srw!4v1709123456789!5m2!1sen!2srw" 
    width="100%" 
    height="450" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      
    </section>
  );
}

export default Contacts;