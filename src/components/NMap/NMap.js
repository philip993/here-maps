import React, { useLayoutEffect, useRef } from "react";
import H from "@here/maps-api-for-javascript";
import { useSelector, useDispatch } from "react-redux";
import { mapExp } from "./NMapActions";
import Geocode from "../Geocode/Geocode";
import Routing from "../Routing/Routing";

const NMap = () => {
  const mapRef = useRef(null);
  const API_KEY = "";
  const { term, mapObj } = useSelector((state) => state.NMapReducer);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (!mapRef.current) return;
    const platform = new H.service.Platform({
      apikey: API_KEY,
    });

    const defaultLayers = platform.createDefaultLayers();

    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1,
    });

    dispatch(mapExp(hMap));

    console.log(hMap);

    // INTERACTIVITY
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
    // UI CONTROLS
    const ui = new H.ui.UI.createDefault(hMap, defaultLayers);

    return () => {
      hMap.dispose();
    };
  }, [mapRef, term]);

  return (
    <div>
      <Geocode />
      <Routing />
      <div
        ref={mapRef}
        style={{ width: "500px", height: "500px", margin: "auto" }}
      />
    </div>
  );
};

export default NMap;
