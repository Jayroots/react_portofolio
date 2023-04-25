import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Les compétences que je peux apporter</h5>
      <h2>Mon Expérience</h2>

      <div className="container experience__container">
        <div className='experience__frontend'>
          <h3> Développement Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML </h4>
                <small class='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS </h4>
                <small class='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript </h4>
                <small class='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>REACT </h4>
                <small class='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tailwind </h4>
                <small class='text-light'>intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SASS </h4>
                <small class='text-light'>Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND*/}


        <div className='experience__backend'>
          <h3>Développement Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NODE JS </h4>
                <small class='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>API Express </h4>
                <small class='text-light'>Intermédiaire</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL </h4>
                <small class='text-light'>Débutant</small>
              </div>
            </article>


          </div>

        </div>
      </div>


    </section>
  )
}


export default Experience
