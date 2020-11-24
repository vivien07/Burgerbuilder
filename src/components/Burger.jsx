import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient';

const burger = (props) => {

  let ig = Object.keys(props.ingredients)
  .map( igKey => {
    return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    } )})
    .reduce( (arr, el) => {
      return arr.concat(el)
    }, [] );

    if (ig.length === 0) {
      ig = <p>Please start adding ingredients!</p>;
    }

      return(
        <div className="Burger">
          <BurgerIngredient type='bread-top'/>
          {ig}
          <BurgerIngredient type='bread-bottom'/>
        </div>
      );

    };


    export default burger;
