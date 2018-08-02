import {NEW_ORDER, ORDER_FETCH_DATA_SUCCESS} from './types';
import {createFetch} from '../adapters/adapters';

export const ordersFetchDataSuccess = (orders) => {
  return {type: ORDER_FETCH_DATA_SUCCESS, orders: orders}
}

export const createOrder = (order) => {
  return {type: NEW_ORDER, order: order}
}

export const ordersFetchData = (url) => {
  return(dispatch) => {
    fetch(url).then((response) => response.json()).then((orders) => dispatch(ordersFetchDataSuccess(orders)))
  }
}

export const newOrderFetch = (order) => {
  return(dispatch) => {
    createFetch("http://localhost:3000/api/v1/orders", order).then(result => dispatch(createOrder(result)))
  }
}
