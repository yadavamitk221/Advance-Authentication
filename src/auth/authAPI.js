import axiosInstance from "../app/API";

export function createUser(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance.post("/auth/signup", userData, {});

      const data = response.data;
      localStorage.setItem("token", response.data.token);
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}

export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("loginInfo", loginInfo);
      const response = await axiosInstance.post("/auth/login", loginInfo);

      localStorage.setItem("token", response.data.token);
      resolve({ data: response.data });
    } catch (error) {
      reject(error.response);
    }
  });
}

