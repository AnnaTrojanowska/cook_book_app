import React, { useState } from 'react';
import "./header.css"
import logo from '../../assets/images/logo-black.png'
import user from '../../assets/images/icons/user-line.png'
import search from '../../assets/images/icons/search-line.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from '../../router/Routers';


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
    <Router>
    <div className="header">
      <div className="container">
        <div className="logo">
        <Link to='/home'><img src={logo} alt="Logo" /></Link>
          
        </div>
        <nav className="menu">
          <ul>
            <li><Link to='/receipes'>PRZEPISY</Link></li>
            <li><a href="#">LOSOWY PRZEPIS</a></li>
            <li><a href="#">ULUBIONE</a></li>{/*dla zalogowanych*/}
            <li><a href="#">DODAJ</a></li>{/*dla zalogowanych*/}
          </ul>
        </nav>
        <div className="user-section">
          {isSearchActive ? (
            <input className='search_bar' type="text" placeholder="Wyszukaj" onBlur={handleBlur} />
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
    </Router>
  )
}

export default Header;