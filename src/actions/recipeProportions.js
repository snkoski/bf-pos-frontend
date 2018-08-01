import { RECIPE_PROPORTION_FETCH } from './types';

export const recipeProportionFetch = (proportions) => {
  return {type: RECIPE_PROPORTION_FETCH, proportions: proportions}
}

export const recipeProportionFetchData = (id) => {
  return(dispatch) => {
    fetch("http://localhost:3000/api/v1/recipes/" + id + "/proportions")
    .then((response) => response.json()).then((proportions) => dispatch(recipeProportionFetch(proportions)))
  }
}
