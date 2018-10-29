const axios = require('axios');

const getRequest = (url) => axios.get(url)

const postRequest = (url, body) => axios.post(url, body)

const deleteRequest = (url) => axios.delete(url)


export {
  getRequest,
  postRequest,
  deleteRequest,
};
