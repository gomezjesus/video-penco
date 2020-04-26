import http from "./httpService";
import config from "../config/default.json";

const moviesEndpoint = config.apiEndpoint + "movies";

export function getMovies() {
  return http.get(moviesEndpoint);
}

export function deleteMovie(movieId) {
  return http.delete(moviesEndpoint + "/" + movieId);
}
