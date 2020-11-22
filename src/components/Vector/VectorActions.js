import {
  FAILURE_LOAD_VECTOR_MAP,
  SET_COLUMN,
  SET_ROW,
  SUCCESS_LOAD_VECTOR_MAP,
} from './VectorActionTypes';
import axios from 'axios';
const API_KEY = '';

export const requestGetVectorMap = () => {
  return (dispatch, getState) => {
    let { currentRow, currentCollumn } = getState().VectorReducer;
    return axios
      .get(
        `https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/11/${currentCollumn}/${currentRow}/256/png8?apiKey=${API_KEY}`,
        { responseType: 'blob' },
      )
      .then((response) => {
        console.log(response);
        const url = URL.createObjectURL(response.data);
        dispatch({
          type: SUCCESS_LOAD_VECTOR_MAP,
          payload: url,
          // payload: response.data
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_LOAD_VECTOR_MAP,
        });
      });
  };
};

export const setColumn = (e) => {
  return {
    type: SET_COLUMN,
    payload: e,
  };
};

export const setRow = (e) => {
  return {
    type: SET_ROW,
    payload: e,
  };
};
