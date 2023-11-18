import React from 'react'
import Slider from '../components/Slider/Slider'
import Top_category from '../components/Top_category/Top_category.jsx'
import Top_recipes from '../components/Top_recipes/Top_recipes.jsx'
import Vegan_section from '../components/Vegan_section/Vegan_section.jsx'

const Home = () => {
  return (<>
    <Slider/>
    <Top_category/>
    <Top_recipes/>
    <Vegan_section/>
    </>
  )
}

export default Home