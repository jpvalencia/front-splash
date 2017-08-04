const express = require('express')
const next = require('next');
const bodyParser = require('body-parser');
const _  = require('lodash');


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

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
