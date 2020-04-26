import http from "./httpService";
import config from "../config/default.json";

const moviesEndpoint = config.apiEndpoint + "genres";

export function getGenres() {
  return http.get(moviesEndpoint);
}
