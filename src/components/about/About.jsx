import React from 'react';
import './about.css';
import MEEP from '../../assets/meep.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsFolderSymlinkFill } from 'react-icons/bs';

const about = () => {
  return (
    <section id="About">
      <h5>Get To Know</h5>
      <h2>About Hillary</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEEP} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.2 Years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Nairobi</small>
            </article>

            <article className="about__card">
              <BsFolderSymlinkFill className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <p>
            My name is Hillary Nyakundi, a Front-End Engineer. I am passionate about
            bringing value and benefit to people's lives through software design and by
            providing fresh ideas into the product development lifecycle.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
