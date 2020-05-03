import http from "./httpService";
import config from "../config/default.json";

const moviesEndpoint = "genres";

export function getGenres() {
  return http.get(moviesEndpoint);
}
