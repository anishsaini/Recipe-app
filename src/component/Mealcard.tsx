import React from 'react';
import { NavLink } from 'react-router-dom';
import './doc.css';

interface Meal {
  strMealThumb: string;
  strMeal: string;
  idMeal: string;
}

interface MealcardsProps {
  Meal: Meal[];
}

const Mealcards: React.FC<MealcardsProps> = ({ Meal }) => {
  console.log(Meal);
  
  return (
    <div className='meals'>
      {!Meal.length ? "Data Not Found" : Meal.map((curItem) => {
        return (
          <div key={curItem.idMeal} className='mealImg'>
            <img src={curItem.strMealThumb} alt={curItem.strMeal}/>
            <p>{curItem.strMeal}</p>
            <NavLink to={`/${curItem.idMeal}`}><button>Recipe</button></NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Mealcards;
