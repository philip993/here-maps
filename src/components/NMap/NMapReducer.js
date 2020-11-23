import { INPUT_SEARCH_ADDRESS, MAP_EXP } from "./NMapActionTypes";

const initialState = {
  term: "",
  mapObj: null,
};

export const NMapReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_SEARCH_ADDRESS:
      return {
        ...state,
        term: action.payload,
      };
    case MAP_EXP:
      return {
        ...state,
        mapObj: action.payload,
      };
    default:
      return state;
  }
};
