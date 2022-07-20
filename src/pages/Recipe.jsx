import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getMealById} from '../api';
import {Preloader} from '../components/Preloader';

const Recipe = () => {
    const [recipe, setRecipe] = useState({});
    const {id} = useParams();
    const goBack = useNavigate();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]))
    }, [id])

  return (
    <>
    <button className="btn" onClick={() => goBack(-1)} style={{margin: '1rem 0'}}>Back</button>
        {!recipe.idMeal ? <Preloader /> : (
            
            <div className="recipe">
                <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                <h2>{recipe.strMeal}</h2>
                <h5>Category: {recipe.strCategory}</h5>
                {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
                <p>{recipe.strInstructions}</p>

                <table className='centered'>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(recipe).map(key => {
                                if(key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{
                                                recipe[`strMeasure${key.slice(13)}`]    
                                            }</td>
                                        </tr>
                                    );
                                }
                                return null;
                        })}
                    </tbody>
                </table>


                {recipe.strYoutube ? (
                    <div className="row">
                        <h5 style={{margin: '2rem 0 1.5rem'}}>Video Recipe</h5>
                        <iframe
                            title={id}
                            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                            allowFullScreen
                        />
                        
                    </div>
                
                ): null}
            </div>
        )}
        <button className="btn" onClick={() => goBack(-1)} style={{margin: '1rem 0'}}>Back</button>
    </>
  )
}

export { Recipe }