import {CHANGE_TAB, CHANGE_DEPARTMENT} from '../actions/types'

export function currentTab(state = 'tables', action) {

  switch (action.type) {
    case CHANGE_TAB:
      return action.tab;

    default:
      return state;
  }
}

export function currentDepartment(state = "foh", action) {
  switch (action.type) {
    case CHANGE_DEPARTMENT:
      return action.department;

    default:
      return state;
  }
}
