import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'

const data = [

  {
    id: 1,
    image: IMG1,
    title: 'WIld Eats',
    github: 'https://github.com/SL-Production/Project01',
    demo: 'https://web.wildeats.fr/',
    text: 'Annuaire interactif des restaurants se situant dans le quartier de la Cité des Congrès près de la WILD CODE SCHOOL. Développement HTML CSS et JAVASCRIPT dont sélection des commerçants par FILTRE '
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lets Go',
    github: 'https://github.com/Headonnn/LetsGo',
    demo: 'https://dribble.com',
    text: 'Portail référençant les évènements en Loire Atlantique : utilisation d API et mise en place de menus filtrants'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Curriculum Vitae',
    github: 'https://github.com',
    demo: 'https://cv-opal-seven.vercel.app/',
    text: 'CV intéractif et dynamique créé de zéro sous REACT JS : lien fonctionnels vers messagerie et réseaux sociaux'

  },
  {
    id: 4,
    image: IMG4,
    title: 'Projet 3',
    github: 'https://github.com',
    demo: 'https://dribble.com',
    text: 'En cours d élaboration'

  },
  {
    id: 5,
    image: IMG5,
    title: 'Hackathon',
    github: 'https://github.com',
    demo: 'https://dribble.com',
    text: 'En cours d élaboration'

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
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Site</a>
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
