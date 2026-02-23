import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>CV</a>

      <ul className='permalinks'>
        <li><a href="#header" >Accueil</a></li>
        <li><a href="#about" >A Propos</a></li>
        <li><a href="#experience" >Experiences</a></li>
        <li><a href="#services" >Services</a></li>
        <li><a href="#portofolio" >Portofolio</a></li>
        <li><a href="#testimonials" >Témoignages</a></li>
        <li><a href="#contact" >Contact</a></li>

      </ul>

      <div className="footer__copyright">
        <small>
          &copy;CV Jeremy FRANCOIS. All rights reserved.
        </small>
      </div>
    </footer>
  )
}


export default Footer
