import polygonClipping from "polygon-clipping";
import { to } from "./type.js";

function getCenter(coordinates, type = "array") {
  const isArray = Array.isArray(coordinates[0]);
  const length = coordinates.length;

  let lng = 0;
  let lat = 0;

  coordinates.forEach((item) => {
    lng += isArray ? item[0] : item.lng;
    lat += isArray ? item[1] : item.lat;
  });

  return to([lng / length, lat / length], type);
}

function combineCoordinates(coordinates) {
  return polygonClipping.xor.apply(null, coordinates);
}

export { getCenter, combineCoordinates };
