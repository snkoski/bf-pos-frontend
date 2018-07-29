import { RECIPE_FETCH_DATA_SUCCESS } from "../actions/types";

export function recipes(state = [], action) {
  switch (action.type) {
    case RECIPE_FETCH_DATA_SUCCESS:
      return action.recipes;

    default:
      return state;
  }
}
