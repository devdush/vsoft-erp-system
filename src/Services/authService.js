import http from "./httpService";
import apiConfig from "../App/config.json";

const apiEndPoint = `${apiConfig.apiUrl}/login`;

export function login(email, password) {
  return http.get(`${apiEndPoint}/${email}/${password}`);
}

export default {
  login,
};
