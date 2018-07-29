import { combineReducers } from "redux";
import { reservations, reservationsHasErrored, reservationsIsLoading } from "./reservations";
import { waitlist, waitlistHasErrored, waitlistIsLoading } from "./waitlist";
import { static_tables, tables, lastTable } from "./tables";
import { customers } from "./customers";
import { recipes } from "./recipes";

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
  recipes
});
