import React from 'react'
import Slider from '../components/Slider/Slider'
import Top_category from '../components/Top_category/Top_category'
import Top_receipes from '../components/Top_receipies/Top_receipes'

const Home = () => {
  return (<>
    <Slider/>
    <Top_category/>
    <Top_receipes/>
    </>
  )
}

export default Home