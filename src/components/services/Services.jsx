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
            <h3>UI/UX Design</h3>
          </div>

          <ul className ='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Users problem solving.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interactive user interfaces.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Perfect communication skills.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Simple but authentic designs.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>User research and usability testing.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className ='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong creative ability.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Computer literacy.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong numeracy skills.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Excellent problem-solving skills.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>A logical approach to work.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong communication skills.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Attention to deal.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className ='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Online projects demo guru.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prolific tech meeting standups.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Code coach in basics for beginners.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Technical writer for code docs.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Tech events and workshops resercher.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default services
