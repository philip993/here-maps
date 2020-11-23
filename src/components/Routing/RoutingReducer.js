import { START_ROUTING_POINT, END_ROUTING_POINT } from "./RoutingActionTypes";

const initialState = {
  startPoint: "",
  endPoint: "",
};

export const RoutingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_ROUTING_POINT:
      return {
        ...state,
        startPoint: action.payload,
      };
    case END_ROUTING_POINT:
      return {
        ...state,
        endPoint: action.payload,
      };
    default:
      return state;
  }
};
