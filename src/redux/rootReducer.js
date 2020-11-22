import { combineReducers } from 'redux';
import { MapReducer } from '../components/Map/MapReducer';
import { VectorReducer } from '../components/Vector/VectorReducer';

const rootReducer = combineReducers({
  MapReducer,
  VectorReducer,
});

export default rootReducer;
