import { RESERVATION_HAS_ERRORED, RESERVATION_IS_LOADING, RESERVATIONS_FETCH_DATA_SUCCESS, NEW_RESERVATION, CANCEL_RESERVATION } from "../actions/types";

export function reservationsHasErrored(state = false, action) {
  switch (action.type) {
    case RESERVATION_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function reservationsIsLoading(state = false, action) {
  switch (action.type) {
    case RESERVATION_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function reservations(state = [], action) {
  switch (action.type) {
    case NEW_RESERVATION:

      return [...state, action.reservations];

    case RESERVATIONS_FETCH_DATA_SUCCESS:
    let firstReservations = action.reservations.filter(reservation => {
      return reservation.cancelled === false
    })
      return firstReservations;


    case CANCEL_RESERVATION:
    let cancelRes = state.filter(res => {
      return res.id !== action.id})

    return cancelRes

    // let index = state.indexOf(action.reservation)
    // let newRes = [
    //   ...state.slice(0, index),
    //   ...state.slice(index + 1)
    // ]
    //   return newRes;

    // debugger
    // return newState

    //

    // let cancelled =
    // const reservationId = action.reservations.id
    //   const newState = state.filter(reservation => )
    //   return []



    default:
      return state;
  }
}
