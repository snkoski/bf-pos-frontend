import { RECIPE_INGREDIENT_FETCH } from './types';

export const recipeIngredientFetch = (ingredients) => {
  return {type: RECIPE_INGREDIENT_FETCH, ingredients: ingredients}
}

export const recipeIngredientFetchData = (id) => {
  return(dispatch) => {
    fetch("http://localhost:3000/api/v1/recipes/" + id + "/ingredients")
    .then((response) => response.json()).then((ingredients) => dispatch(recipeIngredientFetch(ingredients)))
    
  }
}
