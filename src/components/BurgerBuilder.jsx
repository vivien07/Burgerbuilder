import React, { Component } from 'react';
import Burger from './Burger';
import BuildControls from './BuildControls';


const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.5,
  meat: 1,
  bacon: 0.5
};

class BurgerBuilder extends Component {


  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 1
  }

  addIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const newIngredients = {...this.state.ingredients};
    newIngredients[type] = newCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngredients
    });

  }

  removeIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) {
      return
    }
    const newCount = oldCount - 1;
    const newIngredients = {...this.state.ingredients};
    newIngredients[type] = newCount;
    const priceReduction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceReduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngredients
    });

  }


    render() {

      return(
        <>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
          />
        </>
      );

    }


}


export default BurgerBuilder;
