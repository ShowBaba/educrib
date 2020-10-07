const axios = require("axios");

const API_URL = "http://localhost:3000/api/v1/users/";

exports.login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      localStorage.setItem("token", JSON.stringify(response.data.token));
    });
};

exports.logout = () => {
  localStorage.removeItem("token");
};

exports.register = (username, email, firstname, lastname, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    firstname,
    lastname,
    password,
  });
};

exports.getCurrentUser = () => {
  return localStorage.getItem("token");
};
