import {USED_INGREDIENTS, CREATE_USED_INGREDIENT} from './types'
import {patchFetch, createFetch} from '../adapters/adapters';

export const usedIngredientsFetchDataSuccess = (usedIngredients) => {
  return {type: USED_INGREDIENTS, usedIngredients: usedIngredients}
}

export const createUsedIngredient = (usedIngredient) => {
  return {type: CREATE_USED_INGREDIENT, usedIngredient: usedIngredient}
}

export const usedIngredientsFetchData = (url) => {
  return(dispatch) => {
    fetch(url).then((response) => response.json()).then((usedIngredients) => dispatch(usedIngredientsFetchDataSuccess(usedIngredients)))
  }
}

export const newUsedIngredientFetch = (usedIngredient) => {
  return(dispatch) => {
    createFetch("http://localhost:3000/api/v1/used_ingredients", usedIngredient).then(result => dispatch(createUsedIngredient(result)))
  }
}
