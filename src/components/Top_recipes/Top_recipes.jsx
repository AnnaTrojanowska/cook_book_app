import React from 'react'
import "./top_recipes.css"
import top_recipe from '../../assets/images/top_recipe.jpg'

const Top_recipes = () => {
  return (
    <div className='top_recipe'>
        <div className='container_recipe'>
            <div>
                <div className='heading'>
                    <div className='top_recipe_heading'>
                        <h3>Najlepsze przepisy</h3>
                    </div>
                </div>
            </div>

            <div className='row_recipe'>
                <div className='column'>
                    <div className='single_recipe'>
                        <img src={top_recipe}/>
                        <div className='recipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='single_recipe'>
                        <img src={top_recipe}/>
                        <div className='recipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div><div className='column'>
                    <div className='single_recipe'>
                        <img src={top_recipe}/>
                        <div className='recipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div><div className='column'>
                    <div className='single_recipe'>
                        <img src={top_recipe}/>
                        <div className='recipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div><div className='column'>
                    <div className='single_recipe'>
                        <img src={top_recipe}/>
                        <div className='recipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div><div className='column'>
                    <div className='single_recipe'>
                        <img src={top_recipe}/>
                        <div className='recipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Top_recipes