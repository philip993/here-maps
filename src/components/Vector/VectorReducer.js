import {
  SUCCESS_LOAD_VECTOR_MAP,
  FAILURE_LOAD_VECTOR_MAP,
  SET_COLUMN,
  SET_ROW,
} from './VectorActionTypes';

const initialState = {
  currentVectorMap: [],
  currentVectorMapError: null,
  currentRow: 759,
  currentCollumn: 1147,
};

export const VectorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOAD_VECTOR_MAP:
      return {
        ...state,
        currentVectorMap: action.payload,
        currentVectorMapError: false,
      };
    case FAILURE_LOAD_VECTOR_MAP:
      return {
        ...state,
        currentVectorMap: null,
        currentVectorMapError: true,
      };
    case SET_COLUMN:
      return {
        ...state,
        currentCollumn: action.payload,
      };
    case SET_ROW:
      return {
        ...state,
        currentRow: action.payload,
      };
    default:
      return state;
  }
};
