import React, { useState } from 'react';
import "./header.css"
import logo from '../../assets/images/logo-black.png'
import user from '../../assets/images/icons/user-line.png'
import search from '../../assets/images/icons/search-line.png'


const Header = () => {
    const [isSearchActive, setSearchActive] = useState(false);
  
    const toggleSearch = () => {
      setSearchActive((prevState) => !prevState);
    };
  
    const handleBlur = () => {
      if (isSearchActive) {
        setSearchActive(false);
      }
    };

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#">Przepisy</a></li>
            <li><a href="#">Posiłki</a></li>
            <li><a href="#">Inspiracje</a></li>
            <li><a href="#">Vege</a></li>
          </ul>
        </nav>
        <div className="user-section">
          {isSearchActive ? (
            <input type="text" placeholder="Wyszukaj" onBlur={handleBlur} />
          ) : (
          <span></span>
          )}
            <div className="search-icon" onClick={toggleSearch}>
              <img src={search} alt="search" />
            </div>
          <div className="user-profile">
            <img src={user} alt="Profil użytkownika" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header;