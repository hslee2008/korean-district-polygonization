function toArray(obj) {
  const array = [];

  obj.forEach((item) => array.push([item.lng, item.lat]));

  return array;
}

function toObject(array) {
  const object = [];

  array.forEach((item) =>
    object.push({
      lng: item[0],
      lat: item[1],
    })
  );

  return object;
}

function to(data, type) {
  if (type === "array") {
    if (typeof data[0] === "object") return toArray(data);
    else return data;
  }
  if (type === "object") {
    if (typeof data[0] === "array") return toObject(data);
    else return data;
  }
}

export { toArray, toObject, to };
