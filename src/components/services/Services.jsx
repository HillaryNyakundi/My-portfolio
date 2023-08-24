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
            <h3>Databases</h3>
          </div>
          <ul className ='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Enterprise data warehouse management.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Project management and Automation.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data Modelling.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Backup and recovery.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Security - CSRF & CORS & Cookies.</p>
            </li>
          </ul>
        </article>
        {/* END OF API's */}
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
