import * as types from './actionTypes';
export function getDataUser(value) {
  return {
    type: types.GET_DATA_USER,
    payload: value,
  };
}

export function ErrorShow(value) {
  return {
    type: types.GET_DATA_USER_FAILURE,
    payload: value,
  };
}
