const axios = require('axios');
const authHeader =  require("./auth.header");

const API_URL = "http://localhost:3000/api/v1/";

const token = JSON.parse(localStorage.getItem("token"));

exports.getPostsContent = () => {
  return axios.get(API_URL + "posts");
};

exports.getAdminBoard = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};

exports.makePost = (title, content) => {
  return axios.post(
    API_URL + "posts",
    {
      title,
      content,
    },
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  );
};
