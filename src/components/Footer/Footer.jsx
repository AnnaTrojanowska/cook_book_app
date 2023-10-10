import React from 'react'
import "./footer.css"
import logo from '../../assets/images/cake-3-line.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='social_media'>
                <img src={logo} alt='Logo'/>
                <img src={logo} alt='Logo'/>
                <img src={logo} alt='Logo'/>
                <img src={logo} alt='Logo'/>
            </div>
            <div className='logo'>
                <img src={logo} alt='Logo'/>
                Cook Book
            </div>
            <p>Copyright</p>
        </div>
    </div>
  )
}

export default Footer