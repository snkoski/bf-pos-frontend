import { CHANGE_LOCATION } from './types';

export const changeLocation = (location) => {
    return {
      type: CHANGE_LOCATION,
      location: location
    }
}
