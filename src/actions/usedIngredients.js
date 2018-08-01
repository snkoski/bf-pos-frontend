import { USED_INGREDIENTS } from "./types"

export const usedIngredientsFetchDataSuccess = (usedIngredients) => {
  return {type: USED_INGREDIENTS, usedIngredients: usedIngredients}
}

export const usedIngredientsFetchData = (url) => {
  return(dispatch) => {
    fetch(url).then((response) => response.json()).then((usedIngredients) => dispatch(usedIngredientsFetchDataSuccess(usedIngredients)))
  }
}
