import React from 'react'
import './services.css'
import { BsCheck2 } from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>Ce que je propose</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Design </h3>
          </div>
          <ul className='service__list'>
            <li><BsCheck2 className='service__list-icon' />
              <p>Construction des wireframes et maquettes </p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p>Utilisation de framework et library modernes</p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p>Maitrise du responsive et de l'accessibilité</p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p>Presentation client dynamique avec Canvas </p>
            </li>

          </ul>
        </article>
        {/*END OF UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Développement Web</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheck2 className='service__list-icon' />
              <p> Conception d’applications
              </p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p> Montée de version 
              </p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p> Réduction de dette technique
              </p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p>Utilisation d' API</p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p>Création d'algorithmes  </p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p>Analyse de code et architecture </p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p> Migration de base de données
              </p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p> Tests unitaires et d'intégration
              </p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p> Conteneurisation (Docker, Kubernetes)
              </p>
            </li>

          </ul>
        </article>
        {/*WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Méthodologie</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheck2 className='service__list-icon' />
              <p>Planification des tickets et sprint </p>
            </li>
             <li><BsCheck2 className='service__list-icon' />
              <p>Méthodes agiles </p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p>Maitrise de l'utisation de GIT et GITHUB</p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p>Outils : VSCode, IntelliJ, Jira, Azure, Teams </p>
            </li>
            <li><BsCheck2 className='service__list-icon' />
              <p>Linux </p>
            </li>

          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}
      </div>

    </section>
  )
}

export default Services
