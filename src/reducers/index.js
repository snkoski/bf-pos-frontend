import { combineReducers } from "redux";
import { reservations, reservationsHasErrored, reservationsIsLoading } from "./reservations";
import { waitlist, waitlistHasErrored, waitlistIsLoading } from "./waitlist";
import { reservation } from "./reservation";
import { static_tables, tables } from "./tables";

export default combineReducers({
  reservation,
  reservations,
  reservationsHasErrored,
  reservationsIsLoading,
  waitlist,
  waitlistHasErrored,
  waitlistIsLoading,
  static_tables,
  tables
});
