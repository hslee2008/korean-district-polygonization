import polygon from "./polygon.json" assert { type: "json" };
import { to } from "./type.js";

const data = polygon.features;

function findExactMatch(address, type = "array") {
  if (!address) return Error("검색어를 입력해주세요");

  const result = data.filter((item) => item.properties.adm_nm === address);

  if (result.length === 0) return Error("검색 결과가 없습니다");
  if (result.length > 1) return Error("검색 결과가 2개 이상입니다");

  return to(result[0].geometry.coordinates[0][0], type);
}

function getProperties(address) {
  if (!address) return Error("검색어를 입력해주세요");

  const result = data.filter((item) => item.properties.adm_nm === address);

  if (result.length === 0) return Error("검색 결과가 없습니다");
  if (result.length > 1) return Error("검색 결과가 2개 이상입니다");

  return result[0].properties;
}

function findAllWithsggnm(sggnm) {
  if (!sggnm) return Error("검색어를 입력해주세요");

  const result = data.filter((item) => item.properties.sgg_nm === sggnm);

  if (result.length === 0) return Error("검색 결과가 없습니다");

  return result;
}

export { findExactMatch, getProperties };
