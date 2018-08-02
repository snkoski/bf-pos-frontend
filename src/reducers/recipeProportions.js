import {RECIPE_PROPORTION_FETCH} from '../actions/types';

export function recipeProportions(state = [], action) {
  switch (action.type) {
    case RECIPE_PROPORTION_FETCH:
      return action.proportions;

    default:
      return state;
  }
}
