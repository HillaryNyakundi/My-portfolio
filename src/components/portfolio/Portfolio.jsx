import React from 'react'
import './portfolio.css'
import LAPI1 from '../../assets/Lapi1.webp'
import LAPI6 from '../../assets/Lapi6.webp'
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
            <img src={LAPI1} alt="" />
          </div>
            <h3>Calculator app with React</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/HillaryNyakundi/calc" className='btn' target='_blank'>Github</a>
            <a href="" className='btn' target='_blank'>Blog</a>
            <a href="https://calculator-psi-sepia.vercel.app/" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LAPI6} alt="" />
          </div>
            <h3>Student API CRUD App</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/HillaryNyakundi/students-API" className='btn' target='_blank'>Github</a>
            <a href="https://nyakundi.hashnode.dev/crud-application-with-expressjs" className='btn' target='_blank'>Blog</a>
            <a href="localhost:3000/api-docs/" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LAPI2} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn' target='_blank'>Blog</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LAPI3} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn' target='_blank'>Blog</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LAPI4} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn' target='_blank'>Blog</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LAPI5} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn' target='_blank'>Blog</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio
