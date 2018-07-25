import { STATIC_TABLE_FETCH_SUCCESS, SEAT_TABLE, CLEAR_TABLE } from './types';
import { patchFetch } from "../adapters/adapters";

export const staticTableFetch = (tables) => {
  return {
    type: STATIC_TABLE_FETCH_SUCCESS,
    static_tables: tables
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
    // dispatch(reservationsIsLoading(true));

    fetch(url)
      // .then((response) => {
      //   if(!response.ok) {
      //     throw Error(response.statusText);
      //   }
        // dispatch(reservationsIsLoading(false));

        // return response;
      // })
      .then((response) => response.json())
      .then((tables) => dispatch(staticTableFetch(tables)))
      // .catch(() => dispatch(reservationsHasErrored(true)));
  };
}
