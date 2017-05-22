const axios = require('axios');
const urlPrinter = 'http://localhost:3002';
const sendQuotes = '/sendQuotes';
if(process.env.NODE_ENV === 'production') {
  urlPrinter = 'https://auth-lbnpotpvuf.now.sh';
}
module.exports = {
  sendQuotes: (data) => {
    return axios.post(urlPrinter + sendQuotes, {data});
  }
};
