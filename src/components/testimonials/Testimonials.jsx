import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Laurent Daniel,  Responsable Regional chez PRETTO',
    review: 'Jérémy est un véritable atout humain. Fiable, intègre, travailleur... autant de qualités qui font de lui un être apprécié partout où il est passé'

  },
  {
    avatar: AVTR2,
    name: 'Lucas Faugeron, Développeur Web en Freelance',
    review: 'Jérémy a toujours été très autonome et efficace, ses remarques sont toujours pertinentes. Il pourra vous accompagner dans la réussite de vos projets.'

  },


]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Avis de professionels</h5>
      <h2>Témoignages</h2>
      <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {

          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className='client__review'>
                  {review}
                </small>

              </SwiperSlide>

            )
          }

          )
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
