import { USED_INGREDIENTS } from "../actions/types";

export function usedIngredients(state = [], action) {
  switch (action.type) {
    case USED_INGREDIENTS:
    return action.usedIngredients;

    default:
      return state;
}
}
