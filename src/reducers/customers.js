import {NEW_CUSTOMER, CUSTOMER_FETCH_DATA_SUCCESS, REMOVE_CUSTOMER} from '../actions/types';

export function customers(state = [], action) {
  switch (action.type) {
    case CUSTOMER_FETCH_DATA_SUCCESS:
      let firstCustomers = action.customers.filter(customer => {
        return customer.seated === true
      })

      return firstCustomers;

    case NEW_CUSTOMER:
      return [
        ...state,
        action.customer
      ];

    case REMOVE_CUSTOMER:
      let removeCust = state.filter(customer => {
        return customer.id !== action.id
      })
      return removeCust

    default:
      return state;
  }
}
