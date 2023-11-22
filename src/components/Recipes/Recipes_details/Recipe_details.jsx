import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './recipe_details.css'

const Recipe_details = () => {
    const { id } = useParams();
  const [recipe, setRecipeDetails] = useState(null);
  const apiKey = '8d02f508a08743e5a1daa7e0c08d51b9';

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
      .then(response => response.json())
      .then(data => setRecipeDetails(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }
  return (
    <>
    
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
      <p>Czas przygotowania: {recipe.readyInMinutes} minut</p>
      <p>Porcje: {recipe.servings}</p>

      <h3>Składniki:</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </ul>

      <h3>Instrukcje:</h3>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>

      <h3>Informacje dietetyczne:</h3>
      <p>Wegańskie: {recipe.vegan ? 'Tak' : 'Nie'}</p>
      <p>Wegetariańskie: {recipe.vegetarian ? 'Tak' : 'Nie'}</p>
      <p>Bezglutenowe: {recipe.glutenFree ? 'Tak' : 'Nie'}</p>
      <p>Bez nabiału: {recipe.dairyFree ? 'Tak' : 'Nie'}</p>

      <h3>Wine Pairing:</h3>
      {recipe.winePairing && (
        <p>{recipe.winePairing.pairingText}</p>
      )}
    </div>
  </>
  )
}

export default Recipe_details