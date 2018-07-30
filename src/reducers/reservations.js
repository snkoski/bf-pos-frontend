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
  let today = findToday()

  switch (action.type) {
    case NEW_RESERVATION:

    if (action.reservations.date.slice(0, 10) === today) {

      let newReservations = [...state, action.reservations]

      newReservations.sort(function(a, b) {
        a = new Date(a.time)
        b = new Date(b.time)
        return a < b ? -1 : a > b ? 1 : 0
      })
      return newReservations;
    }else{
      return state;
    }

    case RESERVATIONS_FETCH_DATA_SUCCESS:


    let firstReservations = action.reservations.filter(reservation => {
      return (reservation.cancelled === false && reservation.date.slice(0,10) === today)
    })


    firstReservations.sort(function(a, b) {
      a = new Date(a.time)
      b = new Date(b.time)
      return a < b ? -1 : a > b ? 1 : 0
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
const findToday = () => {
let today = (new Date()).toLocaleDateString('en-US')
today = today.split('/').map(el => {
  if (el.length === 1) {
    el = "0" + el
  }
  return el
})
today = [today[2], today[0], today[1]]
today = today.join('-')
return today
}
