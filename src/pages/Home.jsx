import React from 'react'
import Slider from '../components/Slider/Slider'
import Top_category from '../components/Top_category/Top_category.jsx'
import Top_receipes from '../components/Top_receipies/Top_receipes.jsx'
import Vegan_section from '../components/Vegan_section/Vegan_section.jsx'

const Home = () => {
  return (<>
    <Slider/>
    <Top_category/>
    <Top_receipes/>
    <Vegan_section/>
    </>
  )
}

export default Home