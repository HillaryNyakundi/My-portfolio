import React from "react";
import "./about.css";
import MEEP from "../../assets/meep.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderSymlinkFill } from "react-icons/bs";

const about = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Nyakundi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={MEEP} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>0-1 Years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1+ Nairobi</small>
            </article>

            <article className='about__card'>
              <BsFolderSymlinkFill className='about__icon' />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <p>
            My name is Hillary Nyakundi, a P/MERN software engineer. I'm
            passinate about bringing value and benefit in people's lives through
            software creation by solving real life problems.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
