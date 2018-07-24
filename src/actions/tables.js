import { STATIC_TABLE_FETCH_SUCCESS } from './types';

export const staticTableFetch = (tables) => {
  return {
    type: STATIC_TABLE_FETCH_SUCCESS,
    static_tables: tables
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
