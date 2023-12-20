import React, { useState } from 'react';
import "./header.css"
import logo from '../../assets/images/logo-black.png'
import user from '../../assets/images/icons/user-line.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Button } from 'reactstrap';
import { useAuth } from '../AuthContext';
import AuthDetails from '../AuthDetails';


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

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(prevState => !prevState);
    };

    const { authUser } = useAuth();

  return (
    <Router>
    <div className="header">
      <div className="container">
        <div className="logo">
        <Link to='/'><img src={logo} alt="Logo" /></Link>
          
        </div>
        <nav className="menu">
          
          <ul>
          <li className="nav-item">
            <UncontrolledDropdown group>
                <Button color='none'>
                <Link to='/recipes'>PRZEPISY</Link>
                </Button>
                <DropdownToggle
                  caret
                  color="none"
                />
                <DropdownMenu>
                  
                  <DropdownItem>
                  <Link to='/asian'>AZJATYCKIE</Link>
                  </DropdownItem>
                  <DropdownItem>
                   <Link to='/italian'> WŁOSKIE </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to='/japanese'>JAPOŃSKIE</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to='/korean'>KOREAŃSKIE</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to='/spanish'> HISZPAŃSKA</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to='/european'>EUROPEJSKIE</Link>
                  </DropdownItem>
                  
                </DropdownMenu>
            </UncontrolledDropdown>
          </li>

            <li><Link to='/random'>LOSOWY PRZEPIS</Link></li>
            <li><Link to='/vegan'>VEGE</Link></li>
            {authUser && (
            <li><Link to='/mealplan'>PLANOWANIE POSIŁKÓW</Link></li>
            )}
          </ul>
        </nav>
        <div className="user-section">
          {/* {isSearchActive ? (
            <input className='search_bar' type="text" placeholder="Wyszukaj" onBlur={handleBlur} />
          ) : (
          <span></span>
          )}
            <div className="search-icon" onClick={toggleSearch}>
              <img src={search} alt="search" />
            </div> */}
          <div className="user-profile">
            {!authUser && (
            <Link to='/signin'><img src={user} alt="Logowanie" /></Link>
            )}
            {authUser && (
            <div>
            <Link to='/user_profil'><img src={user} alt="Profil użytkownika" /></Link>
            <AuthDetails/>
            </div>
            )}  
          </div>
        </div>
      </div>
    </div>
    </Router>
  )
}

export default Header;