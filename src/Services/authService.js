import http from "./httpService";
import apiConfig from "../Utils/config.json";

const apiEndPoint = `${apiConfig.apiUrl}/login`;
const staffEndPoint = `${apiConfig.apiUrl}centerInCharge/get/allStudents/501`;

export function login(email, password) {
  return http.get(`${apiEndPoint}/${email}/${password}`);
}

export function staff(){
  return http.get(staffEndPoint)
}

export function deleteStaff(){
  return http.delete(staffEndPoint)
}

export default {
  login,
  staff,
  deleteStaff
};
