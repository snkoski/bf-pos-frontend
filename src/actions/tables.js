import {
  STATIC_TABLE_FETCH_SUCCESS,
  STATIC_SEAT_TABLE,
  STATIC_CLEAR_TABLE,
  CREATE_TABLE,
  TABLE_FETCH_SUCCESS,
  CLEAR_TABLE,
  SELECT_TABLE
} from './types';
import {patchFetch, createFetch} from '../adapters/adapters';

export const staticTableFetch = (tables) => {
  return {type: STATIC_TABLE_FETCH_SUCCESS, static_tables: tables}
}

export const tableFetch = (tables) => {
  return {type: TABLE_FETCH_SUCCESS, tables: tables}
}

export const staticSeatTable = (id) => {
  return {type: STATIC_SEAT_TABLE, id: id, occupied: true}
}

export const staticClearTable = (id) => {
  return {type: STATIC_CLEAR_TABLE, id: id, occupied: false}
}

export const clearTable = (id) => {
  return {type: CLEAR_TABLE, id: id, occupied: false}
}

export const createTable = (table) => {
  return {type: CREATE_TABLE, tables: table}
}

export const lastTable = (tables) => {
  return {type: TABLE_FETCH_SUCCESS, table: tables}
}

export const changeLastTable = (table) => {
  return {type: CREATE_TABLE, table: table}
}

export const selectedTable = (table) => {
  return {type: SELECT_TABLE, table: table}
}

export const staticSeatTableFetch = (id) => {
  return(dispatch) => {
    patchFetch("http://localhost:3000/api/v1/static_tables/", id, {occupied: true}).then(result => dispatch(staticSeatTable(id)))
  }
}

export const staticClearTableFetch = (id) => {
  return(dispatch) => {
    patchFetch("http://localhost:3000/api/v1/static_tables/", id, {occupied: false}).then(result => dispatch(staticClearTable(id)))
  }
}

export const clearTableFetch = (id) => {
  return(dispatch) => {
    patchFetch("http://localhost:3000/api/v1/tables/", id, {occupied: false}).then(result => dispatch(clearTable(id)))
  }
}

export const staticTablesFetchData = (url) => {
  return(dispatch) => {
    fetch(url).then((response) => response.json()).then((tables) => dispatch(staticTableFetch(tables)))
  };
}

export const tablesFetchData = (url) => {
  return(dispatch) => {
    fetch(url).then((response) => response.json()).then((tables) => dispatch(tableFetch(tables)))
  };
}
//
export const newTableFetch = (table) => {

  return(dispatch) => {
    createFetch("http://localhost:3000/api/v1/tables", table).then(result => dispatch(createTable(result)))
  }
}
