import React, { useContext } from 'react';
import MealContext from '../DataContext';

function Mealpage() {
  const meals = useContext(MealContext);  
  return (
    <div>
      <h1>Mealpage</h1>    
      {
        meals.map(
          meal => {
            return (
              <div key={meal.id}>
                <h2>{meal.name}</h2>
                <p>{meal.description}</p>
                <p>{meal.price}</p>
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default Mealpage;