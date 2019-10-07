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

export function add_my_favorite(value) {
  return {
    type: types.ADD_MY_FAVORITE,
    payload: value,
  };
}
