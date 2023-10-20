import React from 'react'
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import Routers from '../../router/Routers.js';

const Layout = () => {
  return (<>
    <Header/>
        <Routers/>
    <Footer/>
  </>
  )
}

export default Layout