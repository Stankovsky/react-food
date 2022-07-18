import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { getFilteredCategory } from '../api';
import {Preloader} from '../components/Preloader';
import {MealList} from '../components/MealList'

const Category = () => {
    const {name} =useParams();
    const [meals, setMeals] = useState([]);
    const goBack = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name])
       return (
        <>
            {!meals.length ? <Preloader /> : <MealList meals={meals}/>}
            <button className='btn' onClick={() => goBack(-1)}>Back</button>
        </>
  )
}

export { Category }