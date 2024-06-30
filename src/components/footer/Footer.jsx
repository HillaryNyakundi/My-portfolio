import React from "react";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Nyakundi
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://x.com/nyakundi_66">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/nyakundi.hillary/">
          <BsInstagram />
        </a>
        <a href="https://github.com/HillaryNyakundi">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nyakundi Portfolio. {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default footer;
