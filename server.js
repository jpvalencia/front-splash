const express = require('express')
const next = require('next');
const bodyParser = require('body-parser');
const _  = require('lodash');
const auth = require('./services/auth');
const emailService = require('./services/email');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.get('/validate-account', (req, res, following) => {
    const email = _.get(req, 'query.email');
    const token = _.get(req, 'query.token');
    if(token && email) {
      auth.validateToken(email, token)
      .then((result) => {
        return app.render(req, res, '/validate-account', req.query)
        following();
      })
      .catch((e) => {
        return app.render(req, res, '/login', req.query);
        following();
      });
      return;
      following();
    }
    return app.render(req, res, '/index', req.query);
    following();
  });

  server.post('/activate-account', (req, res, following) => {
    const email = _.get(req, 'body.email');
    const token = _.get(req, 'body.token');
    const password = _.get(req, 'body.password');
    if(token && email && token) {
      auth.activateAccountAuth(email, password, token)
      .then((result) => {
        try{
          emailService.sendActivateAccountEmail(email);
        }
        catch(e){
          console.log("ERROR ENVIANDO EL MAIL DE CONFIRMACION", e)
        }
        return res.status(200).send();
        following();
      })
      .catch((e) => {
        console.log("ERROR ACTIVANDO LA CUENTA", e)
        res.status(500).send();
        following();
      });
    }
    else {
      res.status(401).send();
      following();
    }

  });

  server.get('/dashboard', (req, res, following) => {
    let authorization = _.get(req, 'headers.Authorization');
    const token = authorization ? authorization.split(' ')[1]: null;
    if(token) {
      auth.validateToken(token)
      .then((result) => {
        return app.render(req, res, '/dashboard', req.query)
        following();
      })
      .catch((e) => {
        return app.render(req, res, '/login', req.query);
        following();
      });
      return;
      following();
    }
    else {
      return app.render(req, res, '/login', req.query);
      following();
    }

  }, (req, res, following) => {

  });
  server.get('/login', (req, res, following) => {
    return app.render(req, res, '/login', req.query);
    following();
  });
  server.get('/index', (req, res, following) => {
    return app.render(req, res, '/index', req.query);
    following();
  });

  server.get('*', (req, res) => {
   return handle(req, res)
 })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
