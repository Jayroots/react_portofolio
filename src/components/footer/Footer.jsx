import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>CV</a>

      <ul className='permalinks'>
        <li><a href="#" >Accueil</a></li>
        <li><a href="#about" >A Propos</a></li>
        <li><a href="#experience" >Experiences</a></li>
        <li><a href="#services" >Services</a></li>
        <li><a href="#portofolio" >Portofolio</a></li>
        <li><a href="#testimonials" >Témoignages</a></li>
        <li><a href="#contact" >Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>

      </div>
      <div className="footer__copyright">
        <small>
          &copy;CV Jeremy FRANCOIS. All rights reserved.
        </small>
      </div>
    </footer>
  )
}


export default Footer
