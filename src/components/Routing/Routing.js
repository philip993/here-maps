import React from "react";
import H from "@here/maps-api-for-javascript";
import { useSelector, useDispatch } from "react-redux";
import { startRoutingPoint, endRoutingPoint } from "./RoutingActions";

const Routing = () => {
  const { term, mapObj, startPoint, endPoint } = useSelector((state) => ({
    ...state.NMapReducer,
    ...state.RoutingReducer,
  }));
  const dispatch = useDispatch();

  const API_KEY = "";
  const platform = new H.service.Platform({
    apikey: API_KEY,
  });

  var routingParameters = {
    routingMode: "fast",
    transportMode: "car",
    // The start point of the route:
    origin: startPoint,
    // The end point of the route:
    destination: endPoint,
    // Include the route shape in the response
    return: "polyline",
  };

  // Define a callback function to process the routing response:
  const onResult = (result) => {
    // ensure that at least one route was found
    if (result.routes.length) {
      result.routes[0].sections.forEach((section) => {
        // Create a linestring to use as a point source for the route line
        let linestring = H.geo.LineString.fromFlexiblePolyline(
          section.polyline
        );

        // Create a polyline to display the route:
        let routeLine = new H.map.Polyline(linestring, {
          style: { strokeColor: "blue", lineWidth: 3 },
        });

        // Create a marker for the start point:
        let startMarker = new H.map.Marker(section.departure.place.location);

        // Create a marker for the end point:
        let endMarker = new H.map.Marker(section.arrival.place.location);

        // Add the route polyline and the two markers to the map:
        mapObj.addObjects([routeLine, startMarker, endMarker]);

        // Set the map's viewport to make the whole route visible:
        mapObj
          .getViewModel()
          .setLookAtData({ bounds: routeLine.getBoundingBox() });
      });
    }
  };

  // Get an instance of the routing service version 8:
  const handleSubmit = (e) => {
    e.preventDefault();
    var router = platform.getRoutingService(null, 8);

    // Call calculateRoute() with the routing parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    router.calculateRoute(routingParameters, onResult, function (error) {
      alert(error.message);
    });
  };

  const handleStartPoint = (e) => {
    dispatch(startRoutingPoint(e.target.value));
  };
  const handleEndPoint = (e) => {
    dispatch(endRoutingPoint(e.target.value));
  };

  return (
    <div>
      <h1>Routing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={startPoint}
          onChange={handleStartPoint}
          placeholder="start point"
        />
        <input
          type="text"
          value={endPoint}
          onChange={handleEndPoint}
          placeholder="end point"
        />
        <button type="submit">Calculate Route</button>
      </form>
    </div>
  );
};

export default Routing;
