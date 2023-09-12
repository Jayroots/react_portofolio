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
    github: 'https://github.com/Jayroots/react_portofolio',
    demo: 'https://cv-opal-seven.vercel.app/',
    text: 'CV intéractif et dynamique créé de zéro sous REACT JS : liens fonctionnels vers messagerie et réseaux sociaux'

  },
  {
    id: 4,
    image: IMG4,
    title: 'AFAC 974',
    github: 'https://github.com/MathieuMrt/AFAC',
    demo: 'http://vps-d5babf40.vps.ovh.net:5030/',
    text: "Site vitrine affichant une galerie d'oeuvres d'art, possibilité pour le visiteur de se connecter et mettre en favoris des oeuvres et mettre à jour son profil. Partie Administrateur pour la gestion du contenu : ajout, suppression et modification des oeuvres et droits utilisateurs."

  },
  {
    id: 5,
    image: IMG5,
    title: 'E QUAL',
    github: 'https://github.com/Jayroots/equal',
    demo: 'https://equal-one.vercel.app/',
    text: "Site vitrine dynamique affichant les analyses de la qualité de l'eau en France avec service de GEOLOCALISATION, RECHERCHE et analyse via GRAPHIQUE DE DONNEES."

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
