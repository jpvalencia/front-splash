const _ = require('lodash');
const auth = require('../services/auth');

module.exports =  function(req, res, following) {
  const token = _.get(req, 'headers.authorization');
  if(token) {
    auth.validateToken(token)
    .then((result) => {
      if(result.status === 200){
        console.log("Token Validado")
        following();
        return
      }
      else {
        return res.status(401).send();
        following();
      }
    })
    .catch((e) => {
      console.log("Error validando token", e);
      return res.status(401).send();
      following();
    });
  }
  else {
    return res.status(401).send();
    following();

  }
}
