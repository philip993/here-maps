import { START_ROUTING_POINT, END_ROUTING_POINT } from "./RoutingActionTypes";

export const startRoutingPoint = (e) => {
  return {
    type: START_ROUTING_POINT,
    payload: e,
  };
};

export const endRoutingPoint = (e) => {
  return {
    type: END_ROUTING_POINT,
    payload: e,
  };
};
