import React from 'react'
import './testimonials.css'
import AVIR1 from '../../assets/avatar1.jpeg'
import AVIR2 from '../../assets/avatar2.jpeg'
import AVIR3 from '../../assets/avatar3.jpeg'
import AVIR4 from '../../assets/avatar4.jpeg'

// import Swiper core and required modules
import {  Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVIR1} alt="Avatar one" />
          </div>
          <h5 className = 'client__Name'>Suhade Tech & investiments</h5>
          <small className="small client__review">
            Kudos! for the awsome frontend, interactive and satisfying for the user experince.
          </small>
        </SwiperSlide>
        
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVIR2} alt="Avatar one" />
          </div>
          <h5 className = 'client__Name'>Dennis Maranga</h5>
          <small className="small client__review">
            Great job done on the backend, wow, i'm loving Node.
          </small>
        </SwiperSlide>
        
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVIR3} alt="Avatar one" />
          </div>
          <h5 className = 'client__Name'>Koech Kipkirui</h5>
          <small className="small client__review">
            React caught me by surprise but wahlaah, Loved my landing page which was delivered today.
          </small>
        </SwiperSlide>
        
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVIR4} alt="Avatar one" />
          </div>
          <h5 className = 'client__Name'>Elisha Kibet</h5>
          <small className="small client__review">
            A great and supportive team player, viable to new learning opportunities.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials
