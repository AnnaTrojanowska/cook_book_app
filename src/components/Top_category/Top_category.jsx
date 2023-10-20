import React from 'react'
import "./top_category.css"
import breakfast from '../../assets/images/breakfast.jpg'
import dinner from '../../assets/images/dinner.jpg'

const Top_category = () => {
  return (
    <div className='top_category'>
      <div className='top_category_container'>
        <div className='row'>
          <div className='category'>
            <div className='single_category'>
              <img src={breakfast} alt='breakfast'/>
              <div className='top_cta_content'>
                <h3>Śniadania</h3>
                <h6>Proste i pyszne</h6>
                 <a href="#" class="btn delicious-btn">Zobacz</a>
              </div>
            </div>
          </div>
          <div className='category'>
            <div className='single_category'>
              <img src={dinner} alt='breakfast'/>
              <div className='top_cta_content'>
                <h3>Obiady</h3>
                <h6>Proste i pyszne</h6>
                <a href="#" class="btn delicious-btn">Zobacz</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default Top_category