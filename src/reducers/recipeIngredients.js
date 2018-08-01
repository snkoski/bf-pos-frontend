import { RECIPE_INGREDIENT_FETCH } from "../actions/types";

export function recipeIngredients(state = [], action) {
  switch (action.type) {
    case RECIPE_INGREDIENT_FETCH:
      return action.ingredients;

      default:
        return state;
  }
}
