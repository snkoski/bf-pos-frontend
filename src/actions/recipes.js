import {RECIPE_FETCH_DATA_SUCCESS} from './types';

export const recipesfetchdatasuccess = (recipes) => {
  return {type: RECIPE_FETCH_DATA_SUCCESS, recipes: recipes}
}

export const recipesFetchData = (url) => {
  return(dispatch) => {
    fetch(url).then((response) => response.json()).then((recipes) => dispatch(recipesfetchdatasuccess(recipes)))
  }
}
