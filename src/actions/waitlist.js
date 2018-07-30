import { WAITLIST_HAS_ERRORED, WAITLIST_IS_LOADING, WAITLIST_FETCH_DATA_SUCCESS, CANCEL_WAITLIST, NEW_WAITLIST, SEAT_WAITLIST } from './types';
import { patchFetch, createFetch } from '../adapters/adapters';

export const waitlistHasErrored = (bool) => {
  return {
    type: WAITLIST_HAS_ERRORED,
    hasErrored: bool
  };
}

export const waitlistIsLoading = (bool) => {
  return {
    type: WAITLIST_IS_LOADING,
    isLoading: bool
  };
}

export const waitlistFetchDataSuccess = (waitlist) => {
  return {
    type: WAITLIST_FETCH_DATA_SUCCESS,
    waitlist
  };
}

export const cancelWaitlist = (id) => {
  return {
    type: CANCEL_WAITLIST,
    id: id,
    cancelled: true
  };
}

export const createWaitlist = (waitlist) => {
  return {type: NEW_WAITLIST, waitlist: waitlist};
}

export const seatWaitlist = (id) => {
  return {type: SEAT_WAITLIST, id: id}
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

export const newWaitlistFetch = (waitlist) => {
  return(dispatch) => {
    createFetch("http://localhost:3000/api/v1/waitlists",
  waitlist).then(result => dispatch(createWaitlist(result)))
  }
}

export const cancelWaitlistFetch = (id) => {
  return(dispatch) => {
   patchFetch("http://localhost:3000/api/v1/waitlists/", id, { cancelled: true })
  .then(result => dispatch(cancelWaitlist(id)))
}
}

export const seatWaitlistFetch = (id) => {

  return(dispatch) => {
   patchFetch("http://localhost:3000/api/v1/waitlists/", id, { end_waitlist: new Date() })
  .then(result => dispatch(seatWaitlist(id)))
}
}
