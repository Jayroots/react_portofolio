import React from 'react'
import './portofolio.css'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG5 from '../../assets/portfolio5.jpg'

const data = [

  {
    id: 1,
    image: IMG3,
    title: 'Curriculum Vitae',
    github: 'https://github.com/Jayroots/react_portofolio',
    demo: 'https://cv-opal-seven.vercel.app/',
    text: 'PROJET PERSONNEL INITIATIQUE POUR DECOUVRIR REACT  : CV intéractif et dynamique créé de zéro, liens fonctionnels vers messagerie et réseaux sociaux'

  },
  {
    id: 2,
    image: IMG5,
    title: 'E QUAL',
    github: 'https://github.com/Jayroots/equal',
    demo: 'https://equal-one.vercel.app/',
    text: "PROJET PROFESSIONEL REALISE DANS LE CADRE D UN ENTRETIEN POUR DECOUVRIR NEXTJS : Site vitrine dynamique affichant les analyses de la qualité de l'eau en France avec service de GEOLOCALISATION, RECHERCHE et analyse via GRAPHIQUE DE DONNEES."

  },

]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>Mes Projets récents</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {
          data.map(({ id, image, title, github, demo, text }) => {
            return (

              <article key={id} className='portofolio__item'>
                <div className='portofolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portofolio__item-cta">
                  <a href={github} target='_blank' className='btn'>Github</a>
                  <a href={demo} target='_blank' className='btn btn-primary'>Site</a>
                </div>
                <p className='text'>
                  {text}
                </p>

              </article>

            )

          })

        }

      </div>

    </section>
  )
}


export default Portofolio
