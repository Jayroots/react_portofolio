import React from 'react'
import './portofolio.css'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG4 from '../../assets/portfolio.jpg'

const data = [

   {
    id: 1,
    image: IMG5,
    title: 'VERSO OBSEQUES',
    demo: 'https://verso-obseques.fr/',
    text: "L’objectif : proposer un point d’entrée digital clair et respectueux pour aider les familles à comprendre les démarches, comparer les établissements et identifier des professionnels près de chez eux."

  },
  {
    id: 2,
    image: IMG3,
    title: 'Curriculum Vitae',
    demo: 'https://cv-opal-seven.vercel.app/',
    text: 'PROJET PERSONNEL INITIATIQUE POUR DECOUVRIR REACT  : CV intéractif et dynamique créé de zéro, liens fonctionnels vers messagerie et réseaux sociaux'

  },
  {
    id: 3,
    image: IMG4,
    title: 'Site vitrine pour enfants',
    demo: 'https://anna-wheat.vercel.app/',
    text: "PROJET PERSONNEL AVEC REACT / VITEJS : Site vitrine pour enfants incluant des animations. Application responsive."

  }
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
                  <a href={demo} target='_blank' rel="noreferrer" className='btn btn-primary'>Visiter le site</a>
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
