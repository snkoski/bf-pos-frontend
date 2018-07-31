import { CHANGE_TAB, CHANGE_DEPARTMENT } from "./types";

export const changeCurrentTab = (tab) => {
  // debugger
  return {type: CHANGE_TAB, tab: tab}
}

export const changeDepartment = (department) => {
  return {type: CHANGE_DEPARTMENT, department: department}
}
