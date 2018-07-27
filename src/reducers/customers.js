import { NEW_CUSTOMER, CUSTOMER_FETCH_DATA_SUCCESS } from "../actions/types";

export function customers(state = [], action) {
  switch (action.type) {
    case CUSTOMER_FETCH_DATA_SUCCESS:
    let firstCustomers = action.customers.filter(customer => {
      return customer.seated === true
    })

      return firstCustomers

    case NEW_CUSTOMER:
      return [...state, action.customer]

    default:
      return state;
  }
}
