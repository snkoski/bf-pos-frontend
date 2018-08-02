import {NEW_ORDER, ORDER_FETCH_DATA_SUCCESS} from '../actions/types';

export function orders(state = [], action) {
  switch (action.type) {
    case ORDER_FETCH_DATA_SUCCESS:
      return action.orders;

    case NEW_ORDER:
      return [
        ...state,
        action.order
      ];

    default:
      return state;
  }
}
