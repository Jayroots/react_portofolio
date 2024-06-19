import React from 'react'
import './about.css'
import ME from '../../assets/realme-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import CV from '../../assets/CV.pdf'
import { GiSkills } from 'react-icons/gi'


const About = () => {
  return (
    <section id='about'>
      <h5>Apprenons à nous connaître</h5>
      <h2>A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>


        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Expérience</h5>
              <small>2 ans</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Entreprise</h5>
              <small>1</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projets Personnel</h5>
              <small>2</small>
            </article>
            <article className='about__card'>
              <GiSkills className='about__icon' />
              <h5>Soft Skills</h5>
              <small> <a href={CV} target='_blank'>Mon cv</a> </small>
            </article>
          </div>
          <p>
          Actuellement <strong>Développeur Web Full Stack</strong> après ma formation certifiante de niveau 5 en 2023, 
          j'ai commencé mon expérience professionnelle avec Accenture qui a su me faire confiance.

            <br /><br />
            Ayant plutôt une appétence FRONT sur React et Angular, j'ai voulu parfaire mes compétences 
            sur le BACK et suis désormais capable de développer sous JAVA, SPRING / SPRINGBOOT.
            <br /> <br />
            J’ai su mettre en application mon apprentissage pour la <strong>réalisation de projets professionnels</strong>
            (cf mon CV et Linkedin) et reste en veille permanente sur ce métier qui me passionne.
            <br /><br />
            

            J'apprends vite et suis engagé pour accomplir les projets d'entreprise qui ont du sens.
            <br /><br />
            A bientôt !
          </p>
          <a href="#contact" className='btn btn-primary'>Parlons en !</a>
        </div>

      </div>
    </section>
  )
}

export default About
