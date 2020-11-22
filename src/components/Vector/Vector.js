import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetVectorMap, setColumn, setRow } from './VectorActions';

const Vector = () => {
  const { currentVectorMap, currentRow, currentCollumn } = useSelector(
    (state) => state.VectorReducer,
  );
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState();

  const handleShowVector = () => {
    setClicked(true);
    dispatch(requestGetVectorMap());
  };

  const handleXposition = (e) => {
    dispatch(setColumn(e.target.value));
    console.log(e.target.value);
  };

  const handleYposition = (e) => {
    dispatch(setRow(e.target.value));
  };

  return (
    <div>
      <h1>Vector Map</h1>
      {!clicked ? (
        'no vector map'
      ) : (
        <img src={currentVectorMap} alt="vector map" />
      )}
      <button onClick={handleShowVector}>Show Vector</button>
      <div id="t" style={{ width: '100%', height: '100%' }}></div>
      <div id="map"></div>
      <input
        onChange={handleXposition}
        value={currentCollumn}
        placeholder="COLUMN"
      />
      <input onChange={handleYposition} value={currentRow} placeholder="ROW" />
    </div>
  );
};

export default Vector;
