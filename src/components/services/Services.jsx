import React from 'react'
import './services.css'
import{BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Servers</h3>
          </div>

          <ul className ='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTTP / HTTPS.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTTP status codes.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Client service architecture.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>MVC design pattern.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Application programming interfaces.</p>
            </li>
          </ul>
        </article>

        {/* END OF SERVERS */}

        
        <article className="service">
          <div className="service__head">
            <h3>Frontend</h3>
          </div>
          <ul className ='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Declarative UI.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Component-based architecture to reuse and scale complex UI.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Improved performance using the virtual DOM.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Reactive updates to the UI.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visualization of the UI components using JSX.</p>
            </li>
          </ul>
        </article>
        {/* END OF Frontend */}
        <article className="service">
          <div className="service__head">
            <h3>Additional</h3>
          </div>
          <ul className ='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Soft skills.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong communication skills.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Critical thinker and solution oriented.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Leadership skills</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Poetry Writer & chess player.</p>
            </li>
          </ul>
        </article>
        {/* END OF Additional */}
      </div>
    </section>
  )
}

export default services
