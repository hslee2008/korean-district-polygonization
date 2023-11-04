import { findExactMatch, getCenter } from "../index.js";

const location = "경기도 성남시분당구 판교동"
const coordinates = findExactMatch(location, "object");

console.log(getCenter(coordinates));
