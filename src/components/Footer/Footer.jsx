import React from 'react'
import "./footer.css"
import social from '../../assets/images/cake-3-line.png'
import logo from '../../assets/images/logo-black.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='social_media'>
                <img src={social} alt='Logo'/>
                <img src={social} alt='Logo'/>
                <img src={social} alt='Logo'/>
                <img src={social} alt='Logo'/>
            </div>
            <div className='logo'>
                <img src={logo} alt='Logo'/>
                
            </div>
            <p>Copyright</p>
        </div>
    </div>
  )
}

export default Footer