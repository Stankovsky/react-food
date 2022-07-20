import React from 'react';
import {Link} from 'react-router-dom';

const MealItem = (props) => {
    const {strMeal, idMeal, strMealThumb} = props;
  return (
    <Link to={`/meal/${idMeal}`} className='card'>
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="card-content">
          <span className="card-title">{strMeal}</span>
        </div>
        <div className="card-action">
          <button className='btn'>Watch recipe</button>
        </div>
      </Link>
  )
}

export { MealItem }