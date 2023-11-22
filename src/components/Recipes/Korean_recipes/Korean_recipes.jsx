import React, { useState, useEffect } from 'react'
import {CardGroup, Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button} from 'reactstrap'
import './korean_recipes.css'
import '../../Card_recipes/card_recipes.css'
import { Link } from 'react-router-dom';

const Korean_recipes = () => {
  const [recipes, setRecipes] = useState(null);
  const apiKey = '8d02f508a08743e5a1daa7e0c08d51b9';

  useEffect(() => {
    // Wykonaj zapytanie do API Spoonacular po załadowaniu komponentu
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=9&cuisine=Korean`)
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

  return ( <>
    <h3 className='heading_recipe'>KUCHNIA KOREAŃSKA</h3>
    <div>
      <CardGroup className='recipe_group'>
        {recipes &&
          recipes.map(recipe => (
            <Card className='recipes_card' key={recipe.id}>
              <CardImg alt="Card image cap" src={recipe.image} top width="100%" />
              <CardBody>
                <CardTitle className='card_title' tag="h5">{recipe.title}</CardTitle>
                <Link to={`/details/${recipe.id}`} className="button button_recipes">Szczegóły</Link>
              </CardBody>
            </Card>
          ))}
      </CardGroup>
      
    </div>
    <div className='card_div'></div>
  
</>
  )
}

export default Korean_recipes