import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Recipes from './../pages/Recipes'
import Italian_Recipes from './../pages/Italian_Recipes'
import Asian_Recipes from './../pages/Asian_Recipes'
import EasternEuropean_Recipes from './../pages/EasternEuropean_Recipes'
import European_Recipes from './../pages/European_Recipes'
import Japanese_Recipes from './../pages/Japanese_Recipes'
import Korean_Recipes from './../pages/Korean_Recipes'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Navigate to='/home'/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/recipes' element={<Recipes/>}/>
        <Route  path='/italian' element={<Italian_Recipes/>}/>
        <Route  path='/asian' element={<Asian_Recipes/>}/>
        <Route  path='/easterneuropean' element={<EasternEuropean_Recipes/>}/>
        <Route  path='/european' element={<European_Recipes/>}/>
        <Route  path='/japanese' element={<Japanese_Recipes/>}/>
        <Route  path='/korean' element={<Korean_Recipes/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default Routers