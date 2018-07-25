import { STATIC_TABLE_FETCH_SUCCESS, SEAT_TABLE, CLEAR_TABLE, TABLE_FETCH_SUCCESS, CREATE_TABLE } from "../actions/types";

export function static_tables(state = [], action) {

  switch (action.type) {
    case STATIC_TABLE_FETCH_SUCCESS:
      return action.static_tables;

    case SEAT_TABLE:
      let newState = state.map(table => {
        if (table.id === parseInt(action.id, 10)) {
          table.occupied = action.occupied
        }
        return table
      })
      return newState;

      case CLEAR_TABLE:
      let newStates = state.map(table => {
        if (table.id === parseInt(action.id, 10)) {
          table.occupied = action.occupied
        }
        return table
      })
      return newStates;

    default:
      return state;
  }
}

export function tables(state=[], action) {

  switch (action.type) {

    case TABLE_FETCH_SUCCESS:
      return action.tables;

    case CREATE_TABLE:
      return [...state, action.tables];
    default:
      return state;
  }
}
