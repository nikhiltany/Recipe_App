import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ title ,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <p className="calories">Calories: {parseInt(calories)} Kcal</p>
            <ul className="ingredients">
                {ingredients.map((ingredient, index) => (
                 <li className="ingredient" key={index}>
                  <i className="fas fa-caret-right" /> {ingredient.text}
                  </li>
              ))}
            </ul>
           
        </div>
    );
}

export default Recipe
