import axios from 'axios';
import {
  DECREMENT_ZOOM_LEVEL,
  FAILURE_LOAD_MAP,
  GET_CURRENT_LATITUDE,
  GET_CURRENT_LONGITUDE,
  INCREMENT_ZOOM_LEVEL,
  SET_NEW_LATITUDE,
  SET_NEW_LONGITUDE,
  SUCCESS_LOAD_MAP,
} from './MapActionTypes';
const API_KEY = '';

export const requestGetMap = () => {
  return (dispatch, getState) => {
    let {
      currentLatitude,
      currentLongitude,
      currentZoomLevel,
    } = getState().MapReducer;
    return axios
      .get(
        `https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=${API_KEY}&c=${currentLatitude},${currentLongitude}&z=${currentZoomLevel}`,
        { responseType: 'blob' },
      )
      .then((response) => {
        const url = URL.createObjectURL(response.data);
        console.log(response);
        dispatch({
          type: SUCCESS_LOAD_MAP,
          payload: url,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_LOAD_MAP,
        });
      });
  };
};

export const requestGetCurrentLatitude = () => {
  return (dispatch, getState) => {
    let { currentLatitude } = getState().MapReducer;

    const cb = (x) => {
      console.log(x.coords.latitude);
      currentLatitude = x.coords.latitude;

      dispatch({
        type: GET_CURRENT_LATITUDE,
        payload: currentLatitude,
      });
    };
    let currentLocation = navigator.geolocation.getCurrentPosition(cb);
  };
};

export const requestGetCurrentLongitude = () => {
  return (dispatch, getState) => {
    let { currentLongitude } = getState().MapReducer;

    const cb = (x) => {
      console.log(x.coords.longitude);
      currentLongitude = x.coords.longitude;

      dispatch({
        type: GET_CURRENT_LONGITUDE,
        payload: currentLongitude,
      });
    };
    let currentLocation = navigator.geolocation.getCurrentPosition(cb);
  };
};

export const incrementZoomLevel = (e) => {
  return {
    type: INCREMENT_ZOOM_LEVEL,
  };
};

export const decrementZoomLevel = (e) => {
  return {
    type: DECREMENT_ZOOM_LEVEL,
  };
};

export const setNewLatitude = (e) => {
  return {
    type: SET_NEW_LATITUDE,
    payload: e,
  };
};

export const setNewLongitude = (e) => {
  return {
    type: SET_NEW_LONGITUDE,
    payload: e,
  };
};
