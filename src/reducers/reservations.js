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

      return action.reservations;

    case CANCEL_RESERVATION:

    let newState = state.map(res => {
      if (res.id === action.id) {
        res.cancelled = action.cancelled
      }
      return res
    })
    // debugger
    return newState

    //

    // let cancelled =
    // const reservationId = action.reservations.id
    //   const newState = state.filter(reservation => )
    //   return []



    default:
      return state;
  }
}
