import { CANCEL_RESERVATION } from "./types";

// export const cancelReservation = (bool) => {
//   return {
//     type: CANCEL_RESERVATION,
//     cancelled: bool
//   };
// }

export const fetchReservation = (id) => {
  return(dispatch) => {
    fetch("http://localhost:3000/api/v1/reservations" + "/" + id)
    .then((response) => response.json())
    .then(reservation=> dispatch(cancelReservation)
  }
}
