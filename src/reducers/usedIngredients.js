import {USED_INGREDIENTS, CREATE_USED_INGREDIENT, RECIPE_INGREDIENT_FETCH} from '../actions/types';

export function usedIngredients(state = [], action) {
  switch (action.type) {
    case USED_INGREDIENTS:
      return action.usedIngredients;

    case CREATE_USED_INGREDIENT:
      let newUi = {}
      let newAmount
      let foundUi = {}
      let found = state.find((ui) => {

        if (ui.name === action.usedIngredient.name) {
          foundUi = ui
          return true
        }
      })

      if (found === true) {
        newAmount = foundUi.amount + action.usedIngredient.amount
      }

      return [
        ...state,
        action.usedIngredient
      ];

    default:
      return state;
  }
}
