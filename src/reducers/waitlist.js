import {
  WAITLIST_HAS_ERRORED,
  WAITLIST_IS_LOADING,
  WAITLIST_FETCH_DATA_SUCCESS,
  CANCEL_WAITLIST,
  NEW_WAITLIST,
  SEAT_WAITLIST
} from '../actions/types';

export function waitlistHasErrored(state = false, action) {
  switch (action.type) {
    case WAITLIST_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function waitlistIsLoading(state = false, action) {
  switch (action.type) {
    case WAITLIST_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function waitlist(state = [], action) {

  switch (action.type) {

    case WAITLIST_FETCH_DATA_SUCCESS:
      let firstWaitlist = action.waitlist.filter(waitlist => {
        return (waitlist.cancelled === false && waitlist.end_waitlist === null)
      })

      return firstWaitlist;

    case NEW_WAITLIST:
      return [
        ...state,
        action.waitlist
      ];

    case CANCEL_WAITLIST:
      let cancelWaitlist = state.filter(waitlist => {
        return waitlist.id !== action.id
      })
      return cancelWaitlist;

    case SEAT_WAITLIST:
      let seatedWaitlist = state.filter(waitlist => {
        return waitlist.id !== action.id
      })
      return seatedWaitlist;

    default:
      return state;
  }
}
