import { CANCEL_RESERVATION } from '../actions/types'

export function reservation(state = {}, action) {
  switch (action.type) {
    case CANCEL_RESERVATION:

      return {...state,
          cancelled: action.cancelled};


    default:
      return state;
    }
  }
