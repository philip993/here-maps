import { INPUT_SEARCH_ADDRESS, MAP_EXP } from "./NMapActionTypes";

export const inputSearchAddress = (e) => {
  return {
    type: INPUT_SEARCH_ADDRESS,
    payload: e,
  };
};

export const mapExp = (e) => {
  return (dispatch, getState) => {
    dispatch({
      type: MAP_EXP,
      payload: e,
    });
  };
};
