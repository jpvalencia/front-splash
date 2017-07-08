const axios = require('axios');
let urlUser = 'http://localhost:3004';
if(process.env.NODE_ENV === 'production') {
  urlUser = 'https://users-fddmsdfcbf.now.sh';
}
module.exports = {
  projects: (email, token) => {
    return axios.get(urlUser + "/projects", {  params:{
        email : email
      },
      headers: {
        authorization: token
      }});
  },
  financial_statement: (email, token) => {
    return axios.get(urlUser + "/financial-statement", {  params:{
        email : email
      },
      headers: {
        authorization: token
      }});
  }
};
