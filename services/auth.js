const axios = require('axios');
let url = 'https://auth-whdagkqfxi.now.sh/auth/validate';
if(process.env.NODE_ENV !== 'production') {
  url = 'http://localhost:3001/auth/validate';
}
module.exports = {
  validateToken: (token) => {
    return axios.get(url, {
      headers: {'Authorization': 'Basic '+  token}
    });
  }
};
