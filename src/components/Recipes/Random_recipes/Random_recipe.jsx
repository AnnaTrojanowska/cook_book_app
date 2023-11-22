import React, { useState, useEffect } from 'react'

import './random_recipe.css'

export const Random_recipe = () => {
        const [randomRecipe, setRandomRecipe] = useState(null);
    const apiKey = '8d02f508a08743e5a1daa7e0c08d51b9';
  
    useEffect(() => {
      fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => setRandomRecipe(data.recipes[0]))
        .catch(error => console.error('Error:', error));
    }, []);
  
    if (!randomRecipe) {
      return <div>Loading...</div>;
    }
    return (
      <>
      
      <div className="random-recipe">
        <h1>{randomRecipe.title}</h1>
        <img src={randomRecipe.image} alt={randomRecipe.title} />
        <p dangerouslySetInnerHTML={{ __html: randomRecipe.summary }}></p>
        <p>Czas przygotowania: {randomRecipe.readyInMinutes} minut</p>
        <p>Porcje: {randomRecipe.servings}</p>
  
        <h3>Składniki:</h3>
        <ul>
          {randomRecipe.extendedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient.original}</li>
          ))}
        </ul>
  
        <h3>Instrukcje:</h3>
        <div dangerouslySetInnerHTML={{ __html: randomRecipe.instructions }}></div>
  
        <h3>Informacje dietetyczne:</h3>
        <p>Wegańskie: {randomRecipe.vegan ? 'Tak' : 'Nie'}</p>
        <p>Wegetariańskie: {randomRecipe.vegetarian ? 'Tak' : 'Nie'}</p>
        <p>Bezglutenowe: {randomRecipe.glutenFree ? 'Tak' : 'Nie'}</p>
        <p>Bez nabiału: {randomRecipe.dairyFree ? 'Tak' : 'Nie'}</p>
  
        <h3>Wine Pairing:</h3>
        {randomRecipe.winePairing && (
          <p>{randomRecipe.winePairing.pairingText}</p>
        )}
      </div>
    </>
    )
}
