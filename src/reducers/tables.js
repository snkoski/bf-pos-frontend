import { STATIC_TABLE_FETCH_SUCCESS} from "../actions/types";

export function static_tables(state = [], action) {
  switch (action.type) {
    case STATIC_TABLE_FETCH_SUCCESS:
      return action.static_tables;
    default:
      return state;
  }
}
