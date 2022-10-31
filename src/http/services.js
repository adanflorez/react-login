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
        Cookies.set("token", "token-123456")
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default services;
