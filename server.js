const express = require('express')
const next = require('next');
const bodyParser = require('body-parser');
const _  = require('lodash');
const auth = require('./services/auth');
const printer = require('./services/printer');
const emailService = require('./services/email');
const user = require('./services/user');

const restrictedService = require('./middlewares/restrictedService')


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
      auth.validateTokenActivateAccount(email, token)
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

  server.post('/auth', (req, res, following) => {
    const email = _.get(req, 'body.email');
    const password = _.get(req, 'body.password');
    if(password && email) {
      auth.login(email, password)
      .then((result) => {
        res.status(200).send(result.data);
        following();
      })
      .catch((e) => {
        console.log("Error logueando", e)
        res.status(401).send();
        following();
      })
    }
    else {
      res.status(401).send();
      following();
    }
  });


  server.get('/login', (req, res, following) => {
    return app.render(req, res, '/login', req.query);
    following();
  });
  server.get('/index', (req, res, following) => {
    return app.render(req, res, '/index', req.query);
    following();
  });


  server.post('/sendQuotes', restrictedService ,(req, res, following) => {
      printer.sendQuotes(req.body)
      .then((result) => {
        res.status(200).send(result.data);
        following();
      })
      .catch((e) => {
        console.log("Error enviando el mail de cotizacion", e)
        res.status(422).send();
        following();
      })

});

server.get('/user/projects', restrictedService ,(req, res, following) => {
    const email = _.get(req, 'query.email');
    const token = _.get(req, 'headers.authorization');
    if(email) {
      user.projects(email, token)
      .then((result) => {
        res.status(200).send(result.data);
        following();
      })
      .catch((e) => {
        console.log("Error enviando obteniendo los proyectos", e)
        res.status(422).send();
        following();
      })
    }
    else {
      console.log("Falta email para obtener los proyectos")
      res.status(401).send();
      following();
    }

});
server.get('/user/financial-statement', restrictedService ,(req, res, following) => {
    const email = _.get(req, 'query.email');
    const token = _.get(req, 'headers.authorization');
    if(email) {
      user.financial_statement(email, token)
      .then((result) => {
        res.status(200).send(result.data);
        following();
      })
      .catch((e) => {
        console.log("Error obteniendo el resumen del estado de situacion", e)
        res.status(422).send();
        following();
      })
    }
    else {
      console.log("Falta email para obtener resumen del estado de situacion")
      res.status(401).send();
      following();
    }

});

  server.get('*', (req, res) => {
   return handle(req, res)
 })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
