import { STATIC_TABLE_FETCH_SUCCESS, SEAT_TABLE, CLEAR_TABLE, CREATE_TABLE, TABLE_FETCH_SUCCESS } from './types';
import { patchFetch, createFetch } from "../adapters/adapters";

export const staticTableFetch = (tables) => {
  return {
    type: STATIC_TABLE_FETCH_SUCCESS,
    static_tables: tables
  }
}

export const tableFetch = (tables) => {
  return {
    type: TABLE_FETCH_SUCCESS,
    tables: tables
  }
}

export const seatTable = (id) => {
  return {
    type: SEAT_TABLE,
    id: id,
    occupied: true
  }
}

export const clearTable = (id) => {
  return {
    type: CLEAR_TABLE,
    id: id,
    occupied: false
  }
}

export const createTable = (table) => {
  return {
    type: CREATE_TABLE,
    tables : table
  }
}

export const seatTableFetch = (id) => {
  return(dispatch) => {
   patchFetch("http://localhost:3000/api/v1/static_tables/", id, { occupied: true })
  .then(result => dispatch(seatTable(id)))
}
}

export const clearTableFetch = (id) => {
  return(dispatch) => {
   patchFetch("http://localhost:3000/api/v1/static_tables/", id, { occupied: false })
  .then(result => dispatch(clearTable(id)))
}
}

export const staticTablesFetchData = (url) => {
  return(dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((tables) => dispatch(staticTableFetch(tables)))
  };
}

export const tablesFetchData = (url) => {
  return(dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((tables) => dispatch(tableFetch(tables)))
  };
}
//
export const newTableFetch = (table) => {
  return(dispatch) => {
    createFetch("http://localhost:3000/api/v1/tables", table)
    .then(result => dispatch(createTable(result)))
  }
}
// export const newReservation = (reservation) => {
//
//     const options = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(reservation)
//     }
//
//     return(dispatch) => {
//       dispatch(reservationsIsLoading(true));
//
//       fetch("http://localhost:3000/api/v1/reservations", options)
//
//       .then((response) => {
//         if(!response.ok) {
//           throw Error(response.statusText);
//         }
//         dispatch(reservationsIsLoading(false));
//
//         return response;
//       })
//
//         .then(response => response.json())
//          .then(result => {
//            console.log(result)
//           dispatch(createReservation(result))
//         })
//     };
//   }
