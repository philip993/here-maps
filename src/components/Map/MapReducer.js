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

const initialState = {
  currentMap: [],
  currentMapErrors: null,
  currentLatitude: '',
  currentLongitude: '',
  currentZoomLevel: 16,
  newLatitude: '',
  newLongitude: '',
};

export const MapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOAD_MAP:
      return {
        ...state,
        currentMap: action.payload,
        currentMapErrors: false,
      };
    case FAILURE_LOAD_MAP:
      return {
        ...state,
        currentMap: null,
        currentMapErrors: true,
      };
    case GET_CURRENT_LATITUDE:
      return {
        ...state,
        currentLatitude: action.payload,
      };
    case GET_CURRENT_LONGITUDE:
      return {
        ...state,
        currentLongitude: action.payload,
      };
    case INCREMENT_ZOOM_LEVEL:
      return {
        ...state,
        currentZoomLevel: state.currentZoomLevel + 1,
      };
    case DECREMENT_ZOOM_LEVEL:
      return {
        ...state,
        currentZoomLevel: state.currentZoomLevel - 1,
      };
    case SET_NEW_LATITUDE:
      return {
        ...state,
        currentLatitude: action.payload,
      };
    case SET_NEW_LONGITUDE:
      return {
        ...state,
        currentLongitude: action.payload,
      };
    default:
      return state;
  }
};
