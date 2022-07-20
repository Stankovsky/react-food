import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
    const {
        //idCategory*/,
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
    } = props;
    return (
        <Link to={`/category/${strCategory}`} className="card">
                <div className="card-image">
                    <img src={strCategoryThumb} alt={strCategory} />
                </div>
                <div className="card-content">
                    <span className="card-title">{strCategory}</span>
                    <p>{strCategoryDescription.slice(0, 60)}...</p>
                </div>
                <div className="card-action">
                    <button className="btn">
                        Watch categories
                    </button>
                </div>
        </Link>
    );
};

export { CategoryItem };
