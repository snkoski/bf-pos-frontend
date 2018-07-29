import { WAITLIST_HAS_ERRORED, WAITLIST_IS_LOADING, WAITLIST_FETCH_DATA_SUCCESS, CANCEL_WAITLIST} from './types';

export function waitlistHasErrored(bool) {
  return {
    type: WAITLIST_HAS_ERRORED,
    hasErrored: bool
  };
}

export function waitlistIsLoading(bool) {
  return {
    type: WAITLIST_IS_LOADING,
    isLoading: bool
  };
}

export function waitlistFetchDataSuccess(waitlist) {
  return {
    type: WAITLIST_FETCH_DATA_SUCCESS,
    waitlist
  };
}

export function waitlistFetchData(url) {
  return(dispatch) => {
    dispatch(waitlistIsLoading(true));

    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(waitlistIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((waitlist) => dispatch(waitlistFetchDataSuccess(waitlist)))
      .catch(() => dispatch(waitlistHasErrored(true)));
  };
}

// export const cancelWaitlistFetch = (id) => {
//   return(dispatch) => {
//    patchFetch("http://localhost:3000/api/v1/waitlists/", id, { cancelled: true })
//   .then(result => dispatch(cancelReservation(id)))
// }
// }
