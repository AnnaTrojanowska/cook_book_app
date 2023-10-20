import React from 'react'
import Slider from '../components/Slider/Slider'
import Top_category from '../components/Top_category/Top_category.jsx'
import Top_receipes from '../components/Top_receipies/Top_receipes.jsx'

const Home = () => {
  return (<>
    <Slider/>
    <Top_category/>
    <Top_receipes/>
    </>
  )
}

export default Home