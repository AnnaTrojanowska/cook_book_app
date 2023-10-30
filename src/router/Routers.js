import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Receipes from './../pages/Receipes'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/receipes' element={<Receipes/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default Routers