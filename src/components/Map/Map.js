import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementZoomLevel,
  incrementZoomLevel,
  requestGetCurrentLatitude,
  requestGetCurrentLongitude,
  requestGetMap,
} from './MapActions';

const Map = () => {
  const { currentMap, currentLatitude, currentLongitude } = useSelector(
    (state) => state.MapReducer,
  );
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState();

  const handleMap = () => {
    dispatch(requestGetMap());
    setClicked(true);
  };

  const handleIncrementZoom = (e) => {
    dispatch(incrementZoomLevel());
    dispatch(requestGetMap());
  };

  const handleDecrementZoom = (e) => {
    dispatch(decrementZoomLevel());
    dispatch(requestGetMap());
  };

  const handlePositionMap = (e) => {
    console.log(e);
  };

  useEffect(() => {
    dispatch(requestGetCurrentLatitude());
    dispatch(requestGetCurrentLongitude());
  }, []);

  return (
    <div>
      <h1>MAP</h1>
      <button onClick={handleMap}>Show Map</button>

      {!clicked ? (
        'no map'
      ) : (
        <img onMouseUpCapture={handlePositionMap} src={currentMap} alt="map" />
      )}

      <div>
        <button onClick={handleIncrementZoom}>Zoom In</button>
        <button onClick={handleDecrementZoom}>Zoom Out</button>
      </div>
    </div>
  );
};

export default Map;
