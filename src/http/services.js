import api from "./axios";
import Cookies from "js-cookie";

const services = {
  login(user, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.post(`https://localhost:8000/login`, {
          user,
          password,
        });
        Cookies.set("token", "token-123456");
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  },
  signup(name, lastname, phone, email) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.post(`https://localhost:8000/signup`, {
          name,
          lastname,
          phone,
          email,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default services;
