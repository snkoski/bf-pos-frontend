import { CURRENT_TAB } from "./types";

export const changeCurrentTab = (tab) => {
  // debugger
  return {type: CURRENT_TAB, tab: tab}
}
