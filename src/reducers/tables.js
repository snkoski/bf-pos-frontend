import { STATIC_TABLE_FETCH_SUCCESS, STATIC_SEAT_TABLE, STATIC_CLEAR_TABLE, TABLE_FETCH_SUCCESS, CREATE_TABLE, CLEAR_TABLE, SELECT_TABLE } from "../actions/types";

export function static_tables(state = [], action) {

  switch (action.type) {
    case STATIC_TABLE_FETCH_SUCCESS:
      return action.static_tables;

    case STATIC_SEAT_TABLE:
      let newState = state.map(table => {
        if (table.id === parseInt(action.id, 10)) {
          table.occupied = action.occupied
        }
        return table
      })
      return newState;

      case STATIC_CLEAR_TABLE:
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

export function lastTable(state=
{id: 292, user_id: 1, occupied: true}, action) {

  switch (action.type) {

  case TABLE_FETCH_SUCCESS:
    let lastTable = action.tables[action.tables.length - 1]
      return lastTable;



    case CREATE_TABLE:

    let newLast = action.tables
      return newLast;

  default:
    return state;
}
}

export function selectedTable(state={}, action) {
  switch (action.type) {
    case SELECT_TABLE:
      return action.table

      default:
        return state;
  }
}

export function tables(state=[], action) {

  switch (action.type) {

    case TABLE_FETCH_SUCCESS:
    let firstTables = action.tables.filter(table => {
      return table.occupied === true
    })

      return firstTables;
    // return action.tables

    case CREATE_TABLE:
      return [...state, action.tables];

    case CLEAR_TABLE:
      let clearedTable = state.filter(table => {
        return table.id !== action.id
      })
        return clearedTable;

    default:
      return state;
  }
}
