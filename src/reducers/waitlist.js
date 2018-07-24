import { WAITLIST_HAS_ERRORED, WAITLIST_IS_LOADING, WAITLIST_FETCH_DATA_SUCCESS } from "../actions/types";

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

export function waitlist(state =[], action) {
  switch (action.type) {
    case WAITLIST_FETCH_DATA_SUCCESS:
      return action.waitlist;
    default:
      return state;
  }
}
