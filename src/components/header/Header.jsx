import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/realme.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour ! Je suis</h5>
        <h1>Jérémy François</h1>
        <h5 className="text-light">Développeur WEB Full Stack</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Bas de page</a>
      </div>
    </header>

  )
}


export default Header
