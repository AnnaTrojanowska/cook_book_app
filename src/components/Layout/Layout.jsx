import React from 'react'
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import Routers from '../../router/Routers.js';
import { AuthProvider } from '../AuthContext.jsx';

const Layout = () => {
  return (<>
  <AuthProvider>
    <Header/>
        <Routers/>
    <Footer/>
  </AuthProvider>
  </>
  )
}

export default Layout