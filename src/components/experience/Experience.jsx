import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Docker & Kubernetes</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>CI/CD pipelines</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>AWS</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>PostgreSQL</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Cypres</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
          </div>
        </div> 

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Node.Js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Express Js</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
          </div>
        </div>
        </div>
    </section>
  )
}

export default experience
