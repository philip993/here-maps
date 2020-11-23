import React, { useState } from "react";
import H from "@here/maps-api-for-javascript";
import { useSelector, useDispatch } from "react-redux";
import { inputSearchAddress } from "../NMap/NMapActions";

const Geocode = () => {
  const API_KEY = "";
  const [maps, setMaps] = useState("");
  const { mapObj, term } = useSelector((state) => state.NMapReducer);
  const dispatch = useDispatch();

  const handleType = (e) => {
    setMaps(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(inputSearchAddress(maps));
  };

  const platform = new H.service.Platform({
    apikey: API_KEY,
  });

  const service = platform.getSearchService();
  service.geocode(
    {
      q: term,
    },
    (result) => {
      result.items.forEach((item) => {
        mapObj.addObject(new H.map.Marker(item.position));
      });
    }
  );

  return (
    <div>
      <h1>GEOCODE</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={maps} onChange={handleType} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Geocode;
