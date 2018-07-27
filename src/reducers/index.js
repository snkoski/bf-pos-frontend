import { combineReducers } from "redux";
import { reservations, reservationsHasErrored, reservationsIsLoading } from "./reservations";
import { waitlist, waitlistHasErrored, waitlistIsLoading } from "./waitlist";
import { static_tables, tables } from "./tables";
import { customers } from "./customers";

export default combineReducers({
  reservations,
  reservationsHasErrored,
  reservationsIsLoading,
  waitlist,
  waitlistHasErrored,
  waitlistIsLoading,
  static_tables,
  tables,
  customers
});
