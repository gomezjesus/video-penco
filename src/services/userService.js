import http from "./httpService";
import config from "../config/default.json";

const userEndpoint = "users";

export function Register(user) {
  return http.post(userEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
