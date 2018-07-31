import { CURRENT_TAB } from "../actions/types"

export function currentTab(state = "tables", action) {

  switch (action.type) {
     case CURRENT_TAB:
     let tabState = action.tab
      return tabState;

       default:
        return state;
  }
}
