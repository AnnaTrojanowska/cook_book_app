import React from 'react'
import "./footer.css"
import logo from '../../assets/images/logo-black.png'
import fb from '../../assets/images/icons/facebook-line.png'
import pinterest from '../../assets/images/icons/pinterest-line.png'
import ig from '../../assets/images/icons/instagram-line.png'
import tw from '../../assets/images/icons/twitter-x-line.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Footer = () => {
  return (
    <Router>
    <div className='footer'>
        <div className='footer_container'>
            <div className='social_media'>
                <a href='https://facebook.com' target='_blank'><img src={fb} alt='fb'/></a>
                <a href='https://pinterest.com' target='_blank'><img src={pinterest} alt='pinterest'/></a>
                <a href='https://instagram.com' target='_blank'><img src={ig} alt='ig'/></a>
                <a href='https://twitter.com' target='_blank'><img src={tw} alt='tw'/></a>
            </div>
            
            <div className='logo'>
                <img src={logo} alt='Logo'/>
                
            </div>
            
            <div>
              <Link to="/help" className='footer_link'>Jak korzystać z serwisu</Link>
              <Link to="/contact" className='footer_link'>Kontakt</Link>
  
            </div>
          </div>
            
    </div>
    </Router>
  )
}

export default Footer