import { NEW_CUSTOMER, CUSTOMER_FETCH_DATA_SUCCESS, REMOVE_CUSTOMER } from "./types"
import { patchFetch, createFetch } from "../adapters/adapters";


export const customerFetchDataSuccess = (customers) => {
    return {
      type: CUSTOMER_FETCH_DATA_SUCCESS,
      customers: customers
    }
}

export const createCustomer = (customer) => {
  return {
    type: NEW_CUSTOMER,
    customer: customer
  }
}

export const removeCustomer =(id) => {
  return {
    type: REMOVE_CUSTOMER,
    id: id,
    seated: false
  };
}

export const customerFetchData = (url) => {
  return(dispatch) => {
    fetch(url)
    .then((response) => response.json())
    .then((customers) => dispatch(customerFetchDataSuccess(customers)))
  }
}

export const newCustomerFetch = (customer) => {

  return(dispatch) => {
    createFetch("http://localhost:3000/api/v1/customers", customer)
    .then(result => dispatch(createCustomer(result)))
  }
}

export const removeCustomerFetch = (id) => {
  return(dispatch) => {
    patchFetch("http://localhost:3000/api/v1/reservations/", id, { seated: false })
    .then(result => dispatch(removeCustomer(id)))
  }
}
