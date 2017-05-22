const axios = require('axios');
const urlAuth = 'http://localhost:3001';
const tokenActivateAccountUrl = '/auth/validate-token-activate-account';
const validateToken = '/auth/validate';
const activateAccountUrl = '/activate-account';
const activateAccountAuth = '/auth/activate';
const activateAccountLogin = '/auth/login';
if(process.env.NODE_ENV === 'production') {
  urlAuth = 'https://auth-nzushmwbyg.now.sh';
}
module.exports = {
  validateTokenActivateAccount: (email, token) => {
    return axios.get(urlAuth+tokenActivateAccountUrl, {
      params: { email, token }
    });
  },
  activateAccountAuth: (email, password, token) => {
    return axios.post(urlAuth + activateAccountAuth, { email, token, password });
  },
  login: (email, password, token) => {
    return axios.post(urlAuth + activateAccountLogin, { email, password });
  },
  activateAccount: (email, password, token) => {
    return axios.post(activateAccountUrl, { email, token, password });
  },
  validateToken: (token) => {
    return axios.get(urlAuth+validateToken, {
      headers: {
        Authorization: "Basic "+ token
      }
    });
  }
};
