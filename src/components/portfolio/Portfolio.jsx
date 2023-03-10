import React from 'react'
import './portfolio.css'
import LAPI1 from '../../assets/art place.png'
import ANNEX from '../../assets/Annex.png'
import LAPI2 from '../../assets/Lapi2.webp'
import LAPI3 from '../../assets/Lapi3.webp'
import LAPI4 from '../../assets/Lapi4.webp'
import LAPI5 from '../../assets/Lapi5.webp'
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ANNEX} alt="" />
          </div>
            <h3>Annex cafeteria marketing website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/HillaryNyakundi/Annex-Cafe" className='btn' target='_blank'>Github</a>
            <a href="http://annex-cafe.epizy.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LAPI1} alt="" />
          </div>
            <h3>A landing page for an art institution in Kenya</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/HillaryNyakundi/Art-place" className='btn' target='_blank'>Github</a>
            <a href="https://art-place.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LAPI2} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LAPI3} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LAPI4} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LAPI5} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio
