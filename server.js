const express = require('express')
const next = require('next');

const _  = require('lodash');
const auth = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/update-password', (req, res, following) => {
    const token = _.get(req, 'query.token');
    if(token) {
      auth.validateToken(token)
      .then((result) => {
        return app.render(req, res, '/update-password', req.query)
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


  server.get('*', (req, res, following) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
