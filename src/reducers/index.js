import { combineReducers } from "redux";
import { reservations, reservationsHasErrored, reservationsIsLoading } from "./reservations";
import { waitlist, waitlistHasErrored, waitlistIsLoading } from "./waitlist";
import { static_tables, tables, lastTable, selectedTable } from "./tables";
import { customers } from "./customers";
import { recipes } from "./recipes";
import { orders } from "./orders";
import { currentTab, currentDepartment } from "./navBar";

export default combineReducers({
  reservations,
  reservationsHasErrored,
  reservationsIsLoading,
  waitlist,
  waitlistHasErrored,
  waitlistIsLoading,
  static_tables,
  tables,
  customers,
  lastTable,
  recipes,
  orders,
  selectedTable,
  currentTab,
  currentDepartment
});
