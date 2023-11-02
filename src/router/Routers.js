import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Receipes from './../pages/Receipes'
import Italian_Receipes from './../pages/Italian_Receipes'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/receipes' element={<Receipes/>}/>
        <Route path='/italian' element={<Italian_Receipes/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default Routers