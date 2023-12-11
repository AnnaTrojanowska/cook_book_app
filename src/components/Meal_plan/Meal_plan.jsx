import React, { useState, useEffect } from 'react';
import './meal_plan.css'
import { Link } from 'react-router-dom';

const Meal_plan = () => {
    const [mealPlan, setMealPlan] = useState(null);
    const apiKey = '8d02f508a08743e5a1daa7e0c08d51b9';

    useEffect(() => {
        fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMealPlan(data);
            })
            .catch(error => {
                console.error('Błąd podczas pobierania danych z API Spoonacular:', error);
            });
    }, []);

    if (!mealPlan) {
        return <div>Ładowanie planu posiłków...</div>;
    }

    return (
        <div className="meal-plan-container">
            <h1 className="title">Twój Plan Posiłków na Tydzień</h1>
            <div className='meal-plan-box'>
        {mealPlan.week && Object.keys(mealPlan.week).map(day => (
            <div key={day} className="day-container">
                <h2 className="day-title">{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
               
                {mealPlan.week[day].meals && mealPlan.week[day].meals.map((meal, index) => (
                    <div key={index} className="meal-container">
                        <Link to={`/details/${meal.id}`}> <h3 className="meal-title">{meal.title}</h3></Link>
                        {meal.image && <img src={meal.image} alt={meal.title} className="meal-image" />}
                        {meal.summary && <p className="meal-summary">{meal.summary}</p>}
                        
                    </div>
                ))}
                 <div className="nutrients">
                        <p>Kalorie: {mealPlan.week[day].nutrients.calories.toFixed(2)}</p>
                        <p>Białko: {mealPlan.week[day].nutrients.protein.toFixed(2)} g</p>
                        <p>Tłuszcz: {mealPlan.week[day].nutrients.fat.toFixed(2)} g</p>
                        <p>Węglowodany: {mealPlan.week[day].nutrients.carbohydrates.toFixed(2)} g</p>
                    </div>
            </div>
            
        ))}
        </div>
    </div>
    );
};

export default Meal_plan;
