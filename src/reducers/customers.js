import { NEW_CUSTOMER, CUSTOMER_FETCH_DATA_SUCCESS } from "../actions/types";

export function customer(state = [], action) {
  switch (action.type) {
    case CUSTOMER_FETCH_DATA_SUCCESS:
      return action.customers

    case NEW_CUSTOMER:
      return [...state, action.customer]

    default:
      return state;
  }
}
