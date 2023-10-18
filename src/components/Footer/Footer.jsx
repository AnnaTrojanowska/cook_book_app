import React from 'react'
import "./footer.css"
import social from '../../assets/images/icons/cake-3-line.png'
import logo from '../../assets/images/logo-black.png'
import fb from '../../assets/images/icons/facebook-line.png'
import pinterest from '../../assets/images/icons/pinterest-line.png'
import ig from '../../assets/images/icons/instagram-line.png'
import tw from '../../assets/images/icons/twitter-x-line.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='social_media'>
                <a href='https://facebook.com' target='_blank'><img src={fb} alt='fb'/></a>
                <a href='https://pinterest.com'><img src={pinterest} alt='pinterest'/></a>
                <a href='https://instagram.com'><img src={ig} alt='ig'/></a>
                <a href='https://twitter.com'><img src={tw} alt='tw'/></a>
            </div>
            <div className='logo'>
                <img src={logo} alt='Logo'/>
                
            </div>
            <p>Copyright Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    </div>
  )
}

export default Footer