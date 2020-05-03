import http from "./httpService";
import config from "../config/default.json";

const moviesEndpoint = "movies";

function movieUrl(id) {
  return `${moviesEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(moviesEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }
  return http.post(moviesEndpoint, movie);
}
export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
