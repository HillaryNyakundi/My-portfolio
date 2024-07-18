import React from "react";
import "./portfolio.css";
import ECOMERCE from "../../assets/Ecomerce.png";
import LAPI6 from "../../assets/Lapi6.png";
import PREDICT from "../../assets/Predict.png";
import INVENT from "../../assets/Invent.png";
import SORT from "../../assets/Sort.png";
import LANDING from "../../assets/Landing.png";
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ECOMERCE} alt="" />
          </div>
          <h3>Apparel store with Redux Toolkit for state management</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HillaryNyakundi/redux-shop"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn" target="_blank">
              Blog
            </a>
            <a
              href="https://redux-shop-one-khaki.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={INVENT} alt="" />
          </div>
          <h3>A dynamic inventory Application with CRUD functionalities</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HillaryNyakundi/my-inventory"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn" target="_blank">
              Blog
            </a>
            <a
              href="
              https://my-inventory-six.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PREDICT} alt="Predict" />
          </div>
          <h3>
            Final year project, software developers' salary prediction app using
            ML and Python
          </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HillaryNyakundi/salary_dev"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="https://github.com" className="btn" target="_blank">
              Blog
            </a>
            <a
              href="https://developer-salary.streamlit.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={LAPI6} alt="" />
          </div>
          <h3>Barcardi Breezer Cocktails</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HillaryNyakundi/bacardi"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn" target="_blank">
              Blog
            </a>
            <a
              href="https://barcardi.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SORT} alt="" />
          </div>
          <h3>A demonstration of higher order functions in JavaScript</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HillaryNyakundi/JavaScript-refresher"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="https://github.com" className="btn" target="_blank">
              Blog
            </a>
            <a
              href="https://java-script-refresher.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={LANDING} alt="" />
          </div>
          <h3>A landing page for a SACCO business</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HillaryNyakundi/GuarantorsGuard"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="https://github.com" className="btn" target="_blank">
              Blog
            </a>
            <a
              href="https://guarantorguard.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
