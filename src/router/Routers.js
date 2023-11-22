import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Recipes from './../pages/Recipes'
import Italian_Recipes from './../pages/Italian_Recipes'
import Asian_Recipes from './../pages/Asian_Recipes'
import Spanish_Recipes from './../pages/Spanish_Recipes'
import European_Recipes from './../pages/European_Recipes'
import Japanese_Recipes from './../pages/Japanese_Recipes'
import Korean_Recipes from './../pages/Korean_Recipes'
import Recipe_details from '../components/Recipes/Recipes_details/Recipe_details'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/recipes' element={<Recipes/>}/>
        <Route  path='/italian' element={<Italian_Recipes/>}/>
        <Route  path='/asian' element={<Asian_Recipes/>}/>
        <Route  path='/spanish' element={<Spanish_Recipes/>}/>
        <Route  path='/european' element={<European_Recipes/>}/>
        <Route  path='/japanese' element={<Japanese_Recipes/>}/>
        <Route  path='/korean' element={<Korean_Recipes/>}/>
        <Route path="/details/:id" element={<Recipe_details/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default Routers