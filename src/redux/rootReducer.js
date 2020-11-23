import { combineReducers } from "redux";
import { MapReducer } from "../components/Map/MapReducer";
import { VectorReducer } from "../components/Vector/VectorReducer";
import { NMapReducer } from "../components/NMap/NMapReducer";
import { RoutingReducer } from "../components/Routing/RoutingReducer";

const rootReducer = combineReducers({
  MapReducer,
  VectorReducer,
  NMapReducer,
  RoutingReducer,
});

export default rootReducer;
