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
import { Random_recipe } from '../components/Recipes/Random_recipes/Random_recipe'
import Vegan_recipes from '../components/Recipes/Vegan_recipes/Vegan_recipes'
import Meal_plan from '../components/Meal_plan/Meal_plan'
import Help from './../pages/Help_page'
import Contact from './../pages/Contact_page'
import Login from './../pages/SignIn_page'
import Register from './../pages/SignUp_page'

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
        <Route path='/random' element={<Random_recipe/>}/>
        <Route path='/vegan' element={<Vegan_recipes/>}/>
        <Route path='/mealplan' element={<Meal_plan/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default Routers