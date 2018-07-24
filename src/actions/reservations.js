import { RESERVATION_HAS_ERRORED, RESERVATION_IS_LOADING, RESERVATIONS_FETCH_DATA_SUCCESS, NEW_RESERVATION, CANCEL_RESERVATION } from "./types";

export const reservationsHasErrored = (bool) => {
  return {
    type: RESERVATION_HAS_ERRORED,
    hasErrored: bool
  };
}

export const reservationsIsLoading = (bool) => {
  return {
    type: RESERVATION_IS_LOADING,
    isLoading: bool
  };
}

export const reservationsFetchDataSuccess = (reservations) => {
  return {
    type: RESERVATIONS_FETCH_DATA_SUCCESS,
    reservations
  };
}

export const createReservation = (reservation) => {
  return {
    type: NEW_RESERVATION,
    reservations: reservation
  };
}
export const cancelReservation = (id ,bool) => {
  return {
    type: CANCEL_RESERVATION,
    id: id,
    cancelled: bool
  };
}

// export const cancelReservation = (reservation) => {
//   return {
//     type: CANCEL_RESERVATION,
//     reservations: reservation
//   }
// }
//
// export const errorAfterFiveSeconds() {
//   return(dispatch) => {
//     setTimeout(() => {
//       dispatch(reservationsHasErrored(true));
//     }, 5000);
//   };
// }

export const reservationsFetchData = (url) => {
  return(dispatch) => {
    dispatch(reservationsIsLoading(true));

    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(reservationsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((reservations) => dispatch(reservationsFetchDataSuccess(reservations)))
      .catch(() => dispatch(reservationsHasErrored(true)));
  };
}

export const newReservation = (reservation) => {

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reservation)
  }

  return(dispatch) => {
    dispatch(reservationsIsLoading(true));

    fetch("http://localhost:3000/api/v1/reservations", options)

    .then((response) => {
      if(!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(reservationsIsLoading(false));

      return response;
    })

      .then(response => response.json())
       .then(result => {
         console.log(result)
        dispatch(createReservation(result))
      })
  };
}


export const cancelReservationFetch = (id) => {

  return(dispatch) => {
    fetch("http://localhost:3000/api/v1/reservations/" + id, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify( { cancelled: true } )
  })
  .then(resp => resp.json())
  .then(result => {dispatch(cancelReservation(id, true))})
}
}
// export const deleteReservation = (id) => {
//   return(dispatch) => {
//     fetch("http://localhost:3000/api/v1/reservations" + "/" + id)
//       .then((response) => response.json())
//       .then((reservation) => dispatch(cancelReservation(reservation)))
//   };
// }
