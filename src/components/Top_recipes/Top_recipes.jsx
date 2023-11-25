import React, { useState, useEffect } from 'react'
import "./top_recipes.css"
import top_recipe from '../../assets/images/top_recipe.jpg'
import { Link } from 'react-router-dom';


const Top_recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const apiKey = '8d02f508a08743e5a1daa7e0c08d51b9';
  
    useEffect(() => {
      // Wykonaj zapytanie do API Spoonacular po załadowaniu komponentu
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=9&sort=popularity&sortDirection=desc&addRecipeInformation=true`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Zapisz wyniki zapytania do stanu komponentu
          setRecipes(data.results);
        })
        .catch(error => {
          console.error('Błąd podczas pobierania danych z API Spoonacular:', error);
        });
    }, []);

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
            {recipes.map(recipe => (
                <div className='column'>
                    <div className='single_recipe'>
                        <img src={recipe.image}/>
                        <div className='recipe_content'>
                        <Link to={`/details/${recipe.id}`}>
                                <h5>{recipe.title}</h5>
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
                            

        </div>

    </div>
  )
}

export default Top_recipes