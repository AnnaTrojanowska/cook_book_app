import React, { useState, useEffect } from 'react'
import "./top_category.css"
import breakfast from '../../assets/images/breakfast.jpg'
import dinner from '../../assets/images/dinner.jpg'
import '../../index.css'
import { Link } from 'react-router-dom';


const Top_category = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const recipeIds = ['636910', '1095751']; // ID przepisów
    const apiKey = '8d02f508a08743e5a1daa7e0c08d51b9';

    try {
      const responses = await Promise.all(
        recipeIds.map(id =>
          fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
        )
      );

      const data = await Promise.all(responses.map(res => res.json()));
      setRecipes(data);
    } catch (error) {
      console.error('Wystąpił błąd', error);
    }
  };
  return (
    <div className='top_category'>
      <div className='top_category_container'>
        <div className='row'>
        {recipes.map(recipe => (
          <div className='category'>
          

            <div key={recipe.id} className='single_category'>
              <img src={recipe.image} />
              <div className='top_cta_content'>
                <h3>{recipe.title}</h3>
                <h6>Proste i pyszne</h6>
                 <Link to={`/details/${recipe.id}`}><a class="button">Zobacz</a></Link>
              </div>
            </div>

          </div>
                            ))}

        </div>
      </div>
    </div>
 
  )
}

export default Top_category