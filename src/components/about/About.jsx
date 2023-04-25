import React from 'react'
import './about.css'
import ME from '../../assets/realme-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

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
              <h5>Experience</h5>
              <small>1 an</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Client</h5>
              <small>1 </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projets</h5>
              <small>5</small>
            </article>
          </div>
          <p>
            Actuellement en formation de <strong> développeur Web Full Stack</strong>,
            je recherche une alternance d'un an à partir de septembre
            pour finaliser mon diplôme BAC +3 auprès de la Wild Code School, école professionnalisante.
            <br /><br />

            Etant novice dans le domaine, j’ai tout de même su mettre
            en application mon récent apprentissage pour la <strong>réalisation de projets professionnels </strong>
            et reste en veille permanente sur ce métier qui me passionne.
            <br /><br />
            Je recherche une entreprise dont les valeurs véhiculées me donneront
            envie de les rejoindre et je serai ravi de faire partie d'une belle aventure humaine.
            <br /> <br />

            Pourquoi moi ? J'apprends vite et suis engagé pour accomplir les projets d'entreprise qui ont du sens.
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
