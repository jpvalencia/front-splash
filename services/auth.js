const axios = require('axios');
let urlAuth = 'http://localhost:3001';
let tokenActivateAccountUrl = '/auth/validate-token-activate-account';
let activateAccountUrl = '/activate-account';
let activateAccountAuth = '/auth/activate';
let activateAccountLogin = '/auth/login';
if(process.env.NODE_ENV === 'production') {
  urlAuth = 'https://auth-lbnpotpvuf.now.sh';
}
module.exports = {
  validateToken: (email, token) => {
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
  }
};
