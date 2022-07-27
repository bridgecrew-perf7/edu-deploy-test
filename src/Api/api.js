import axios from "axios";

const url = "https://server-edu-d24.herokuapp.com/api";

export const registerCourse = async (data) => {
  return await axios
    .post(`${url}/register-course`, data)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};
