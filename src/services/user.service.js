const axios = require('axios');

const API_URL = "https://educrib1.herokuapp.com/api/v1/";

// access saved token from local storage
const token = JSON.parse(localStorage.getItem("token"));

exports.getPostsContent = () => {
  return axios.get(API_URL + "posts");
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
