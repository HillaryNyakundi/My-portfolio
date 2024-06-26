import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ic0glmi",
      "template_44qu0g9",
      form.current,
      "DsJ5grcCywXRQl9AZ"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className=" contact__option">
            <FaTwitter className="contact__option-icon" />
            <h4>X</h4>
            {/* <h5>@bcryptidd</h5> */}
            <a href="https://x.com/nyakundi_66" target="_blank">
              Send a message
            </a>
          </article>

          <article className=" contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4></h4>
            <h5>Mail me</h5>
            <a href="mailto:hillarynyakundi66@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className=" contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Text</h4>
            <h5></h5>
            <a href="https://wa.me/+254741467228" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail} method="post">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
